import { type FC, type ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { HomeScreen } from '@/app/_screens/home.screen';

const index: FC = (): ReactNode =>
{
  return (
    <SafeAreaProvider>
		<SafeAreaView style={ { flex: 1 } } forceInset={ { top: 'always', bottom: 'always' } }>
        <HomeScreen />
      </SafeAreaView>
    </SafeAreaProvider>	
  );
}
export default index;
