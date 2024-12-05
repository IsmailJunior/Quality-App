import { type FC, type ReactNode, useEffect} from 'react';
import { View, TouchableOpacity } from 'react-native';
import Animated, {FadeInUp, FadeOut} from 'react-native-reanimated';
import { router} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store'
import Skeleton from 'react-native-reanimated-skeleton';

import { Cards } from '@/app/_components/ui/cards';
import { ThemedTextRight } from '@/app/_components/ui/themed-text-right';
import { Categories } from '@/app/_components/widgets/categories';
import { Marquees } from '@/app/_components/widgets/marquees';
import { SocialMedia } from '@/app/_components/widgets/social-media';

import { getMe } from '@/app/_services/user';
import { useUi } from '@/app/_hooks/use-ui';
import { categories} from '@/app/_constants/constants';

export const HomeScreen: FC = (): ReactNode =>
{
	const { isLoading, cards } = useUi();
	
	const clearStore = async () =>
		{
		await AsyncStorage.removeItem( '@onboarding' );
		router.replace( '/(routes)/onboarding' );
	}
	const clearAuthStore = async () =>
	{
		await AsyncStorage.removeItem( '@isGuest' );
		await SecureStore.deleteItemAsync( 'accessToken' );
		router.replace('/(routes)/auth')
	}

	useEffect( () =>
	{
		const getMyData = async () =>
		{
			await getMe();
		};
		getMyData()
	}, [])
	
	return (
		<Animated.ScrollView entering={FadeInUp.duration(800)} exiting={FadeOut.duration(800)}>
			<Categories categories={ categories } />
			<View className='mx-4 mt-16'>
				<Animated.Text
					entering={ FadeInUp.duration( 800 ) }
					exiting={ FadeOut.duration( 800 ) }
					className='font-extrabold text-3xl text-white'>Featured</Animated.Text>
			</View>
			<Skeleton
				containerStyle={ { flex: 1, flexDirection: 'row' } }
				animationType='pulse'
				isLoading={ isLoading }
				layout={ [
					{key: 'card1', width: 250, height: 250, margin: 4, borderRadius: 8},
					{key: 'card1', width: 250, height: 250, margin: 4, borderRadius: 8},
					{key: 'card1', width: 250, height: 250, margin: 4, borderRadius: 8},
					{key: 'card1', width: 250, height: 250, margin: 4, borderRadius: 8},
					{key: 'card1', width: 250, height: 250, margin: 4, borderRadius: 8},
				]}
			>
			</Skeleton>
			{ !isLoading && <Cards cards={ cards } /> }
			<Marquees />
			<SocialMedia />
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
		</Animated.ScrollView>
	)
}