import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./Header.style";
import Icons from "../../constants/Icons";

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={Icons.logo} />
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Header;
