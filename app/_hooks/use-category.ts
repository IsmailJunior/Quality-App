import { useEffect, useState } from 'react';

import { useUser } from '@/app/_hooks/use-user';

export const useCategory = (type: string) =>
{
	const { data, isLoading, error } = useUser();
	const [category, setCategory] = useState( [] );

	useEffect( () =>
		{
			if ( !isLoading && !error )
			{
				setCategory( data.data.doc.bundles[ 0 ].contents.filter((item: any) => item.type === type) );
			}
		}, [ isLoading ] )
	
	return {
		category,
		isLoading,
		error
	}
}