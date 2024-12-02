import { type FC, type ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { ReelCategoryScreen } from '@/app/_screens/reel.screen';

const index: FC = (): ReactNode =>
{
	return (
		<SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'always' } }>
			<ReelCategoryScreen />
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;