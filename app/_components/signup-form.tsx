import { type FC, type ReactNode, useContext } from "react";
import { View, ScrollView} from "react-native";

import { AuthContext } from "@/app/_store/auth-store";
import { Input } from "@/app/_components/ui/input";
import { ThemedButton } from "@/app/_components/ui/themed-button";

export const SignUpForm: FC = (): ReactNode =>
{
	const {
		user,
		isLoading,
		onInputChange,
		onSignUpAsAGuestPressed,
		onSignUpPressed,
	} = useContext( AuthContext );
	
	return (
		<ScrollView className="p-2 mb-2">
			<View className="w-full px-2">
				<Input
					label="الاسم الاول"
					error="يجب ادخال اسمك الاول"
					isValid={user.firstName.isValid}
					textInputConfig={ {
						keyboardType: "default",
						placeholder: "الاسم الاول",
						autoCorrect: false,
						autoCapitalize: "none",
						onChangeText: value =>
						onInputChange("firstName", value),
						value: user.firstName.value,
					}}
				/>

				<Input
					label="الاسم الاخير"
					error="يجب ادخال اسمك الاخير"
					isValid={user.lastName.isValid}
					textInputConfig={{
						keyboardType: "default",
						placeholder: "الاسم الاخير",
						autoCorrect: false,
						autoCapitalize: "none",
						onChangeText: value => onInputChange("lastName", value),
						value: user.lastName.value,
					}}
				/>

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

				<Input
					label="تاكيد كلمة المرور"
					error="يجب ان تكون مطابقة لكلمة المرور"
					isValid={user.passwordConfirm.isValid}
					textInputConfig={{
						keyboardType: "default",
						placeholder: "كلمة المرور",
						secureTextEntry: true,
						autoCorrect: false,
						autoCapitalize: "none",
						onChangeText: value =>
							onInputChange("passwordConfirm", value),
						value: user.passwordConfirm.value,
					}}
				/>
				<View className="my-2">
				<ThemedButton
					isLoading={isLoading}
					buttonConfig={{
						onPress: onSignUpPressed,
					}}
					title="انشاء حساب"
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
