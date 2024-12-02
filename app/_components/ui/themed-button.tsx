import { type FC, type ReactNode } from 'react';
import { View , TouchableOpacity, Text, ActivityIndicator,type TouchableOpacityProps} from 'react-native';

export const ThemedButton: FC<{title: string ,isLoading?: boolean,buttonConfig: TouchableOpacityProps}> = ({title ,isLoading,buttonConfig}): ReactNode =>
{
	return (
		<TouchableOpacity disabled={isLoading} {...buttonConfig}>
		<View className='bg-white p-4 my-4 text-center items-center'>
				{isLoading && <ActivityIndicator size='small' /> }
				{!isLoading && <Text className='font-extrabold text-lg'>{title}</Text>}
		</View>
		</TouchableOpacity>
	)
}