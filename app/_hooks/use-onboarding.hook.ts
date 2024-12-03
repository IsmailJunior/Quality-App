import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const useOnboarding = () =>
{
	const [ loggedUser, setLoggedUser ] = useState<boolean>( true );
	const [ loading, setLoading ] = useState<boolean>( false );
	const [ onboarding, setOnboarding ] = useState<boolean>( true );
	const [ isGuest, setIsGuest ] = useState<boolean>( true );

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

	const checkGuest = async () =>
	{
		try
		{
			const value = AsyncStorage.getItem( '@isGuest' );
			if ( value !== null )
			{
				setIsGuest(true)
			} 
		} catch ( error )
		{
			console.error(error)
		} finally
		{
			setLoading(false)
		}
	}
	
	// useEffect( () =>
	// 	{
	// 	checkOnboarding();
	// 	checkGuest();
	// 	  const subscription = async () =>
	// 	  {
	// 		 const token = SecureStore.getItem( 'accessToken' );
	// 		 setLoggedUser( token ? true : false );
	// 	  }
	// 	  subscription();
	// }, [] )
	
	return {
		loading,
		onboarding,
		loggedUser,
		setIsGuest,
		isGuest
	}
}