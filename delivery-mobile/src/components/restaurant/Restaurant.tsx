import { Image, View, Text, TouchableOpacity } from "react-native";
import { RestaurantType } from "../../interfaces/Restaurant";
import Icons from "../../constants/Icons";
import { styles } from "./Restaurant.style";

interface RestaurantProps {
  restaurant: RestaurantType;
}
const Restaurant: React.FC<RestaurantProps> = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={restaurant.logotipo} style={styles.logo} />
      <View style={styles.texts}>
        <Text style={styles.name}>{restaurant.nome}</Text>
        <Text style={styles.address}>{restaurant.endereco}</Text>
      </View>
      <TouchableOpacity>
        <Image source={Icons.favoriteFull} style={styles.fav} />
      </TouchableOpacity>
    </View>
  );
};

export default Restaurant;
