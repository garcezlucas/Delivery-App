import { Image, TouchableOpacity, Text, View, ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RoutesAuth";
import { styles } from "./Menu.style";
import { restaurante } from "../../constants/mock";
import Icons from "../../constants/Icons";
import ProductComponent from "../../components/product/Product";

export type MenuNavigationProp = NavigationProp<RootStackParamList, "menu">;

const Menu = () => {
  const navigation = useNavigation<MenuNavigationProp>();

  const restaurant = restaurante;
  return (
    <View style={styles.container}>
      <View style={styles.containerPhoto}>
        <Image
          source={restaurant.foto}
          style={styles.photo}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.containerBack} onPress={navigation.goBack}>
          <Image source={Icons.back2} style={styles.back} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.headerTexts}>
          <Text style={styles.headerTitle}>{restaurant.nome}</Text>
          <Text style={styles.headerSubTitle}>
            Taxa de entrega:{" "}
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(restaurant.vlEntrega)}
          </Text>
        </View>
        <Image source={Icons.favoriteFull} style={styles.favorite} />
      </View>

      <ScrollView>
        <View style={styles.location}>
          <Image source={Icons.location} style={styles.locationIcon} />
          <Text style={styles.address}>{restaurant.endereco}</Text>
        </View>

        {restaurant.cardapio.map((menu) => {
          return (
            <View key={menu.idCategoria} style={styles.containerProduct}>
              <Text style={styles.category}>{menu.categoria}</Text>
              {menu.itens.map((item) => {
                return <ProductComponent product={item} />;
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Menu;
