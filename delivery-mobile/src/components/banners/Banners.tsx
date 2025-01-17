import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Banners.style";
import { Banner } from "../../interfaces/Banner.";

interface BannersProps {
  banners: Banner[];
}
const Banners: React.FC<BannersProps> = ({ banners }) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {banners.map((banner) => {
          return (
            <View style={styles.category} key={banner.id}>
              <TouchableOpacity>
                <Image source={banner.icone} style={styles.banner} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Banners;
