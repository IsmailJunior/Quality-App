import { type FC, type ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { SignUpScreen } from '@/app/_screens/auth/sign-up.screen';

const index: FC = (): ReactNode =>
{
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{flex: 1}} forceInset={{top: 'always', bottom: 'always'}}>
			<SignUpScreen />
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;