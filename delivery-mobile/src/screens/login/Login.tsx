import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Login.style";
import Header from "../../components/header/Header";
import TextBox from "../../components/textBox/TextBox";
import Button from "../../components/button/Button";
import { useLogin } from "./useLogin";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Routes";

type LoginNavigationProp = NavigationProp<RootStackParamList, "login">;

const Login = () => {
  const navigation = useNavigation<LoginNavigationProp>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { handleEmailChange, handlePasswordChange, handleLogin } = useLogin({
    email,
    setEmail,
    password,
    setPassword,
  });

  return (
    <View style={styles.container}>
      <Header text="Acesse sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox
            label="E-mail"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>

        <View style={styles.form}>
          <TextBox
            label="Senha"
            value={password}
            onChangeText={handlePasswordChange}
            isPassword={true}
          />
        </View>

        <View style={styles.formButton}>
          <Button title="Acessar" onPress={handleLogin} />
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("register")}>
          <Text style={styles.footerText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
