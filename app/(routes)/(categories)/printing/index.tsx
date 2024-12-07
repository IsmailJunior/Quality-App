import { type FC, type ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { useUser } from '@/app/_hooks/use-user';
import { PrintingData } from '@/app/_screens/categories/printing/printing-data';
import { PrintingCategoryScreen } from '@/app/_screens/categories/printing/printing.screen';

const index: FC = (): ReactNode =>
{
	const { isSubscribed, isLoading } = useUser();
	return (
		<SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'always' } }>
		{ isLoading &&  <View className='flex-1 justify-center items-center'><ActivityIndicator size='large' /></View>}
				{ ( !isLoading && isSubscribed ) && <PrintingData /> }
				{ ( !isLoading && !isSubscribed ) && <PrintingCategoryScreen /> }
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;