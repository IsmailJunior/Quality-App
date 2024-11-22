import { type FC, type ReactNode } from 'react';
import { View, TouchableOpacity, ScrollView} from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { ThemedTextRight } from '@/app/_components/ui/themed-text-right';
import { Categories } from '@/app/_components/widgets/categories';

import { categories } from '@/app/_constants/constants';

export const HomeScreen: FC = (): ReactNode =>
{
	 
	const clearStore = async () =>
		{
		  await AsyncStorage.removeItem( '@onboarding' );
		  router.replace('/(routes)/onboarding')
		}
	return (
		<SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'always' } }>
		<ScrollView>
		<Categories categories={categories}/>
		<View className='m-12'>
			<ThemedTextRight className='text-white'>الصفحة الرئيسية</ThemedTextRight>
			<TouchableOpacity onPress={clearStore}>
			<ThemedTextRight className='text-white'>
				اعادة تشغيل				
			</ThemedTextRight>			
			</TouchableOpacity>		
		</View>
		</ScrollView>
		</SafeAreaView>
		</SafeAreaProvider>	
	)
}
