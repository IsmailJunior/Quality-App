import { type FC } from 'react';
import { View } from 'react-native';
import Animated, {FadeInUp, FadeOut} from 'react-native-reanimated'
import Ionicons from '@expo/vector-icons/Ionicons';

import { ExternalLink } from '@/app/_components/external-link';

export const SocialMedia: FC = () =>
{
	return (
		<View className='my-16'>
			<Animated.Text
					entering={ FadeInUp.duration( 800 ) }
					exiting={ FadeOut.duration( 800 ) }
					className='font-extrabold text-3xl text-white mx-4'>Follow us on</Animated.Text>
			<View className='mt-6 mx-4 flex flex-row justify-between items-center'>
				
			<ExternalLink href='https://www.instagram.com/qualityteam.iq/profilecard/?igsh=M3NwcndoYTJrYTIx'>
				<Ionicons name='logo-instagram' size={50} color='white'/>
			</ExternalLink>
			<ExternalLink href='https://www.facebook.com/profile.php?id=61551994790268&mibextid=ZbWKwL'>
				<Ionicons name='logo-facebook' size={50} color='white'/>
			</ExternalLink>
			<Ionicons name='logo-linkedin' size={50} color='white'/>
			<Ionicons name='logo-youtube' size={50} color='white'/>
		</View>
		</View>
	)
}