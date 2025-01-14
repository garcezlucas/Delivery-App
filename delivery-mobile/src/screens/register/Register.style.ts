import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  formGroup: {
    width: "100%",
    marginTop: 40,
    marginBottom: 40,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  formButton: {
    width: "100%",
    marginBottom: 25,
    marginTop: 20,
  },
});
