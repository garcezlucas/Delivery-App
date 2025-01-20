import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/Theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerPhoto: {
    alignItems: "center",
  },
  photo: {
    height: 150,
  },
  containerBack: {
    position: "absolute",
    top: 30,
    left: 15,
  },
  back: {
    width: 40,
    height: 40,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  headerTexts: {
    flex: 1,
  },
  headerTitle: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    marginBottom: 2,
  },
  headerSubTitle: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.md,
  },
  favorite: {
    width: 40,
    height: 40,
  },
  location: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    width: 40,
    height: 40,
    margin: 10,
  },
  address: {
    flex: 1,
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
  },
  containerProduct: {
    padding: 10,
  },
  category: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    padding: 2,
  },
});
