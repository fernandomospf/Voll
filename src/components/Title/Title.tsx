import { Text } from 'native-base'

interface PropsTitle {
    text?: string;
    color?: string;
}

export const Title = (props: PropsTitle): React.JSX.Element => {
    return (
        <Text
            fontSize={'2xl'}
            fontWeight={'bold'}
            color={ props.color || 'gray.500'}
            textAlign="center"
            marginTop={5}
        >
            {props.text}
        </Text>
    )
}