import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  product: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    marginBottom: 10,
    marginTop: 10,
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  texts: {
    flex: 1,
    padding: 8,
    gap: 10,
  },
  name: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
  description: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },

  amount: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
});
