import { type FC, type ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { useUser } from '@/app/_hooks/use-user';
import { TvcData } from '@/app/_screens/categories/tvc/tvc-data';
import { TvcCategoryScreen } from '@/app/_screens/categories/tvc/tvc-category.screen';

const index: FC = (): ReactNode =>
{
	const { isSubscribed, isLoading } = useUser();
	return (
		<SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'always' } }>
		{ isLoading &&  <View className='flex-1 justify-center items-center'><ActivityIndicator size='large' /></View>}
				{ ( !isLoading && isSubscribed ) && <TvcData /> }
				{ ( !isLoading && !isSubscribed ) && <TvcCategoryScreen /> }
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;