import { Image, View, Text, TouchableOpacity, ImageSourcePropType } from "react-native";
import { Restaurant } from "../../interfaces/Restaurant";
import { styles } from "./Restaurant.style";

interface RestaurantComponentProps {
  restaurant: Restaurant;
  icon: ImageSourcePropType;
}
const RestaurantComponent: React.FC<RestaurantComponentProps> = ({ restaurant, icon }) => {
  return (
    <View style={styles.container} key={restaurant.id}>
      <Image source={restaurant.logotipo} style={styles.logo} />
      <View style={styles.texts}>
        <Text style={styles.name}>{restaurant.nome}</Text>
        <Text style={styles.address}>{restaurant.endereco}</Text>
      </View>
      <TouchableOpacity>
        <Image source={icon} style={styles.fav} />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantComponent;
