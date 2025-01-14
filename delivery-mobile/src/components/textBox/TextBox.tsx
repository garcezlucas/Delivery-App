import { Text, TextInput, View } from "react-native";
import { styles } from "./TextBox.style";

interface TextBoxProps {
  label: string;
  placeholder?: string;
  isPassword?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({
  label,
  placeholder,
  isPassword,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPassword}
      />
    </View>
  );
};

export default TextBox;
