import { type FC, type ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { OnboardingScreen } from '@/app/_screens/onboarding.screen';

const index: FC = (): ReactNode =>
{
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{flex: 1}} forceInset={{top: 'always', bottom: 'never'}}>
			<OnboardingScreen />
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;