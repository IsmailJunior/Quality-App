import { type FC, type ReactNode, createContext, useState } from 'react';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

import { signUp, login } from '@/app/_services/auth';

export const AuthContext = createContext( {
	user:{
		firstName: { value: '', isValid: true },
		lastName: { value: '', isValid: true },
		username: { value: '', isValid: true },
		password: { value: '', isValid: true },
		passwordConfirm: { value: '', isValid: true },
	},
	isLoading: false,
	onInputChange: ( inputIdentifier: string, value: string ) => { },
	onSignUpAsAGuestPressed: async () => { },
	onSignUpPressed: async () => { },
	onLoginPressed: async () => {}
} );

const AuthContextProvider: FC<{ children: ReactNode; }> = ( { children } ) =>
{
	const [ isLoading, setIsLoading ] = useState( false );
	
	const [ user, setUser ] = useState( {
		firstName: {value: '', isValid: true},
		lastName: {value: '', isValid: true},
		username: {value: '', isValid: true},
		password: {value: '', isValid: true},
		passwordConfirm: {value: '', isValid: true}
	} );

	const onInputChange = (inputIdentifier: string, value: string) =>
		{
			setUser( ( currentValue ) =>
			{
				return {
					...currentValue,
					[inputIdentifier]: {value}
				}
			} )
	}
	
	const onSignUpAsAGuestPressed = async () =>
		{
			try
			{
				await AsyncStorage.setItem( '@isGuest', 'true' );
				router.replace('/(tabs)')
			} catch ( error )
			{
				console.log(error);
			}
	}
	const onSignUpPressed = async () =>
	{
		const isFirstNameValid = user.firstName.value.trim().length > 0;
		const isLastNameValid = user.lastName.value.trim().length > 0;
		const isUsernameValid = user.username.value.trim().includes( '@' ) && user.username.value.trim().endsWith( '.com' ) && user.username.value.trim().length > 3;
		const isPasswordValid = user.password.value.trim().length >= 8;
		const isPasswordConfirmValid = user.passwordConfirm.value.trim() === user.password.value.trim();

		try
		{
			setIsLoading( true );
			if ( !isFirstNameValid || !isLastNameValid || !isUsernameValid || !isPasswordValid || !isPasswordConfirmValid )
			{
				setUser( ( currentValue ) =>
					{
						return {
							firstName: { value: currentValue.firstName.value, isValid: isFirstNameValid },
							lastName: { value: currentValue.lastName.value, isValid: isLastNameValid },
							username: { value: currentValue.username.value, isValid: isUsernameValid },
							password: { value: currentValue.password.value, isValid: isPasswordValid },
							passwordConfirm: {value: currentValue.passwordConfirm.value, isValid: isPasswordConfirmValid}
						}
				} )
				setIsLoading(false)
				return;
			}
			const data = await signUp( {
				firstName: user.firstName.value,
				lastName: user.lastName.value,
				username: user.username.value,
				password: user.password.value,
				passwordConfirm: user.passwordConfirm.value
			} );
			await SecureStore.setItemAsync( 'accessToken', data.token );
			setUser( {
				firstName: { value: '', isValid: true },
				lastName: { value: '', isValid: true },
				username: { value: '', isValid: true },
				password: { value: '', isValid: true },
				passwordConfirm: { value: '', isValid: true },
			});
			setIsLoading( false );
			router.replace( '/(tabs)' );
		} catch ( error )
		{
		Alert.alert( 'فشل', 'هناك خطأ في المعلومات الرجاء التحقق والمحاولة مجدداً' );
		setUser( {
			firstName: { value: '', isValid: true },
			lastName: { value: '', isValid: true },
			username: { value: '', isValid: true },
			password: { value: '', isValid: true },
			passwordConfirm: { value: '', isValid: true },
		});
			setIsLoading( false );
			}
		}
		
	const onLoginPressed = async () =>
	{
		const isUsernameValid = user.username.value.trim().includes( '@' ) && user.username.value.trim().endsWith( '.com' ) && user.username.value.trim().length > 3;
		const isPasswordValid = user.password.value.trim().length >= 8;
		try
		{
			setIsLoading( true );
			if ( !isUsernameValid || !isPasswordValid )
			{
				setUser( ( currentValue ) =>
					{
					return {
							...currentValue,
							username: { value: currentValue.username.value, isValid: isUsernameValid },
							password: { value: currentValue.password.value, isValid: isPasswordValid },
						}
				} )
				setIsLoading(false)
				return;
			}
			const data = await login( {
				username: user.username.value,
				password: user.password.value,
			} );

			await SecureStore.setItemAsync( 'accessToken', data.token );
			setUser( {
				...user,
				username: { value: '', isValid: true },
				password: { value: '', isValid: true },
			});
			setIsLoading( false );
			router.replace( '/(tabs)' );
		} catch ( error )
		{
		Alert.alert( 'فشل', 'هناك خطأ في المعلومات الرجاء التحقق والمحاولة مجدداً' );
			setUser( {
			...user,
			username: { value: '', isValid: true },
			password: { value: '', isValid: true },
		});
			setIsLoading( false );
			}
		}
		
	const value = {
		user,
		isLoading,
		onInputChange,
		onSignUpAsAGuestPressed,
		onSignUpPressed,
		onLoginPressed
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthContextProvider;