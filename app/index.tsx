import { type FC, type ReactNode, Fragment } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Redirect } from 'expo-router';

import { useOnboarding } from '@/app/_hooks/use-onboarding.hook';

const index: FC = (): ReactNode =>
{
  const {loading, onboarding} = useOnboarding();
  return (
    <Fragment>
      { loading && <View><ActivityIndicator size='large'/></View> }
      {!loading && <Redirect href={!onboarding ? "/(routes)/onboarding" : "/(tabs)"}/>}
    </Fragment>
  );
}

export default index;