import { type FC, type ReactNode } from 'react';
import { ActivityIndicator, View, Text} from 'react-native';
import { Redirect } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { useUser } from '@/app/_hooks/use-user';
import { useOnboarding } from '@/app/_hooks/use-onboarding.hook';
import { MyWorkScreen } from '@/app/_screens/routes/my-work.screen';

const Work: FC = (): ReactNode =>
{
	const {isSubscribed} = useUser();
	const { loading, loggedUser } = useOnboarding();
	return (
		<SafeAreaProvider>
			<SafeAreaView style={{flex: 1}} forceInset={{top: 'always', bottom: 'always'}}>
				{ loading && <View className='flex-1 justify-center items-center'>
					<ActivityIndicator color='white' size='large' />
				</View> }
			{(!loading && !loggedUser) && <Redirect href={ "/(routes)/auth" }/>}
			{(!loading && loggedUser && isSubscribed) && <MyWorkScreen />}
		</SafeAreaView>
	</SafeAreaProvider>
	)
};

export default Work;