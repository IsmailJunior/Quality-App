import { type FC, type ReactNode, useState } from "react";
import { View, ScrollView, Switch} from "react-native";

import { HeaderTextRight } from "@/app/_components/ui/header-text-right";
import { ThemedTextRight } from '@/app/_components/ui/themed-text-right';
import { SignUpForm } from '@/app/_components/signup-form';
import { LoginForm } from '@/app/_components/login-form';
export const AuthScreen: FC = (): ReactNode =>
{
	const [ isSignup, setIsSignup ] = useState( true );
	const toggleSignup = () => setIsSignup( prevState => !prevState );

	return (
		<ScrollView className="p-6 my-4">
			<View className="flex flex-row justify-center items-center bg-white my-2 rounded-full">
			<Switch
				trackColor={ { false: 'gray', true: 'green' } }
				thumbColor={isSignup ? 'green' : 'gray'}
				onValueChange={ toggleSignup }
				value={ isSignup }
				/>
				<ThemedTextRight className="text-lg font-extrabold text-black">انشاء حساب</ThemedTextRight>
			</View>
			<HeaderTextRight>{isSignup ? "انشاء حساب" : "تسجيل الدخول"}</HeaderTextRight>
			{isSignup ? <SignUpForm /> : <LoginForm />}
		</ScrollView>
	);
};
