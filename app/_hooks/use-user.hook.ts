import useSWR from 'swr';
import * as SecoreStore from 'expo-secure-store';

import ApiAdpater from '@/app/_adapters/apiAdapter';
import UserRepository from '@/app/_repositories/user.repository';

export const useUser = () =>
{
	const token = SecoreStore.getItem( 'accessToken' );
	// @ts-ignore
	const apiAdapter = ApiAdpater( 'https://quality-ad-api.onrender.com/api/v1/users', token);
	const userRepository = UserRepository( apiAdapter );
	const { data: user, error, isLoading } = useSWR( '/me' ,userRepository.getMe );		
	
	return {
		error,
		user,
		isLoading
	}
}