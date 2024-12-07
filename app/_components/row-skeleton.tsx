import { type FC } from 'react';
import Skeleton from 'react-native-reanimated-skeleton';

export const RowSkeleton: FC<{isLoading: boolean}> = ({isLoading}) =>
{
	return (
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
	)
}