import { type FC, type ReactNode } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { useUser } from '@/app/_hooks/use-user';
import { GraphicDesignData } from '@/app/_screens/categories/graphic-design/graphic-design-data';
import { GraphicDesignCategoryScreen } from '@/app/_screens/categories/graphic-design/graphic-design-category.screen';

const index: FC = (): ReactNode =>
{
	const { isSubscribed, isLoading } = useUser();
	return (
		<SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'never' } }>
		{ isLoading &&  <View className='flex-1 justify-center items-center'><ActivityIndicator size='large' /></View>}
				{ ( !isLoading && isSubscribed ) && <GraphicDesignData /> }
				{ ( !isLoading && !isSubscribed ) && <GraphicDesignCategoryScreen /> }
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default index;