import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../interfaces/Product";
import { styles } from "./Product.style";

interface ProductComponentProps {
  product: Product;
}
const ProductComponent: React.FC<ProductComponentProps> = ({ product }) => {
  return (
    <TouchableOpacity key={product.idProduto} style={styles.product}>
      <Image source={product.foto} style={styles.photo} />

      <View style={styles.texts}>
        <Text style={styles.name}>{product.nome}</Text>
        <Text style={styles.description}>{product.descricao}</Text>
      </View>

      <View>
        <Text style={styles.amount}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.valor ?? product.vlTotal ?? 0)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductComponent;
