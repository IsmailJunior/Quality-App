import { type FC, type ReactNode} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated'

import { SCREEN_WIDTH } from '@/app/_themes/app.constant';

export const CategoryItem: FC<{ title: string, image: any, href: any }> = ( { title, image, href } ): ReactNode =>
{
	return (
		<Animated.View
			sharedTransitionTag='sharedTag'
			entering={ FadeIn.duration( 800 ) }
			exiting={ FadeOut.duration( 800 ) }
			className='flex-1 p-1 justify-center items-center'
			style={ { width: SCREEN_WIDTH } }>
			<Link href={href}>
			<View>{image}</View>
			</Link>
			<Text className='text-center text-white font-semibold mt-3'>{title}</Text>
			</Animated.View>
	)
}