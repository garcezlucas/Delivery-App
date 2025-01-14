import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./Register.style";
import Header from "../../components/header/Header";
import TextBox from "../../components/textBox/TextBox";
import Button from "../../components/button/Button";
import { useRegister } from "./useRegister";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Routes";

export type RegisterNavigationProp = NavigationProp<
  RootStackParamList,
  "register"
>;

const Register = () => {
  const navigation = useNavigation<RegisterNavigationProp>();

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const {
    handleFullNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleNextStep,
  } = useRegister({
    navigation,
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  });

  return (
    <View style={styles.container}>
      <Header text="Criar sua conta" />

      <View style={styles.formGroup}>
        <View style={styles.form}>
          <TextBox
            label="Nome completo"
            value={fullName}
            onChangeText={handleFullNameChange}
          />
        </View>

        <View style={styles.form}>
          <TextBox
            label="E-mail"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>

        <View style={styles.form}>
          <TextBox
            label="Escolha uma senha"
            value={password}
            onChangeText={handlePasswordChange}
            isPassword={true}
          />
        </View>

        <View style={styles.form}>
          <TextBox
            label="Confirme a senha"
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            isPassword={true}
          />
        </View>

        <View style={styles.formButton}>
          <Button title="Próximo passo" onPress={handleNextStep} />
        </View>
      </View>
    </View>
  );
};

export default Register;
