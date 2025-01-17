import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  category: {
    paddingRight: 10
  },
  icons: {
    width: 65,
    height: 65,
  },
  text: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
    textAlign: "center"
  },
});
