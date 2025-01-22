import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    marginBottom: 10,
    marginTop: 10,
  },
  product: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
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
  containerRemove: {
    alignItems: "flex-end",
    marginTop: 8,
  },
  remove: {
    width: 28,
    height: 28,
  },
});
