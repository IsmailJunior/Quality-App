import { type FC, type ReactNode } from 'react';
import { View, ScrollView} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { LinearGradient } from 'expo-linear-gradient';

import { ThemedTextRight } from '@/app/_components/ui/themed-text-right';
import { webAppsCategory } from '@/app/_constants/constants';

export const WebAppsCategoryScreen: FC = (): ReactNode =>
{
	const _renderItem = ( { item }: any ) =>
	{
		return (
			<View className='m-2 mx-auto'>{item}</View>
		)
	}
	return (
		<ScrollView>
			<FlashList
					data={ webAppsCategory.assets.images }
					estimatedItemSize={ 200 }
					renderItem={_renderItem}
			/>	
			<LinearGradient
            colors={['transparent','rgba(0,0,0,0.6)']}
            style={{position: 'absolute', width: '100%', height: '100%'}}
			/>
			<View className='p-8'>
				<ThemedTextRight className='text-white text-lg font-bold'>{webAppsCategory.description}</ThemedTextRight>
			</View>
		</ScrollView>
	)
}
