import AsyncStorage from '@react-native-async-storage/async-storage';
import { client } from '@/app/_utils/axios';

export const getMe = async () =>
{
	try
	{
		const { data } = await client.get( 'users/me' );
		await AsyncStorage.setItem('@bundleId', data.data.doc.bundles[0])
		return data;
	} catch ( error )
	{
		console.log(error);
		return error;
	}
}