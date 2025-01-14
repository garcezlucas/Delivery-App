import { Text, TextInput, View } from "react-native";
import { styles } from "./TextBox.style";

interface TextBoxProps {
  label: string;
  value: string;
  placeholder?: string;
  isPassword?: boolean;
  onChangeText: (value: string) => void;
}

const TextBox: React.FC<TextBoxProps> = ({
  label,
  value,
  placeholder,
  isPassword,
  onChangeText,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextBox;
