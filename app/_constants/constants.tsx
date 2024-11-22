import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/app/_themes/app.constant';

//@ts-ignore
import One from "@/app/_assets/images/onboarding2.png";

//@ts-ignore
import Two from '@/app/_assets/images/onboarding3.png';
//@ts-ignore
import compistionVideo from '@/app/_assets/videos/composition.mp4';

//@ts-ignore
import App from '@/app/_assets/images/app_cat.png';
//@ts-ignore
import Web from '@/app/_assets/images/web_cat.png';
//@ts-ignore
import Tvc from '@/app/_assets/images/tvc_cat.png';
//@ts-ignore
import Copy from '@/app/_assets/images/copy_cat.png';
//@ts-ignore
import Design from '@/app/_assets/images/design_cat.png';
//@ts-ignore
import Motion from '@/app/_assets/images/motion_cat.png';
//@ts-ignore
import Printing from '@/app/_assets/images/printing_cat.png';
//@ts-ignore
import Reel from '@/app/_assets/images/reel_cat.png';
//@ts-ignore
import Marketing from '@/app/_assets/images/marketing_cat.png';

import { VideoPlayer } from '@/app/_components/widgets/video-player';

const styles = StyleSheet.create( {
	category: {
		width: 80,
		height: 80,
		borderRadius: 15
	},
	slide: {
		width: SCREEN_WIDTH,
		height: SCREEN_HEIGHT
	}
})

export const onBoardingSlides: onBoardingSlidesTypes[] = [
	{
		id: '1',
	  color: "rgba(0,0,0,0.9)",
	  title: "اكتشف",
	  resource: (
		  <VideoPlayer videoUri={compistionVideo} />
	  ),
	  subTitle: "الابداع",
	  description:
		 "في رحلة البحث عن الابداع قد تضيع لوهلة من الزمن وحينها تجدنا",
	},
	{
		id: '2',
	  color: "rgba(0,0,0,0.9)",
	  title: "من دون",
	  resource: (
		 <Image
			source={One}
			style={styles.slide}
		 />
	  ),
	  subTitle: "قيود",
	  description:
		 "نضع لك خطة بدون التزامات او قيود",
	},
	{
		id: '3',
	  color: "rgba(0,0,0,0.9)",
	  resource: (
		 <Image
			source={Two}
			style={styles.slide}
		 />
	  ),
	  title: "نظام",
	  subTitle: "متكامل",
	  description:
		 "ندعمك من جميع النواحي",
	},
];
 
export const categories: categoryTypes[] = [
	{
		id: '1',
		title: 'Graphic Design',
		resource: (
			<Image
			source={Design}
			style={styles.category}
		 />
		)
	},
	{
		id: '2',
		title: 'TVC',
		resource: (
			<Image
			source={Tvc}
			style={styles.category}
		 />
		)
	},
	{
		id: '3',
		title: 'Printing',
		resource: (
			<Image
			source={Printing}
			style={styles.category}
		 />
		)
	},
	{
		id: '4',
		title: 'Reel',
		resource: (
			<Image
			source={Reel}
			style={styles.category}
		 />
		)
	},
	{
		id: '5',
		title: 'Copy Writing',
		resource: (
			<Image
			source={Copy}
			style={styles.category}
		 />
		)
	},
	{
		id: '6',
		title: 'Motion Graphic',
		resource: (
			<Image
			source={Motion}
			style={styles.category}
		 />
		)
	},
	{
		id: '7',
		title: 'Marketing',
		resource: (
			<Image
			source={Marketing}
			style={styles.category}
		 />
		)
	},
	{
		id: '8',
		title: 'Website',
		resource: (
			<Image
			source={Web}
			style={styles.category}
		 />
		)
	},
	{
		id: '9',
		title: 'Mobile App',
		resource: (
			<Image
			source={App}
			style={styles.category}
		 />
		)
	},
]