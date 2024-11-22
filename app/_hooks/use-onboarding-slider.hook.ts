import { useState, useRef} from 'react';
import { router } from 'expo-router';
import { Animated } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { onBoardingSlides } from '@/app/_constants/constants';

export const useOnboardingSlider = () =>
{
	const [ currentIndex, setCurrentIndex ] = useState( 0 );
	const scrollX = useRef( new Animated.Value( 0 ) ).current;
	const slidesRef = useRef( null );
	const viewableItemsChanged = useRef( ( { viewableItems }: any ) =>
	{
		setCurrentIndex(viewableItems[0].index)
	} ).current
	
	const viewConfig = useRef( { viewAreaCoveragePercentThreshold: 50 } ).current
	const scrollTo = async () =>
	{
		if ( currentIndex < onBoardingSlides.length - 1 )
		{
			//@ts-ignore
			slidesRef.current.scrollToIndex( { index: currentIndex + 1 } );
		} else
		{
			try
			{
				await AsyncStorage.setItem( '@onboarding', 'true' )
				router.replace('/(tabs)')
			} catch ( error )
			{
				console.error(error)
			}
		}
	}

	return {
		scrollTo,
		scrollX,
		viewableItemsChanged,
		viewConfig,
		onBoardingSlides,
		slidesRef
	}

}