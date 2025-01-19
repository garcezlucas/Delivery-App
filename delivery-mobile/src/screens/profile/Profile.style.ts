import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 12,
  },
  borderTop: {
    borderTopWidth: 1,
    borderTopColor: COLORS.gray,
  },
  item: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  containerIcon: {
    justifyContent: "center",
  },
  icons: {
    width: 30,
    height: 30,
  },
  texts: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
  },
  subTitle: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.medium_gray,
  },
  expand: {
    width: 20,
    height: 20,
  },
});
