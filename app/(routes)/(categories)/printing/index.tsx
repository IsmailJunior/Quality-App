import { type FC, type ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { PrintingCategoryScreen } from '@/app/_screens/printing.screen';

const index: FC = (): ReactNode =>
{
	return (
		<SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'always' } }>
			<PrintingCategoryScreen />
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;