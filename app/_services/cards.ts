import { uiClient } from '@/app/_utils/axios';

export const getAllCards = async () =>
{
	try
	{
		const {data} = await uiClient.get( 'cards?populate[photo][fields][0]=url' );
		return data.data;
	} catch ( error )
	{
		console.log(error);
		return error;
	}
}