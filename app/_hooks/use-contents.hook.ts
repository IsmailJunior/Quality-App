import { useEffect, useState } from 'react';
import useSWR from 'swr';
import * as SecoreStore from 'expo-secure-store';

import ApiAdpater from '@/app/_adapters/apiAdapter';
import ContentRepository from '@/app/_repositories/content.repository';

export const useContents = () =>
{
	const token = SecoreStore.getItem( 'accessToken' );
	// @ts-ignore
	const apiAdapter = ApiAdpater( 'https://quality-ad-api.onrender.com/api/v1/bundles', token);
	const contentsRepository = ContentRepository( apiAdapter );
	const { data, error, isLoading } = useSWR( '6749bc7fb2e786da98f6dcf1', contentsRepository.getAllContents );
	const [ contents, setContents ] = useState();
	
	useEffect( () =>
	{
	}, [] )
	
	return {
		contents,
		error,
		data,
		isLoading
	}
}