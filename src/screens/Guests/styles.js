import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },

  adults: {
    fontWeight: "bold",
  },

  ages: {
    color: "#8d8d8d",
  },

  buttonView: {
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#676767",
    justifyContent: "center",
    alignItems: "center",
  },

  operator: {
    fontSize: 20,
    color: "#474747",
  },

  text: {
    marginHorizontal: 20,
    fontSize: 16,
  },
});

export default styles;
