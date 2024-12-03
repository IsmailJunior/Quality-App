import { type FC, type ReactNode, useRef} from 'react';
import { View} from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { Card } from '@/app/_components/ui/card';

export const Cards: FC<{cards: any}> = ({cards}): ReactNode =>
{
	const viewConfig = useRef( { viewAreaCoveragePercentThreshold: 50 } ).current;
	const _renderItem = ( item: any ) =>
	{
		return (
			<Card image={item.item.photo.url} />
		)
	}
	return (
		<View className='mb-10 mt-5'>
			<FlashList
				horizontal
				showsHorizontalScrollIndicator={ false }
				bounces={ false }
				keyExtractor={ ( item: any ) => item.id }
				data={ cards }
				viewabilityConfig={ viewConfig }
				scrollEventThrottle={ 1 }
				estimatedItemSize={250}
				removeClippedSubviews
				renderItem={ _renderItem } />
		</View>
	)
}