import { type FC, type ReactNode, Fragment} from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Redirect } from 'expo-router';

import { useOnboarding } from '@/app/_hooks/use-onboarding.hook';

const index: FC = (): ReactNode =>
{   
  const {loading, onboarding, loggedUser, isGuest} = useOnboarding();
  return (
    <Fragment>
      { loading && <View><ActivityIndicator size='large'/></View> }
      {!loading && <Redirect href={!onboarding ? "/(routes)/onboarding" : !loggedUser || !isGuest ? "/(routes)/auth" : "/(tabs)"}/>}
    </Fragment>
  );
}

export default index;