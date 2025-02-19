import { Image, View, Text, TouchableOpacity } from "react-native";
import { Order } from "../../interfaces/Order";
import { styles } from "./Order.style";

interface OrderComponentProps {
  order: Order;
  onPress: () => void;
}

const OrderComponent: React.FC<OrderComponentProps> = ({ order, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={order.logotipo} style={styles.logo} />
      <View style={styles.texts}>
        <Text style={styles.name}>{order.nome}</Text>
        <View style={styles.containerAmount}>
          <Text style={styles.amount}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(order.vl_total)}
          </Text>
          <Text style={styles.date}>{order.dt_pedido}</Text>
        </View>
        <Text style={styles.status}>{order.status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OrderComponent;
