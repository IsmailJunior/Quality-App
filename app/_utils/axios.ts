import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import { baseURL, appKey, uiKey, uiURL} from '@/app/_constants/api';

const accessToken = SecureStore.getItem( 'accessToken' );

export const client = axios.create( {
	baseURL,
	headers: {
		'x-api-key': appKey,
		'Authorization': 'Bearer ' + accessToken
	}
} );

export const uiClient = axios.create( {
	baseURL: uiURL,
	headers: {
		'Authorization': 'Bearer ' + uiKey
	}
})