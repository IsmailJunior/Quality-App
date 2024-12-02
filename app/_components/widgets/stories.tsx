import { type FC, type ReactNode, useRef } from 'react';
import { View } from 'react-native';

export const Stories: FC = (): ReactNode =>
{
	const stories = [{
		id: 'user1',
		name: 'User 1',
		imgUrl: 'user1-profile-image-url',
		stories: [
		  { id: 'story2', source: { uri: '../../_assets/composition.mp4' }, mediaType: 'video' },
		]},
	 ];
	const storyRef = useRef( null );
	// @ts-ignore
	const setStories = () => storyRef.current?.setStories(stories);
	return (
		<View className='border border-red-500'>
			<VideoStories ref={storyRef} stories={stories}/>
		</View>
	)
}