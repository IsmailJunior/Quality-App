import { type FC } from 'react';
import { Asset } from 'expo-asset';
import { View} from 'react-native';
import { Image } from 'expo-image';

// @ts-ignore
import Placeholder from '@/app/_assets/images/placeholder.png';

export const WorkChip: FC<{
	name: string,
	type: string,
	description: string,
	status: string,
	photo: string;
}> = ( { name, type, status, description, photo } ) =>
{
	return (
		<View className='flex-1 my-2'>
			<Image contentFit='cover' priority='high' style={ { width: 150, height: 150, borderRadius: 15 } } placeholder={Placeholder} source={photo} />
		</View>
	)
}