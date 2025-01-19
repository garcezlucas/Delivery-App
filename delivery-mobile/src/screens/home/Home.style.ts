import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
  },
  logo: {
    width: 140,
    height: 27,
  },
  cart: {
    width: 30,
    height: 30,
  },
  search: {
    marginBottom: 10
  },
  highlights: {
    fontSize: FONT_SIZE.md,
    fontWeight: 500
  }
});
