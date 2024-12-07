import { type FC, type ReactNode } from "react";
import {
	DarkTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { Providers } from '@/app/_providers/providers';
import { useColorScheme } from "@/app/_hooks/use-color-scheme.hook";
import "@/app/_styles/global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout: FC = (): ReactNode =>
{
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require("./_assets/fonts/SpaceMono-Regular.ttf"),
	} );
	
	useEffect( () =>
	{
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThemeProvider value={DarkTheme}>
			<Providers>
			<Stack
			>
				<Stack.Screen name="(tabs)" options={{ headerShown: false, title: 'Home'}} />
				<Stack.Screen
					name="(routes)/onboarding/index"
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="(routes)/(categories)/tvc/index"
					options={{ title: "TVC" }}
				/>
				<Stack.Screen
					name="(routes)/(categories)/graphic_design/index"
					options={{ title: "Graphic Design" }}
				/>
				<Stack.Screen
					name="(routes)/(categories)/motion_graphic/index"
					options={{ title: "Motion Graphic" }}
				/>
				<Stack.Screen
					name="(routes)/(categories)/copy_writing/index"
					options={{ title: "Copy Writing" }}
				/>
				<Stack.Screen
					name="(routes)/(categories)/marketing/index"
					options={{ title: "Marketing" }}
				/>
				<Stack.Screen
					name="(routes)/(categories)/mobile-apps/index"
					options={{ title: "Mobile Apps" }}
				/>
				<Stack.Screen
					name="(routes)/(categories)/printing/index"
					options={{ title: "Printing" }}
				/>
				<Stack.Screen
					name="(routes)/(categories)/reel/index"
					options={{ title: "Reel" }}
				/>
				<Stack.Screen
					name="(routes)/(categories)/web-apps/index"
					options={{ title: "Web Apps" }}
				/>
				<Stack.Screen
					name="(routes)/auth/index"
					options={{ title: "Auth", presentation: 'card'}}
				/>
				<Stack.Screen name="+not-found" />
			</Stack>
			</Providers>
			<StatusBar style="auto" />
		</ThemeProvider>
	);
};

export default RootLayout;
