import { type FC, type ReactNode } from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { CategoryItem } from '@/app/_components/category-item';

export const Categories: FC<{categories: categoryTypes[]}> = ({categories}): ReactNode =>
{
	const _renderItem = ( { item }: any ) =>
	{
		return (
				<CategoryItem title={item.title} image={item.resource} />
		)
	}
	return (
		<View className='flex-1 px-4'>
			<FlashList
				data={ categories }
				keyExtractor={ ( item ) => item.id }
				renderItem={ _renderItem }
				numColumns={ 3 }
				estimatedItemSize={80}
			/>
		</View>
	)	
}