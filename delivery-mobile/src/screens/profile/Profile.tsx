import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Profile.style";
import Icons from "../../constants/Icons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.item, styles.borderTop]}>
        <View style={styles.containerIcon}>
          <Image source={Icons.address} style={styles.icons} />
        </View>

        <View style={styles.texts}>
          <Text style={styles.title}>Endereço</Text>
          <Text style={styles.subTitle}>Meu Endereço de entrega</Text>
        </View>

        <View style={styles.containerIcon}>
          <Image source={Icons.expand} style={styles.expand} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcon}>
          <Image source={Icons.data} style={styles.icons} />
        </View>

        <View style={styles.texts}>
          <Text style={styles.title}>Meus dados</Text>
          <Text style={styles.subTitle}>Informações da minha conta</Text>
        </View>

        <View style={styles.containerIcon}>
          <Image source={Icons.expand} style={styles.expand} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item}>
        <View style={styles.containerIcon}>
          <Image source={Icons.logout} style={styles.icons} />
        </View>

        <View style={styles.texts}>
          <Text style={styles.title}>Desconectar</Text>
          <Text style={styles.subTitle}>
            Desconectar seu usuário desse aparelho
          </Text>
        </View>

        <View style={styles.containerIcon}>
          <Image source={Icons.expand} style={styles.expand} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
