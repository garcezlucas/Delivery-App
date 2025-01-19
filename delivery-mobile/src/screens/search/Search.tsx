import { FlatList, Image, Text, View } from "react-native";
import RestaurantComponent from "../../components/restaurant/Restaurant";
import Icons from "../../constants/Icons";
import { restaurantes } from "../../constants/mock";
import { styles } from "./Search.style";

const Search = () => {
  return (
    <View>
      <FlatList
        data={restaurantes}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <RestaurantComponent restaurant={item} icon={Icons.favoriteFull} />;
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

export default Search;
