import { client } from '@/app/_utils/axios';

export const getUser = async (param: string) =>
{
	try
	{
		const { data } = await client.get(param);
		return data;
	} catch ( error )
	{
		console.log(error);
		return error;
	}
}