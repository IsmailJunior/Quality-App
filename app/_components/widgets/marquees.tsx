import { type FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import Animated, { FadeInUp, FadeOut } from 'react-native-reanimated';

import { MarqueeLogos } from '@/app/_components/marquee-logos';
import {primaryMarqueeLogos, secondaryMarqueeLogos} from '@/app/_constants/constants'

export const Marquees: FC = () =>
{
	return (
		<View className='my-4'>
			<Animated.Text
				entering={ FadeInUp.duration( 800 ) }
				exiting={ FadeOut.duration( 800 ) }
				className='font-extrabold mx-4 text-3xl text-white'>Partners</Animated.Text>
				<View>
				<MarqueeLogos>
				{ primaryMarqueeLogos.map( ( image, index ) =>
				{
					return (
						<View key={index}>
							{image}
						</View>
					)
				})}		
				</MarqueeLogos>
				<LinearGradient
            colors={['transparent','black']}
            style={{position: 'absolute', width: '100%', height: 240}}
          />
			</View>
			<MarqueeLogos speed={2}>
				{ secondaryMarqueeLogos.map( ( image, index ) =>
				{
					return (
						<View key={index}>
							{image}
						</View>
					)
				} ) }		
			</MarqueeLogos>
				</View>
	)
}