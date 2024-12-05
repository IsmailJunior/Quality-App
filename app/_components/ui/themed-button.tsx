import { type FC, type ReactNode } from 'react';
import { View , TouchableOpacity, Text, ActivityIndicator,type TouchableOpacityProps} from 'react-native';

export const ThemedButton: FC<{title: string ,isLoading?: boolean,buttonConfig: TouchableOpacityProps}> = ({title ,isLoading,buttonConfig}): ReactNode =>
{
	return (
		<TouchableOpacity disabled={isLoading} {...buttonConfig}>
		<View className='bg-white px-4 py-3 my-2 text-center items-center rounded-lg'>
				{isLoading && <ActivityIndicator size='small' /> }
				{!isLoading && <Text className='font-extrabold text-xl'>{title}</Text>}
		</View>
		</TouchableOpacity>
	)
}