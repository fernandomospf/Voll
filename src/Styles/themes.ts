import { extendTheme } from 'native-base'

export const theme = extendTheme({
    colors: {
        gray: {
            300: '#8D8D99'
        },
        blue: {
            500: '#339CFF',
            800: '#0B3b60'
        }, 
        white: '#FFF',
        black: '#000'
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16, 
        lg: 20, 
        xg: 24,
    }
})