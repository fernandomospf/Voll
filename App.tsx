import { Login } from './src/Login';
import { NativeBaseProvider, StatusBar } from 'native-base';

import { theme } from './src/Styles/themes';

export default function App() {
  return (
  <NativeBaseProvider theme={theme}>
    <StatusBar backgroundColor={theme.colors.blue[800]}/>
    <Login />
  </NativeBaseProvider>
  );
}

