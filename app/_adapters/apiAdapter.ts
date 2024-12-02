import axios from 'axios';

const ApiAdapter = (baseURL: string, token?: string) => {
	const client = axios.create( {
		baseURL,
		headers: {
			'x-api-key': 'gfjvbrjrs2z5fa0lsjmtenumv1a99k',
			'Authorization': 'Bearer ' + token
		}
	} )
	
	return {
		get: async ( url: string ) =>
		{
			const response = await client.get( url );
			return response.data;
		},
		post: async ( url: string, dto: any ) =>
		{
			const response = await client.post( url, dto );
			return response.data;
		},
		put: async ( url: string, dto: any ) =>
		{
			const response = await client.put( url, dto );
			return response.data;
		}, 
		delete: async ( url: string ) =>
		{
			const response = await client.delete( url );
			return response.data;
		}
	}
};

export default ApiAdapter;