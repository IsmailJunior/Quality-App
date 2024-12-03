import { type FC, type ReactNode } from 'react';
import { View } from 'react-native';
import { Image } from 'expo-image';

export const Card: FC<{image: string}> = ({image}): ReactNode =>
{
	return (
			<View className='flex-1 border overflow-hidden rounded-lg m-1'>
			<Image style={{width: 250, height: 250}} source={image}/>
		</View>
	)
}