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
		<ScrollView>
			<View className="flex flex-row justify-center items-center bg-white p-6 rounded-b-3xl">
			<Switch
				trackColor={ { false: 'gray', true: 'green' } }
				thumbColor={isSignup ? 'green' : 'gray'}
				onValueChange={ toggleSignup }
				value={ isSignup }
				/>
				<ThemedTextRight className="text-xl font-extrabold text-black">انشاء حساب</ThemedTextRight>
			</View>
			<View className="px-6 my-4">
			<HeaderTextRight>{isSignup ? "انشاء حساب" : "تسجيل الدخول"}</HeaderTextRight>
			{isSignup ? <SignUpForm /> : <LoginForm />}
			</View>
		</ScrollView>
	);
};
