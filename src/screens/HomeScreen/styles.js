import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // position: "relative",
  },

  searchButton: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 20,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 50,
    zIndex: 100,
  },

  searchButtonTxt: {
    fontSize: 16,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },

  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#fff",
    width: "70%",
    marginLeft: 25,
  },

  button: {
    backgroundColor: "#fff",
    width: 200,
    marginLeft: 25,
    marginTop: 25,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonTxt: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
