import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: COLORS.red,
  },
  text: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.white,
    padding: 14,
    textAlign: "center",
  },
});
