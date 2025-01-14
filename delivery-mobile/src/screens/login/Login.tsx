import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Login.style";
import Header from "../../components/header/Header";
import TextBox from "../../components/textBox/TextBox";
import Button from "../../components/button/Button";

const Login = () => {
  return (
    <View style={styles.container}>
      <Header text="Acesse sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox label="E-mail" />
        </View>

        <View style={styles.form}>
          <TextBox label="Senha" isPassword={true} />
        </View>

        <View style={styles.formButton}>
          <Button title="Acessar" />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
