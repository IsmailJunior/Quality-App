import useSWR from 'swr';

import ApiAdpater from '@/app/_adapters/apiAdapter';
import AuthRepository from '@/app/_repositories/auth.repository';

export const useAuth = (user: userType) =>
{
	const apiAdapter = ApiAdpater( 'https://quality-ad-api.onrender.com/api/v1/auth' );
	const authRepository = AuthRepository( apiAdapter );
	const { error, isLoading, data: token} = useSWR(user,authRepository.signup );
	return {
		error,
		token,
		isLoading
	}
}