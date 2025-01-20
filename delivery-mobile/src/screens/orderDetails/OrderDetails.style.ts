import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    paddingTop: 25,
  },
  header: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    marginBottom: 10
  },
  containerBack: {
    position: "absolute",
    top: 7,
    left: 0,
  },
  back: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: FONT_SIZE.md,
    color: COLORS.dark_gray,
    textAlign: "center",
  },
  values: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    marginTop: 4
  },
  resume: {
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    color: COLORS.dark_gray,
  },
  value: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.dark_gray,
  }
});
