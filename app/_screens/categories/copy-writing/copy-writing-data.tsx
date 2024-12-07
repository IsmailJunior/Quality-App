import { type FC, type ReactNode} from 'react';
import { View, Text} from 'react-native';

import { useCategory } from '@/app/_hooks/use-category';
import { Works } from '@/app/_components/widgets/works';
import { ColumnSkeleton } from '@/app/_components/column-skeleton';

export const CopyWritingData: FC = (): ReactNode =>
{
	const { category, isLoading } = useCategory( 'copy_writing' );
	return (
		<View className='mx-4 mb-16 pt-8'>
			<Text className='text-white font-bold text-3xl'>My Work</Text>
			<ColumnSkeleton isLoading={isLoading} />
				{!isLoading && <Works works={category}/>}
			</View>
	)
}