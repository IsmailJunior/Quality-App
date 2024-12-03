import { Text, TextProps } from 'react-native';

export const ThemedTextRight = ( props: TextProps ) =>
{
	// @ts-ignore
  return <Text className='text-white' style={{ textAlign: 'right', ...props.style }} {...props} />;
};
