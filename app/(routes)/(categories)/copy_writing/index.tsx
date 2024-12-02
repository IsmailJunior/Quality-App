import { type FC, type ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { CopyWritingnCategoryScreen } from '@/app/_screens/categories/copy-writing.screen';

const index: FC = (): ReactNode =>
{
	return (
		<SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'always' } }>
			<CopyWritingnCategoryScreen />
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;