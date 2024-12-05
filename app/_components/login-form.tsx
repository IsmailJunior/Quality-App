import { type FC, type ReactNode, useContext } from "react";
import { View, ScrollView} from "react-native";

import { AuthContext } from "@/app/_store/auth-store";
import { Input } from "@/app/_components/ui/input";
import { ThemedButton } from "@/app/_components/ui/themed-button";

export const LoginForm: FC = (): ReactNode =>
{
	const {
		user,
		isLoading,
		onInputChange,
		onSignUpAsAGuestPressed,
		onLoginPressed,
	} = useContext( AuthContext );
	
	return (
		<ScrollView className="mb-4">
			<View className="w-full">
				<Input
					label="البريد الالكتروني"
					error="البريد الالكتروني مطلوب"
					isValid={user.username.isValid}
					textInputConfig={{
						keyboardType: "email-address",
						placeholder: "example@mail.com",
						autoCorrect: false,
						autoCapitalize: "none",
						onChangeText: value => onInputChange("username", value),
						value: user.username.value,
					}}
				/>

				<Input
					label="كلمة المرور"
					error="كلمة المرور مطلوبة"
					isValid={user.password.isValid}
					textInputConfig={{
						keyboardType: "default",
						placeholder: "كلمة المرور",
						secureTextEntry: true,
						autoCorrect: false,
						autoCapitalize: "none",
						onChangeText: value => onInputChange("password", value),
						value: user.password.value,
					}}
				/>
				<View className="my-2">
				<ThemedButton
					isLoading={isLoading}
					buttonConfig={{
						onPress: onLoginPressed,
					}}
					title="تسجيل الدخول"
				/>

				<ThemedButton
					buttonConfig={{
						onPress: onSignUpAsAGuestPressed,
					}}
					title="الدخول كضيف"
				/>
				</View>
			</View>
		</ScrollView>
	);
};
