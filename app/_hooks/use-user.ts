import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { getUser } from '@/app/_services/user';

export const useUser = () =>
{
	const [ isSubscribed, setIsSubscribed ] = useState( false );
	const { data, isLoading, error } = useSWR( 'users/me', getUser );

	useEffect( () =>
	{
		if ( !isLoading )
		{
			if ( data.data.doc.bundles[ 0 ] )
			{
				setIsSubscribed( true );
			} else
			{
				setIsSubscribed(false)
			}
		}
	}, [isLoading])

	return {
		data,
		isSubscribed,
		isLoading,
		error
	}
}