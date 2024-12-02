import { Text, TextProps } from 'react-native';

export const ThemedTextRight = ( props: TextProps ) =>
{
	// @ts-ignore
  return <Text style={{ textAlign: 'right', color: "white", ...props.style }} {...props} />;
};
