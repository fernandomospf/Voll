import { Text, ITextProps } from 'native-base'

interface PropsTitle extends ITextProps {
    text?: string;
    color?: string;
}

export const Title = ({text, color, ...rest}: PropsTitle): React.JSX.Element => {
    return (
        <Text
            fontSize={'2xl'}
            fontWeight={'bold'}
            color={ color || 'gray.500'}
            textAlign="center"
            marginTop={5}
            {...rest}
        >
            {text}
        </Text>
    )
}