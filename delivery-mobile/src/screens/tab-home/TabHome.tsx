import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../RoutesAuth";
import { styles } from "./TabHome.style";
import Icons from "../../constants/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textBox/TextBox";
import { useState } from "react";
import Categories from "../../components/categories/Categories";
import { banners, categorias } from "../../constants/mock";
import Banners from "../../components/banners/Banners";
import { restaurantes } from "../../constants/mock";
import RestaurantComponent from "../../components/restaurant/Restaurant";

export type HomeNavigationProp = NavigationProp<RootStackParamList, "home">;

const TabHome = () => {
  const navigation = useNavigation<HomeNavigationProp>();

  const [searchText, setSearchText] = useState<string>("");

  const handleSearchTextChange = (text: string) => setSearchText(text);

  const openMenu = () => {
    navigation.navigate("menu");
  };

  const openCart = () => {
    navigation.navigate("checkout");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Icons.logo} style={styles.logo} />
        <TouchableOpacity onPress={openCart}>
          <Image source={Icons.cart} style={styles.cart} />
        </TouchableOpacity>
      </View>

      <View style={styles.search}>
        <TextBox
          value={searchText}
          placeholder="O que vamos pedir hoje?"
          onChangeText={handleSearchTextChange}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories categories={categorias} />

        <Banners banners={banners} />

        <Text style={styles.highlights}>Destaques</Text>
        {restaurantes?.map((restaurant) => {
          return (
            <RestaurantComponent
              restaurant={restaurant}
              icon={Icons.favoriteFull}
              openMenu={openMenu}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabHome;
