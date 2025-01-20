import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icons from "./constants/Icons";
import Principal from "./screens/principal/Principal";
import Search from "./screens/search/Search";
import Menu from "./screens/menu/Menu";
import ProductDetails from "./screens/productDetails/ProductDetails";
import OrderDetails from "./screens/orderDetails/OrderDetails";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  home: undefined;
  favorites: undefined;
  orders: undefined;
  profile: undefined;
  search: undefined;
  menu: undefined;
  productDetails: undefined;
};

export function RoutesAuth() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="principal"
          component={Principal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="search"
          component={Search}
          options={{
            headerShadowVisible: false,
            title: "Resultados da busca",
            headerTitleAlign: "center",
            headerBackTitle: "Voltar",
            headerBackImageSource: Icons.back,
          }}
        />
        <Stack.Screen
          name="menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="orderDetails"
          component={OrderDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
