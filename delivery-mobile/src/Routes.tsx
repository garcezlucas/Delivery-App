import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/login/Login";
import RegisterAddress from "./screens/registerAddress/RegisterAddress";
import Register from "./screens/register/Register";
import Home from "./screens/home/Home";
import Favorites from "./screens/favorites/Favorites";
import Orders from "./screens/orders/Orders";
import Profile from "./screens/profile/Profile";

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
          name="profile"
          component={Profile}
          options={{
            title: "Meu perfil",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
      <Stack.Screen
          name="orders"
          component={Orders}
          options={{
            title: "Meus pedidos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="favorites"
          component={Favorites}
          options={{
            title: "Favoritos",
            headerTitleAlign: "center",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
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
