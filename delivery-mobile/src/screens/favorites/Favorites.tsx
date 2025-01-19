import { FlatList, Image, Text, View } from "react-native";
import { restaurantes } from "../../constants/mock";
import Restaurant from "../../components/restaurant/Restaurant";
import Icons from "../../constants/Icons";
import { styles } from "./Favorites.style";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurantes}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <Restaurant restaurant={item} icon={Icons.remove} />;
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

export default Favorites;
