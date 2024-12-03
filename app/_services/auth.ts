import { client } from '@/app/_utils/axios';

export const signUp = async (dto: userType) =>
{
	try
	{
		const {data} = await client.post( 'auth/signup', dto );
		return data;
	} catch ( error )
	{
		console.log(error);
		return error;
	}
}

export const login = async (dto: any) =>
{
	try
	{
		const {data} = await client.post( 'auth/login', dto );
		return data;
	} catch ( error )
	{
		console.log(error);
		return error;
	}
}