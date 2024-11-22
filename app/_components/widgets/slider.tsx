import { type FC, type ReactNode} from 'react';
import { View, useWindowDimensions, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import Svg, { G, Circle } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { SCREEN_WIDTH } from '@/app/_themes/app.constant';
import { ThemedTextRight } from '@/app/_components/ui/themed-text-right';

const Root: FC<{children: ReactNode}> = ({children}): ReactNode =>
{
	const { width } = useWindowDimensions();
	return (
		<View className='flex-1 justify-end items-center' style={{width: width}}>
			{children}
		</View>
	)
};

const Slide: FC<onBoardingSlidesTypes> = ({title,subTitle,description,resource, color}): ReactNode =>
{
	const { width } = useWindowDimensions();
	return (
		<View className='flex-1 justify-center items-center' style={{width: width}}>
			<View style={ StyleSheet.absoluteFill }>{ resource }</View>
			<LinearGradient
            colors={['transparent',color]}
            style={{position: 'absolute', width: '100%', height: '100%'}}
          />
		<View>
	<View
	 style={{
		width: SCREEN_WIDTH * 1,
		paddingHorizontal: verticalScale(25),
	 }}
  >
	 <ThemedTextRight className='font-extrabold text-3xl text-white'>
		{title}
	 </ThemedTextRight>
	 <ThemedTextRight className='font-extrabold text-3xl text-white'>
		{subTitle}
	 </ThemedTextRight>
	 <ThemedTextRight className='py-1 text-xl text-slate-200'>
		{description}
		</ThemedTextRight>
  </View>
</View>
	</View>
	)
};

const Indicator: FC<{ data: onBoardingSlidesTypes[], scrollX: any }> = ( {data, scrollX} ): ReactNode =>
{
	const { width } = useWindowDimensions();
	return (
		<View className='flex-row h-[64px]'>
			{ data.map( ( _, i ) =>
			{
				const inputRange = [ ( i - 1 ) * width, i * width, ( i + 1 ) * width ]
				const dotWidth = scrollX.interpolate( {
					inputRange,
					outputRange: [ 10, 20, 10 ],
					extrapolate: 'clamp',
				})
				const opacity = scrollX.interpolate( {
					inputRange,
					outputRange: [ 0.3, 1, 0.3 ],
					extrapolate: 'clamp',
				})
				return <Animated.View
					className='h-3 rounded-md mx-2 bg-white'
					style={ { width: dotWidth, opacity } } key={ i.toString() } />
			})}
		</View>
	)
}

const NextButton: FC<{scrollTo: () => void}> = ({scrollTo}): ReactNode =>
{
	const size = 128;
	const strokeWidth = 2;
	const center = size / 2;
	const radius = size / 2 - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;

	return (
		<View className='flex-1 justify-center items-center'>
			<Svg width={size} height={size}>
			<G rotation='-90' origin={center}>
				<Circle
					stroke='white'
					cx={ center }
					cy={ center }
					r={ radius }
					strokeWidth={ strokeWidth }
					fillOpacity={ 0 } />
				<Circle
					stroke='white'
					cx={ center }
					cy={ center }
					r={ radius }
					strokeWidth={ strokeWidth }
					strokeDasharray={ circumference }
					fillOpacity={0} />
			</G>
			</Svg>
			<TouchableOpacity onPress={scrollTo} className='absolute bg-yellow-500 rounded-[100px] p-5'>
				<Ionicons name='arrow-forward' size={32} color='#fff'/>
			</TouchableOpacity>
		</View>
	)
}

export const Slider = {
	Root,
	Slide,
	Indicator,
	NextButton
}