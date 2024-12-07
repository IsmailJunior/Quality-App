import { type FC, type ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { useUser } from '@/app/_hooks/use-user';
import { CopyWritingnCategoryScreen } from '@/app/_screens/categories/copy-writing/copy-writing.screen';
import { CopyWritingData } from '@/app/_screens/categories/copy-writing/copy-writing-data';

const index: FC = (): ReactNode =>
{
	const { isSubscribed, isLoading } = useUser();
	
	return (
		<SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'never' } }>
				{ isLoading &&  <View className='flex-1 justify-center items-center'><ActivityIndicator size='large' /></View>}
				{ ( !isLoading && isSubscribed ) && <CopyWritingData /> }
				{ ( !isLoading && !isSubscribed ) && <CopyWritingnCategoryScreen /> }
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;