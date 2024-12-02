import { type FC, type ReactNode } from 'react';
import { View, TextInput,type TextInputProps } from 'react-native';

import { ThemedTextRight } from '@/app/_components/ui/themed-text-right';

export const Input: FC<{label: string, textInputConfig: TextInputProps}> = ({label, textInputConfig}): ReactNode =>
{
	return (
		<View className='mb-5'>
			<ThemedTextRight className='my-4 text-xl'>{ label }</ThemedTextRight>
			<TextInput className='border p-4 text-lg border-gray-500 text-white' placeholderTextColor='gray' {...textInputConfig} />
		</View>
	)
}