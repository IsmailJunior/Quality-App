import { type FC, type ReactNode, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView} from 'react-native';
import { router} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useUser } from '@/app/_hooks/use-user.hook';
import { ThemedTextRight } from '@/app/_components/ui/themed-text-right';
import { Categories } from '@/app/_components/widgets/categories';

import { categories } from '@/app/_constants/constants';

export const HomeScreen: FC = (): ReactNode =>
{
	const { user, isLoading, error } = useUser();
	const clearStore = async () =>
		{
		await AsyncStorage.removeItem( '@onboarding' );
		router.replace( '/(routes)/onboarding' );
	}
	const clearAuthStore = async () =>
	{
		await AsyncStorage.removeItem( '@isGuest' );
		router.replace('/(routes)/auth')
	}

	useEffect( () =>
	{
		console.log(user);
	}, [])

	return (
		<ScrollView>
		<Categories categories={categories}/>
		<View className='m-12'>
				<ThemedTextRight className='text-white'>الصفحة الرئيسية</ThemedTextRight>
			<TouchableOpacity onPress={clearStore}>
			<ThemedTextRight className='text-white'>
				اعادة تشغيل				
			</ThemedTextRight>			
			</TouchableOpacity>		
			<TouchableOpacity onPress={clearAuthStore}>
			<ThemedTextRight className='text-white'>
						تسجيل الدخول
			</ThemedTextRight>			
			</TouchableOpacity>		
		</View>
		</ScrollView>
	)
}
