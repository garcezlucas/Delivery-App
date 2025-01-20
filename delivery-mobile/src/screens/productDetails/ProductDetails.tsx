import {
  Image,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RoutesAuth";
import Icons from "../../constants/Icons";
import { styles } from "./ProductDetails.style";
import Button from "../../components/button/Button";

export type ProductDetailsNavigationProp = NavigationProp<
  RootStackParamList,
  "productDetails"
>;

const ProductDetails = () => {
  const navigation = useNavigation<ProductDetailsNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.containerPhoto}>
        <Image source={Icons.product} style={styles.photo} resizeMode="cover" />

        <TouchableOpacity
          style={styles.containerBack}
          onPress={navigation.goBack}
        >
          <Image source={Icons.back2} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>{"Pizza Calabresa"}</Text>
        <Text style={styles.headerSubTitle}>
          {"Pizza Calabresa com massa artesanal feita nmo forno a lenha"}
        </Text>
        <Text style={styles.headerAmount}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(30)}
        </Text>
      </View>

      <View style={styles.containerObservation}>
        <Text style={styles.observation}>Observações</Text>
        <TextInput
          style={styles.multiline}
          multiline={true}
          numberOfLines={5}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={Icons.less} style={styles.quantityIcons} />
        </TouchableOpacity>

        <Text style={styles.quantityText}>01</Text>

        <TouchableOpacity>
          <Image source={Icons.plus} style={styles.quantityIcons} />
        </TouchableOpacity>

        <View style={styles.footerBtn}>
          <Button title="Adicionar" onPress={() => ""} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
