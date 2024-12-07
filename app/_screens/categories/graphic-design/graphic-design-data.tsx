import { type FC, type ReactNode} from 'react';
import { View, Text} from 'react-native';

import { useCategory } from '@/app/_hooks/use-category';
import { Works } from '@/app/_components/widgets/works';
import { ColumnSkeleton } from '@/app/_components/column-skeleton';

export const GraphicDesignData: FC = (): ReactNode =>
{
	const { category, isLoading } = useCategory( 'graphic_design' );
	return (
		<View className='mx-4 mb-16 pt-8'>
			<Text className='text-white font-bold text-3xl mb-3'>My Work</Text>
			<ColumnSkeleton isLoading={isLoading} />
				{!isLoading && <Works works={category}/>}
			</View>
	)
}