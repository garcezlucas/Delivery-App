import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./Address.style";
import Header from "../../components/header/Header";
import TextBox from "../../components/textBox/TextBox";
import Button from "../../components/button/Button";
import { useAddress } from "./useAddress";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../Routes";

export type AddressNavigationProp = NavigationProp<
  RootStackParamList,
  "address"
>;

const Address = () => {
  const navigation = useNavigation<AddressNavigationProp>();

  const [address, setAddress] = useState<string>("");
  const [complement, setComplement] = useState<string>("");
  const [neighborhood, setNeighborhood] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [cep, setCep] = useState<string>("");

  const {
    handleAddressChange,
    handleComplementChange,
    handleNeighborhoodChange,
    handleCityChange,
    handleStateChange,
    handleCepChange,
    handleCreateAccount,
  } = useAddress({
    navigation,
    address,
    setAddress,
    complement,
    setComplement,
    neighborhood,
    setNeighborhood,
    city,
    setCity,
    state,
    setState,
    cep,
    setCep,
  });

  return (
    <View style={styles.container}>
      <Header text="Informe seu endereço" />

      <View style={styles.formGroup}>
        <View style={styles.formRow}>
          <View style={styles.form70}>
            <TextBox
              label="Endereço"
              value={address}
              onChangeText={handleAddressChange}
            />
          </View>

          <View style={styles.form30}>
            <TextBox
              label="Compl."
              value={complement}
              onChangeText={handleComplementChange}
            />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox
            label="Bairro"
            value={neighborhood}
            onChangeText={handleNeighborhoodChange}
          />
        </View>

        <View style={styles.formRow}>
          <View style={styles.form70}>
            <TextBox
              label="Cidade"
              value={city}
              onChangeText={handleCityChange}
            />
          </View>

          <View style={styles.form30}>
            <TextBox
              label="UF"
              value={state}
              onChangeText={handleStateChange}
            />
          </View>
        </View>

        <View style={styles.form}>
          <TextBox label="CEP" value={cep} onChangeText={handleCepChange} />
        </View>

        <View style={styles.formButton}>
          <Button title="Criar minha conta" onPress={handleCreateAccount} />
        </View>
      </View>
    </View>
  );
};

export default Address;
