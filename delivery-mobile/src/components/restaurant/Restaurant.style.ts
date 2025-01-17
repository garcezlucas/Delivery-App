import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    
  },
  logo: {
    width: 80,
    height: 80,
  },
  texts: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
    marginBottom: 10
  },
  address: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.medium_gray
  },
  fav: {
    width: 30,
    height: 30,
  }
});
