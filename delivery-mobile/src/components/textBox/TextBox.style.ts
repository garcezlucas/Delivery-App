import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderColor: COLORS.light_gray,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
  },
  label: {
    marginLeft: 5,
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
});
