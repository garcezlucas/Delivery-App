import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: COLORS.red,
    borderRadius: 6
  },
  text: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.light_gray,
    padding: 14,
    textAlign: "center",
  },
});
