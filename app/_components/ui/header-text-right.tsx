import { Text, TextProps } from 'react-native';

export const HeaderTextRight = ( props: TextProps) =>
{
	// @ts-ignore
	return <Text className={'font-extrabold text-3xl my-8'} style={{ textAlign: 'right', color: "white", ...props.style}} {...props} />;
};
