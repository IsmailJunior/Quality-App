import {type FC, type ReactNode} from 'react';
import { Animated, View, StyleSheet} from 'react-native';
import { useOnboardingSlider } from '@/app/_hooks/use-onboarding-slider.hook';
import { Slider } from '@/app/_components/widgets/slider';

export const OnboardingScreen: FC = (): ReactNode =>
{
	const {
		scrollX,
		scrollTo,
		slidesRef,
		viewableItemsChanged,
		viewConfig,
		onBoardingSlides } = useOnboardingSlider();
	
	const _renderItem = ( { item }: any ) =>
	{
		return (
			<Slider.Slide {...item} />
		)
	}
	
	return (
		<Slider.Root>
			<View style={[{flex: 1}, StyleSheet.absoluteFill]}>
				<Animated.FlatList
				data={ onBoardingSlides }
				renderItem={ _renderItem }
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				bounces={ false }
				keyExtractor={ ( item ) => item.id }
				onScroll={ Animated.event( [ { nativeEvent: { contentOffset: { x: scrollX } } } ],
						{ useNativeDriver: false } ) }
				onViewableItemsChanged={ viewableItemsChanged }
				viewabilityConfig={ viewConfig }
				scrollEventThrottle={32}
				ref={slidesRef}
			/>
			</View>
			<View className='justify-center items-center h-1/3'>
			<Slider.Indicator data={ onBoardingSlides } scrollX={ scrollX } />
			<Slider.NextButton scrollTo={scrollTo} />
			</View>
		</Slider.Root>
	)
};