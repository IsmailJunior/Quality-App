import { type FC, type ReactNode} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
import Animated, {FadeInUp, FadeOut} from 'react-native-reanimated';

import { Cards } from '@/app/_components/ui/cards';
import { Categories } from '@/app/_components/widgets/categories';
import { Marquees } from '@/app/_components/widgets/marquees';
import { SocialMedia } from '@/app/_components/widgets/social-media';
import { RowSkeleton } from '@/app/_components/row-skeleton';

import { useOnboarding } from '@/app/_hooks/use-onboarding.hook';
import { useUi } from '@/app/_hooks/use-ui';
import { categories} from '@/app/_constants/constants';

export const HomeScreen: FC = (): ReactNode =>
{
	const { isLoading, cards } = useUi();
	const onClearStorePressed = async () =>
	{
		router.replace( '/onboarding' );
	}
	return (
		<Animated.ScrollView
			className='mb-20'
			entering={ FadeInUp.duration( 800 ) }
			exiting={ FadeOut.duration( 800 ) }>
			<Categories categories={ categories } />
			<View className='mx-4 mt-16'>
				<Animated.Text
					entering={ FadeInUp.duration( 800 ) }
					exiting={ FadeOut.duration( 800 ) }
					className='font-extrabold text-3xl text-white'>Featured</Animated.Text>
			</View>
			<RowSkeleton isLoading={isLoading} />
			{ !isLoading && <Cards cards={ cards } /> }
			<Marquees />
			<SocialMedia />

			<TouchableOpacity className='flex-1 justify-center items-center' onPress={onClearStorePressed}>
				<Text className='text-white font-semibold text-3xl'>تنظيف المخزن</Text>
			</TouchableOpacity>
		</Animated.ScrollView>
	)
}