import { type FC, type ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { useUser } from '@/app/_hooks/use-user';
import { MobileAppsData } from '@/app/_screens/categories/mobile-apps/mobile-apps-data';
import { MobileAppsCategoryScreen } from '@/app/_screens/categories/mobile-apps/mobile-apps.screen';

const index: FC = (): ReactNode =>
{
	const { isSubscribed, isLoading } = useUser();
	return (
		<SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'always' } }>
		{ isLoading &&  <View className='flex-1 justify-center items-center'><ActivityIndicator size='large' /></View>}
				{ ( !isLoading && isSubscribed ) && <MobileAppsData /> }
				{ ( !isLoading && !isSubscribed ) && <MobileAppsCategoryScreen /> }
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;