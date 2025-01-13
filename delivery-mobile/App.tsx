import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/button/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World! Teste</Text>

      <Button title="Acessar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
