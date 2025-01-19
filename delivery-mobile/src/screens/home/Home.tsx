import { Image, View, Text, ScrollView } from "react-native";
import { styles } from "./Home.style";
import Icons from "../../constants/Icons";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textBox/TextBox";
import { useState } from "react";
import Categories from "../../components/categories/Categories";
import { banners, categorias } from "../../constants/mock";
import Banners from "../../components/banners/Banners";
import { restaurantes } from "../../constants/mock";
import Restaurant from "../../components/restaurant/Restaurant";

const Home = () => {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchTextChange = (text: string) => setSearchText(text);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={Icons.logo} style={styles.logo} />
        <Image source={Icons.cart} style={styles.cart} />
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
            <Restaurant restaurant={restaurant} icon={Icons.favoriteFull} />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
