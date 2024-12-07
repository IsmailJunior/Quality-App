import { type FC } from 'react';
import { View} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';

export const ColumnSkeleton: FC<{isLoading: boolean}> = ({isLoading}) =>
{
	return (
		isLoading && <View className='flex flex-row'>
			<Skeleton
			containerStyle={ { flex: 1} }
			animationType='shiver'
			isLoading={ isLoading }
			layout={ [
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
			]}
		>
			</Skeleton>
			<Skeleton
			containerStyle={ { flex: 1} }
			animationType='shiver'
			isLoading={ isLoading }
			layout={ [
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
				{key: 'card1', width: 150, height: 150, margin: 4, borderRadius: 15},
			]}
		>
			</Skeleton>
		</View>
	)
}