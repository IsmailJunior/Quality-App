import { type FC, type ReactNode } from 'react';
import { View, StyleSheet} from 'react-native';
import { useVideoPlayer, VideoView, type VideoSource } from 'expo-video';

import { SCREEN_WIDTH } from '@/app/_themes/app.constant';

export const VideoPlayer: FC<{videoUri: VideoSource, width?: number, height?: number}> = ({videoUri, width = SCREEN_WIDTH, height= 350}): ReactNode =>
{

	const player = useVideoPlayer( videoUri, ( player ) =>
	{
		player.loop = true;
		player.muted = true;
		player.play();
	} )
	
	const styles = StyleSheet.create( {
		videoPlayer: {
			width: width,
			height: height
		}
	})

	return (
		<View className='flex-1 justify-center items-center'>
			<VideoView
				player={ player }
				style={ styles.videoPlayer }
				contentFit='cover'
				nativeControls={ false } />
		</View>
	)
};