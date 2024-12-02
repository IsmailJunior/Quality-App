import { Easing } from "react-native-reanimated";


export const useNativeStackLayout = () =>
{
	const ANIMATION_DURATION = 300;

	const nativeStackLayout = {
		cardOverlayEnabled: true,
 // @ts-ignore
		cardStyleInterpolator: ({ current, next, layouts }) => {
			const INITIAL_TRANSLATE_X_MULTIPLIER = 1.6;
			const NEXT_TRANSLATE_X_MULTIPLIER = -0.3;

			// Calculate translateX for the current screen
			const translateX = current.progress.interpolate({
				inputRange: [0, 1],
				outputRange: [
					INITIAL_TRANSLATE_X_MULTIPLIER *
						layouts.screen.width,
					0,
				],
				extrapolate: "clamp",
			});

			// Calculate translateX for the next screen (if exists)
			const nextTranslateX = next
				? next.progress.interpolate({
						inputRange: [0, 1],
						outputRange: [
							0,
							NEXT_TRANSLATE_X_MULTIPLIER *
								layouts.screen.width,
						],
						extrapolate: "clamp",
				  })
	  : 0;
	
	  // const ROTATE_VALUES = ["5deg", "-5deg", "5deg", "-5deg", "0deg"]

	  // Calculate rotation for a subtle effect
	  // const rotate = current.progress.interpolate({
	  //   inputRange: [0, 0.25, 0.5, 0.75, 1],
	  //   outputRange: ROTATE_VALUES,
	  //   extrapolate: "clamp",
	  // });
	  
	  // const INITIAL_SCALE = 1.6;
	  // const FINAL_SCALE = 0.9;
	  
	  // Calculate scale for zooming effect on the next screen
	  // const scale = next
	  //   ? next.progress.interpolate({
	  //       inputRange: [0, 1],
	  //       outputRange: [1, FINAL_SCALE],
	  //       extrapolate: "clamp",
	  //     })
	  //   : current.progress.interpolate({
	  //       inputRange: [0, 1],
	  //       outputRange: [INITIAL_SCALE, 1],
	  //       extrapolate: "clamp",
	  // });
	  

			const transform = [
				{ translateX },
	  { translateX: nextTranslateX },
	  { perspective: 1000 },
			];

			const customEasing = Easing.bezier(0.5, 0.1, 0.5, 1.0);
			const OVERLAY_OPACITY_MAX = 0.5;
			const NEXT_SCREEN_OPACITY_MIN = 0.8;

			const overlayOpacity = current.progress.interpolate({
				inputRange: [0, 1],
				outputRange: [0, OVERLAY_OPACITY_MAX],
				extrapolate: "clamp",
			});

			const nextScreenOpacity = current.progress.interpolate({
				inputRange: [0, 1],
				outputRange: [NEXT_SCREEN_OPACITY_MIN, 1],
				extrapolate: "clamp",
			});
			return {
				cardStyle: {
		 transform,
		 opacity: nextScreenOpacity,
					transitionTimingFunction: customEasing,
	  },
	  overlayStyle: {opacity: overlayOpacity}
			};
		},
		transitionSpec: {
			open: {
				animation: "timing",
				config: {
					duration: ANIMATION_DURATION,
					easing: Easing.out(Easing.ease),
				},
			},
			close: {
				animation: "timing",
				config: {
					duration: ANIMATION_DURATION,
					easing: Easing.in(Easing.ease),
				},
			},
		},
	}
	return {
		nativeStackLayout,
	}
}