import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Categories.style";
import { Categorie } from "../../interfaces/Categorie";

interface CategoriesProps {
  categories: Categorie[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category) => {
          return (
            <View style={styles.category} key={category.id}>
              <TouchableOpacity>
                <Image source={category.icone} style={styles.icons} />
                <Text style={styles.text}>{category.descricao}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
