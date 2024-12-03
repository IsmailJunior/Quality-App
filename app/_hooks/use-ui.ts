import { useEffect, useState } from 'react';

import { getAllCards } from '@/app/_services/cards';

export const useUi = () =>
{
	const [ isLoading, setIsLoading ] = useState( false );
	const [ cards, setCards ] = useState( [] );

	useEffect( () =>
	{
		const fetchCards = async () =>
		{
			setIsLoading( true );
			const data = await getAllCards();
			setCards( data );
			setIsLoading( false );
		}
		fetchCards()
	}, [])
	
	return {
		isLoading,
		cards
	}
}