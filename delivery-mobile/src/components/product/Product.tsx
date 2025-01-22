import { Image, Text, TouchableOpacity, View } from "react-native";
import { Product } from "../../interfaces/Product";
import { styles } from "./Product.style";
import Icons from "../../constants/Icons";

interface ProductComponentProps {
  product: Product;
  onClickDelete?: () => void;
}
const ProductComponent: React.FC<ProductComponentProps> = ({
  product,
  onClickDelete,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity key={product.idProduto} style={styles.product}>
        <Image source={product.foto} style={styles.photo} />

        <View style={styles.texts}>
          <Text style={styles.name}>{product.nome}</Text>
          <Text style={styles.description}>{product.descricao}</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Text style={styles.amount}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(product.valor ?? product.vlTotal ?? 0)}
        </Text>

        {onClickDelete && (
          <TouchableOpacity
            style={styles.containerRemove}
            onPress={onClickDelete}
          >
            <Image source={Icons.remove} style={styles.remove} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProductComponent;
