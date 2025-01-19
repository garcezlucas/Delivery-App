import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home/Home";
import Favorites from "./screens/favorites/Favorites";
import Orders from "./screens/orders/Orders";
import Profile from "./screens/profile/Profile";
import Icons from "./constants/Icons";
import { Image } from "react-native";
import Search from "./screens/search/Search";

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export type RootStackParamList = {
  login: undefined;
  register: undefined;
  address: undefined;
};

export function RoutesAuth() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={Icons.HomeIcon}
                    style={{
                      width: 25,
                      height: 25,
                      opacity: focused ? 1 : 0.3,
                    }}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="favorites"
            component={Favorites}
            options={{
              title: "Favoritos",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={Icons.FavIcon}
                    style={{
                      width: 25,
                      height: 25,
                      opacity: focused ? 1 : 0.3,
                    }}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="orders"
            component={Orders}
            options={{
              title: "Meus pedidos",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={Icons.OrderIcon}
                    style={{
                      width: 25,
                      height: 25,
                      opacity: focused ? 1 : 0.3,
                    }}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="profile"
            component={Profile}
            options={{
              title: "Meu perfil",
              headerTitleAlign: "center",
              headerShadowVisible: false,
              tabBarIcon: ({ focused }) => {
                return (
                  <Image
                    source={Icons.profileIcon}
                    style={{
                      width: 25,
                      height: 25,
                      opacity: focused ? 1 : 0.3,
                    }}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      {/*   <Stack.Navigator>
          <Stack.Screen
            name="search"
            component={Search}
            options={{
              headerShadowVisible: false,
              title: "Resultados da busca",
              headerTitleAlign: "center",
              headerBackTitle: "",
              headerBackImageSource: Icons.back,
            }}
          />
        </Stack.Navigator> */}
      </NavigationContainer>
    </>
  );
}
