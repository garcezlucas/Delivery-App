import { View } from "react-native";
import { styles } from "./Register.style";
import Header from "../../components/header/Header";
import TextBox from "../../components/textBox/TextBox";
import Button from "../../components/button/Button";

const Register = () => {
  return (
    <View style={styles.container}>
      <Header text="Criar sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox label="Nome completo" />
        </View>

        <View style={styles.form}>
          <TextBox label="E-mail" />
        </View>

        <View style={styles.form}>
          <TextBox label="Escolha uma senha" isPassword={true} />
        </View>

        <View style={styles.form}>
          <TextBox label="Confirme a senha" isPassword={true} />
        </View>

        <View style={styles.formButton}>
          <Button title="Próximo passo" />
        </View>
      </View>
    </View>
  );
};

export default Register;
