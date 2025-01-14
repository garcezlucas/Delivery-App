import { View } from "react-native";
import { styles } from "./Address.style";
import Header from "../../components/header/Header";
import TextBox from "../../components/textBox/TextBox";
import Button from "../../components/button/Button";

const Address = () => {
  return (
    <View style={styles.container}>
      <Header text="Informe seu endreço" />

      <View style={styles.formGroup}>
        
        <View style={styles.formRow}>
          <View style={styles.form70}>
            <TextBox label="Endereço" />
          </View>

          <View style={styles.form30}>
            <TextBox label="Compl." />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="Bairro" />
        </View>

        <View style={styles.formRow}>
          <View style={styles.form70}>
            <TextBox label="Cidade" />
          </View>

          <View style={styles.form30}>
            <TextBox label="UF" />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="CEP" />
        </View>

        <View style={styles.formButton}>
          <Button title="Criar minha conta" />
        </View>
      </View>

    </View>
  );
};

export default Address;
