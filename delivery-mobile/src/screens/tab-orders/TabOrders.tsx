import { FlatList, Image, View, Text } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RoutesAuth";
import OrderComponent from "../../components/order/Order";
import { styles } from "./TabOrders.style";
import Icons from "../../constants/Icons";
import { pedidos } from "../../constants/mock";

export type TabOrdersNavigationProp = NavigationProp<
  RootStackParamList,
  "orders"
>;

const TabOrders = () => {
  const navigation = useNavigation<TabOrdersNavigationProp>();

  const onCLickOrder = () => {
    navigation.navigate("orderDetails");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pedidos}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <OrderComponent order={item} onPress={onCLickOrder} />;
        }}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={Icons.empty} />
              <Text style={styles.emptyText}>Nenhum pedido encontrado</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TabOrders;
