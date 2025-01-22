import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icons from "./constants/Icons";
import Principal from "./screens/principal/Principal";
import Search from "./screens/search/Search";
import Menu from "./screens/menu/Menu";
import ProductDetails from "./screens/productDetails/ProductDetails";
import OrderDetails from "./screens/orderDetails/OrderDetails";
import Checkout from "./screens/checkout/Checkout";
import { TouchableOpacity, Text } from "react-native";
import { COLORS, FONT_SIZE } from "./constants/Theme";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  home: undefined;
  favorites: undefined;
  orders: undefined;
  profile: undefined;
  search: undefined;
  menu: undefined;
  productDetails: undefined;
  orderDetails: undefined;
  checkout: undefined;
};

export function RoutesAuth() {
  const clearCheckout = () => {
    alert("OK");
  };

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
            headerShadowVisible: false,
            title: "Detalhes do pedido",
            headerTitleAlign: "center",
            headerBackTitle: "Voltar",
          }}
        />
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="checkout"
          component={Checkout}
          options={{
            headerShadowVisible: false,
            title: "Meu pedido",
            headerTitleAlign: "center",
            headerBackTitle: "Voltar",
            headerRight: () => {
              return (
                <TouchableOpacity onPress={clearCheckout}>
                  <Text style={{ color: COLORS.red, fontSize: FONT_SIZE.md }}>
                    Limpar
                  </Text>
                </TouchableOpacity>
              );
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
