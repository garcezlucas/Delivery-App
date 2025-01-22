import { FlatList, Image, Text, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RoutesAuth";
import { restaurantes } from "../../constants/mock";
import RestaurantComponent from "../../components/restaurant/Restaurant";
import Icons from "../../constants/Icons";
import { styles } from "./TabFavorites.style";

export type TabFavoriteNavigationProp = NavigationProp<
  RootStackParamList,
  "favorites"
>;

const TabFavorites = () => {
  const navigation = useNavigation<TabFavoriteNavigationProp>();

  const openMenu = () => {
    navigation.navigate("menu");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantes}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <RestaurantComponent
              restaurant={item}
              icon={Icons.remove}
              openMenu={openMenu}
            />
          );
        }}
        contentContainerStyle={styles.containerList}
        ListEmptyComponent={() => {
          return (
            <View style={styles.empty}>
              <Image source={Icons.empty} />
              <Text style={styles.emptyText}>Nenhum favorito encontrado</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default TabFavorites;
