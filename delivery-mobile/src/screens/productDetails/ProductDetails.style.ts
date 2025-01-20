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
    padding: 10,
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
    marginTop: 15,
  },
  headerAmount: {
    color: COLORS.dark_gray,
    fontSize: FONT_SIZE.md,
    fontWeight: "bold",
    marginBottom: 2,
    marginTop: 15,
  },
  containerObservation: {
    width: "100%",
    padding: 10,
  },
  observation: {
    color: COLORS.medium_gray,
    fontSize: FONT_SIZE.md,
    marginBottom: 10
  },
  multiline: {
    flex: 1,
    backgroundColor: COLORS.light_gray,
    padding: 10,
    color: COLORS.dark_gray,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLORS.gray,
    minHeight: 120,
    textAlignVertical: "top",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  quantityIcons: {
    width: 40,
    height: 40,
  },
  quantityText: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.dark_gray,
    width: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  footerBtn: {
    flex: 1,
    marginRight: 5,
    marginLeft: 15,
  },
});
