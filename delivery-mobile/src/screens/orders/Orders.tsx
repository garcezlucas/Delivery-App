import { FlatList, Image, View, Text } from "react-native";
import OrderComponent from "../../components/order/Order";
import { styles } from "./Orders.style";
import Icons from "../../constants/Icons";
import { pedidos } from "../../constants/mock";

const Orders = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pedidos}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <OrderComponent order={item} />;
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

export default Orders;
