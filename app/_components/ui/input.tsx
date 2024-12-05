import { type FC, type ReactNode } from 'react';
import { View, TextInput,type TextInputProps, Text } from 'react-native';

import { ThemedTextRight } from '@/app/_components/ui/themed-text-right';

export const Input: FC<{label: string, error: string, isValid: boolean,textInputConfig: TextInputProps}> = ({label, error, isValid,textInputConfig}): ReactNode =>
{
	return (
		<View className='mb-1'>
			<ThemedTextRight className='text-xl'>{ label }</ThemedTextRight>
			<TextInput className='border px-4 py-3 text-lg border-gray-500 text-white rounded-lg' placeholderTextColor='gray' { ...textInputConfig } />
			{ !isValid && <Text className='text-red-600 text-lg'>{error}</Text>}
		</View>
	)
}