import { useEffect, useState } from 'react';

import { useUser } from '@/app/_hooks/use-user';

export const useContents = () =>
{
	const { data, isLoading, error } = useUser();
	const [contents, setContents] = useState( [] );

	useEffect( () =>
	{
		if ( !isLoading && !error )
		{
			setContents( data.data.doc.bundles[ 0 ].contents );
		}
	}, [ isLoading ] )
	
	return {
		contents,
		isLoading,
		error
	}
}