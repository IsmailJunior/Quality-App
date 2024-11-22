import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store';

export const useOnboarding = () =>
{
	const [ loggedUser, setLoggedUser ] = useState<boolean>( false );
	const [ loading, setLoading ] = useState<boolean>( true );
	const [ onboarding, setOnboarding ] = useState<boolean>( false );


	const checkOnboarding = async () =>
		{
		  try
		  {
			 const value = await AsyncStorage.getItem( '@onboarding' );
			 if ( value !== null )
			 {
				setOnboarding(true)
			 }
		  } catch (error)
		  {
			 console.error(error)
		  } finally
		  {
			 setLoading(false)
		  }
	}
	
	useEffect( () =>
		{
		  checkOnboarding()
		  const subscription = async () =>
		  {
			 const token = SecureStore.getItem( 'accessToken' );
			 setLoggedUser( token ? true : false );
		  }
		  subscription();
	}, [] )
	
	return {
		loading,
		onboarding,
		loggedUser
	}
}