import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },

  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },

  bedrooms: {
    marginVertical: 10,
    fontSize: 14,
    color: "#5b5b5b",
  },

  description: {
    fontSize: 18,
    lineHeight: 25,
  },

  prices: {
    fontSize: 18,
  },

  oldPrices: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },

  newPrices: {
    fontWeight: "bold",
  },

  totalPrices: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});

export default styles;
