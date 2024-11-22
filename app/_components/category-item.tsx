import { type FC, type ReactNode} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { SCREEN_WIDTH } from '@/app/_themes/app.constant';

export const CategoryItem: FC<{ title: string, image: any; }> = ( { title, image } ): ReactNode =>
{
	return (
		<View className='flex-1 p-1 justify-center items-center' style={{width: SCREEN_WIDTH}}>
			<TouchableOpacity className='justify-center items-center'>
			<View>{image}</View>
			</TouchableOpacity>
			<Text className='text-center text-white font-semibold mt-3'>{title}</Text>
			</View>
	)
}