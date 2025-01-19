import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  texts: {
    flex: 1,
    padding: 8,
    justifyContent: "space-between",
  },
  name: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
  containerAmount: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amount: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
  date: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.sm,
  },
  status: {
    color: COLORS.green,
    fontSize: FONT_SIZE.md,
  },
});
