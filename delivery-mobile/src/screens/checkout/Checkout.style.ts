import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  values: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    marginTop: 4,
  },
  resume: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.dark_gray,
  },
  value: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
  },
  footer: {
    marginTop: 10,
  }
});
