import { type FC, type ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { AuthScreen } from '@/app/_screens/auth/auth.screen';

const Work: FC = (): ReactNode =>
{
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{flex: 1}} forceInset={{top: 'always', bottom: 'always'}}>
			<AuthScreen />
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default Work;