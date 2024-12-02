import { type FC, type ReactNode } from 'react';

import AuthContextProvider from '@/app/_store/auth-store';

export const Providers: FC<{ children: ReactNode }> = ( { children } ) =>
{
	return (
		<AuthContextProvider>
			{children}
		</AuthContextProvider>
	)
}