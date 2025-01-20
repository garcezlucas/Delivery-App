import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import TabHome from "../tab-home/TabHome";
import TabFavorites from "../tab-favorites/TabFavorites";
import TabOrders from "../tab-orders/TabOrders";
import TabProfile from "../tab-profile/TabProfile";
import Icons from "../../constants/Icons";

const Tab = createBottomTabNavigator();

const Principal = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name="Home"
        component={TabHome}
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
        component={TabFavorites}
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
        component={TabOrders}
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
        component={TabProfile}
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
  );
};

export default Principal;
