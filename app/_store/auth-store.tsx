import { type FC, type ReactNode, createContext, useState } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

import { useAuth } from '@/app/_hooks/use-auth.hook';

export const AuthContext = createContext( {
	user: {
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		passwordConfirm: ''
	},
	isLoading: false,
	error: null,
	onInputChange: ( inputIdentifier: string, value: string ) => { },
	onSignUpAsAGuestPressed: async () => { },
	onSignUpPressed: async () => {}
} );

const AuthContextProvider: FC<{ children: ReactNode; }> = ( { children } ) =>
{
	const [ user, setUser ] = useState( {
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		passwordConfirm: ''
	} )	

	const { isLoading, error, token: {token}} = useAuth(user);

	const onInputChange = (inputIdentifier: string, value: string) =>
		{
			setUser( ( currentValue ) =>
			{
				return {
					...currentValue,
					[inputIdentifier]: value
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
				console.error(error)
			}
	}
	
	const onSignUpPressed = async () =>
		{
			setUser( {
				firstName: '',
				lastName: '',
				username: '',
				password: '',
				passwordConfirm: ''
			} );
			if ( !isLoading && !error )
			{
				await SecureStore.setItemAsync( 'accessToken', token );
				router.replace( '/(tabs)' );
			}
		}
		
	const value = {
		user,
		isLoading,
		error,
		onInputChange,
		onSignUpAsAGuestPressed,
		onSignUpPressed
	}
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export default AuthContextProvider;