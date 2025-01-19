import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login/Login";
import RegisterAddress from "./screens/registerAddress/RegisterAddress";
import Register from "./screens/register/Register";
import Search from "./screens/search/Search";
import Icons from "./constants/Icons";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  login: undefined;
  register: undefined;
  address: undefined;
};

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="search"
          component={Search}
          options={{
            headerShadowVisible: false,
            title: "Resultados da busca",
            headerTitleAlign: "center",
            headerBackTitle: "Voltar",
            headerBackImageSource: Icons.back
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
          }}
        />
        <Stack.Screen
          name="registerAddress"
          component={RegisterAddress}
          options={{
            headerShadowVisible: false,
            title: "",
            headerBackTitle: "Voltar",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
