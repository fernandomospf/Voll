import { VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { Title } from './components/Title/Title'

export const  Login = () =>  {
    return (
        <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
        <Image source={Logo} alt='Logo Voll'/>
        <Title text='Faça login em sua conta'/>
        <Box>
            <FormControl marginTop={3}>
                <FormControl.Label>
                        Email
                </FormControl.Label>
                <Input 
                    placeholder='Insira seu endereço de email'
                    size="lg"
                    width="100%"
                    borderRadius="lg"
                    bgColor="gray.100"
                    shadow={3}
                />
            </FormControl>
            <FormControl marginTop={3}>
                <FormControl.Label>
                        Senha
                </FormControl.Label>
                <Input 
                    placeholder='Insira sua senha'
                    size="lg"
                    width="100%"
                    borderRadius="lg"
                    bgColor="gray.100"
                    shadow={3}
                />
            </FormControl>
        </Box>
        <Button 
            marginTop={10}
            width="100%"
            bgColor="blue.800"
            borderRadius={'lg'}
            marginBottom={2}
        >
            Entrar
        </Button>
        <Link href="https://www.google.com.br">
            Esqueceu sua senha?
        </Link>

        <Box width="100%" flexDirection="row" justifyContent="center" marginTop={8}>
            <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
            <Text color={'blue.500'}> Faça seu cadastro!</Text>
        </TouchableOpacity>
        </Box>

        </VStack>
    )
}