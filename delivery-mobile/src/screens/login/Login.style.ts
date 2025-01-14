import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  formGroup: {
    width: "100%",
    marginTop: 50,
    marginBottom: 40,
  },
  form: {
    width: "100%",
    marginBottom: 25,
  },
  formButton: {
    width: "100%",
    marginBottom: 25,
    marginTop: 30,
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginBottom: 50,
  },
  footerText: {
    textAlign: "center",
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
});
