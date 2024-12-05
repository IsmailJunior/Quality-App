import { type FC, type ReactNode } from 'react';
import { View } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';

export const MarqueeLogos: FC<{children: ReactNode, speed?: number, spacing?: number}> = ( { spacing=5, speed=1,children } ) =>
{
	return (
		<Marquee spacing={spacing} speed={speed}>
		<View className='flex-1 flex-row'>
			{children}
		</View>
		</Marquee>
	)
}