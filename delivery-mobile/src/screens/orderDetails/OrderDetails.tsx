import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./OrderDetails.style";
import Icons from "../../constants/Icons";
import { pedido } from "../../constants/mock";
import ProductComponent from "../../components/product/Product";

const OrderDetails = () => {
  const order = pedido;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.containerBack}>
          <Image source={Icons.back} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes do pedido</Text>
      </View>

      <FlatList
        data={order.itens}
        keyExtractor={(order) => order.idItem?.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <ProductComponent product={item} />;
        }}
      />

      <View>
        <View style={styles.values}>
          <Text style={styles.resume}>Resumo dos Valores</Text>
        </View>

        <View style={styles.values}>
          <Text style={styles.value}>SubTotal</Text>
          <Text style={styles.value}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(order.vl_total)}
          </Text>
        </View>

        <View style={styles.values}>
          <Text style={styles.value}>Taxa de entrega</Text>
          <Text style={styles.value}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(order.vl_total)}
          </Text>
        </View>

        <View style={styles.values}>
          <Text style={styles.resume}>Total</Text>
          <Text style={styles.resume}>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(order.vl_total + order.vl_total)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderDetails;
