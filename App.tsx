import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RootStackNavigator from "./src/navigation/RootStackNavigator";
import TabNavigator from "./src/navigation/TabNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./src/context/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";

import BookDetailNavigator from './src/navigation/BookDetailNavigator';  

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [isFontLoaded, fontError] = useFonts({
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    Angkor: require("./assets/fonts/Angkor-Regular.ttf"),
    IBM: require("./assets/fonts/IBM.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (isFontLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [isFontLoaded, fontError]);

  if (!isFontLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AuthContextProvider>
            <QueryClientProvider client={queryClient}>
              <PaperProvider>
                <NavigationContainer>
                  <TabNavigator />
                </NavigationContainer>
              </PaperProvider>
            </QueryClientProvider>
          </AuthContextProvider>
        </PersistGate>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Angkor",
  },
});
