import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconContext } from 'phosphor-react-native';
import { RootSiblingParent } from 'react-native-root-siblings';

import { StateProvider, useStore } from "@/store";

import { Login } from '@/pages/Login';
import theme from '@/config/theme';

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import { Code } from '@/pages/Code';
import { LogoutButton } from '@/components/LogoutButton';
import { Loading } from '@/components/Loading';
import { SuccessModal } from '@/components/SuccessModal';
import { PasswordModal } from '@/components/PasswordModal';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  return fontsLoaded ? (
    <StateProvider>
      <Layout />
    </StateProvider>
  ) : null;
}

const Layout = () => {
  const {
    user,
  } = useStore();

  return (
    <ThemeProvider theme={theme}>
      <IconContext.Provider
        value={{
          size: 32,
          weight: 'bold',
        }}
      >
        <RootSiblingParent>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
              headerTitle: () => '',
              headerTransparent: true,
              headerRight: Boolean(user) ? () => <LogoutButton /> : () => null
            }}>
              {
                Boolean(user)
                  ? (
                      <Stack.Screen name="Code">
                        {(props) => <Code {...props} />}
                      </Stack.Screen>
                    )
                  : (
                      <Stack.Screen name="Login" options={{
                        headerShown: false,
                      }}>
                        {(props) => <Login {...props} />}
                      </Stack.Screen>
                    )
              }
            </Stack.Navigator>
          </NavigationContainer>

          <PasswordModal />
          <SuccessModal />
          <Loading />
        </RootSiblingParent>
      </IconContext.Provider>
    </ThemeProvider>
  );
};
