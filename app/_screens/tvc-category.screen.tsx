import { type FC, type ReactNode } from 'react';
import { View, ScrollView, Text, StyleSheet, useWindowDimensions} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { LinearGradient } from 'expo-linear-gradient';

import { ThemedTextRight } from '@/app/_components/ui/themed-text-right';
import { tvcCategory } from '@/app/_constants/constants';
import { SCREEN_HEIGHT } from '../_themes/app.constant';

export const TvcCategoryScreen: FC = (): ReactNode =>
{
	const _renderItem = ( { item }: any ) =>
	{
		return (
			<View>{item}</View>
		)
	}
	return (
		<ScrollView contentContainerStyle={{flex: 1}}>
			<View className='flex-1'>
				<View style={{height: SCREEN_HEIGHT / 3}}>
				<View style={StyleSheet.absoluteFill}>{ tvcCategory.assets.video }</View>
				<LinearGradient
            colors={['transparent','rgba(0,0,0,0.9)']}
            style={{position: 'absolute', width: '100%', height: '100%'}}
          />
				</View>
				<FlashList
					data={ tvcCategory.assets.images }
					numColumns={ 2 }
					estimatedItemSize={ 200 }
					renderItem={_renderItem}
				/>	
		</View>
		</ScrollView>
	)
}
