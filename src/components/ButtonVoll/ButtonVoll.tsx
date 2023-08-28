import {Button, IButtonProps} from 'native-base'

interface PropsButton extends IButtonProps{
    text: string 
}

export const ButtonVoll = ({text, ...rest}: PropsButton): React.JSX.Element => {
    return <Button 
        marginTop={10}
        width="100%"
        bgColor="blue.800"
        borderRadius={'lg'}
        {...rest}
        >
        {text}
        </Button>
}