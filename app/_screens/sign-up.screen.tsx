import { type FC, type ReactNode, useContext} from 'react';
import { View, ScrollView } from 'react-native';

import { AuthContext } from '@/app/_store/auth-store';
import { HeaderTextRight } from '@/app/_components/ui/header-text-right';
import { Input} from '@/app/_components/ui/input';
import { ThemedButton } from '@/app/_components/ui/themed-button';

export const SignUpScreen: FC = (): ReactNode =>
{
	const {
		user,
		isLoading,
		error,
		onInputChange,
		onSignUpAsAGuestPressed,
		onSignUpPressed } = useContext( AuthContext );
	
	return (
		<ScrollView className='p-4 py-12 flex-1'>
			
			<HeaderTextRight>انشاء حساب</HeaderTextRight>
			<View className='w-full px-2'>
			<Input label='الاسم الاول' textInputConfig={ {
				keyboardType: 'default',
					autoCorrect: false,
					autoCapitalize: 'none',
					onChangeText: (value) => onInputChange('firstName', value),
					value: user.firstName
				} } />
				
			<Input label='الاسم الاخير' textInputConfig={ {
				keyboardType: 'default',
					autoCorrect: false,
					autoCapitalize: 'none',
					onChangeText: (value) => onInputChange('lastName', value),
					value: user.lastName
				} } />
				
			<Input label='البريد الالكتروني' textInputConfig={ {
				keyboardType: 'email-address',
					placeholder: 'example@mail.com',
					autoCorrect: false,
					autoCapitalize: 'none',
					onChangeText: (value) => onInputChange('username', value),
					value: user.username
				} } />
				
			<Input label='كلمة المرور' textInputConfig={ {
				keyboardType: 'default',
				placeholder: 'كلمة المرور',
				secureTextEntry: true,
				autoCorrect: false,
				autoCapitalize: 'none',
				onChangeText: (value) => onInputChange('password', value),
				value: user.password
				} } />

			<Input label='تاكيد كلمة المرور' textInputConfig={ {
				keyboardType: 'default',
				placeholder: 'كلمة المرور',
				secureTextEntry: true,
				autoCorrect: false,
				autoCapitalize: 'none',
				onChangeText: (value) => onInputChange('passwordConfirm', value),
				value: user.passwordConfirm
				} } />

				<ThemedButton isLoading={isLoading} buttonConfig={ {
					onPress: onSignUpPressed
				} }
					title='التسجيل' />
				
				<ThemedButton buttonConfig={ {
					onPress: onSignUpAsAGuestPressed
				} }
					title='الدخول كضيف' />
			</View>
		</ScrollView>
	)
}