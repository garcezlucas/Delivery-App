import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Restaurant } from "../../interfaces/Restaurant";
import { styles } from "./Restaurant.style";

interface RestaurantComponentProps {
  restaurant: Restaurant;
  icon: ImageSourcePropType;
  openMenu: () => void;
}
const RestaurantComponent: React.FC<RestaurantComponentProps> = ({
  restaurant,
  icon,
  openMenu,
}) => {
  return (
    <View style={styles.container} key={restaurant.id}>
      <TouchableOpacity style={styles.restaurantTouch} onPress={openMenu}>
        <Image source={restaurant.logotipo} style={styles.logo} />
        <View style={styles.texts}>
          <Text style={styles.name}>{restaurant.nome}</Text>
          <Text style={styles.address}>{restaurant.endereco}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={icon} style={styles.fav} />
      </TouchableOpacity>
    </View>
  );
};

export default RestaurantComponent;
