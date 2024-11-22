import { type FC, type ReactNode } from 'react';
import { View, StyleSheet} from 'react-native';
import { useVideoPlayer, VideoView, type VideoSource } from 'expo-video';

import { SCREEN_WIDTH, SCREEN_HEIGHT } from '@/app/_themes/app.constant';

export const VideoPlayer: FC<{videoUri: VideoSource}> = ({videoUri}): ReactNode =>
{

	const player = useVideoPlayer( videoUri, ( player ) =>
	{
		player.loop = true;
		player.muted = true;
		player.play();
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

const styles = StyleSheet.create( {
	videoPlayer: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT
	}
})