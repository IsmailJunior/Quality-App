import { type FC, type ReactNode} from 'react';
import { View, Text } from 'react-native';

import { useUser } from '@/app/_hooks/use-user';
import { useContents } from '@/app/_hooks/use-contents';
import { Works } from '@/app/_components/widgets/works';
import {MyWorkPlaceHolder} from '@/app/_components/my-work-placeholder'
import { ColumnSkeleton } from '@/app/_components/column-skeleton';

export const MyWorkScreen: FC = (): ReactNode =>
{
	const { isSubscribed } = useUser();
	const {contents, isLoading} = useContents();
	return (
		<View className='mx-4 my-16'>
			<Text className='text-white font-bold text-3xl mb-3'>My Work</Text>
			<ColumnSkeleton isLoading={isLoading} />
			{ ( !isLoading && isSubscribed ) && <View className='pb-36'>
				<Works works={contents}/>
			</View> }
			<MyWorkPlaceHolder/> 
			</View>
	)
}