import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import Fontisto from "react-native-vector-icons/Fontisto";

const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text>hiiii</Text>
      </View>
      <ImageBackground
        source={require("../../../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable style={styles.button} onPress={() => console.warn("hi")}>
          <Text style={styles.buttonTxt}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>

      {/* search bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Destination Search")}
      >
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.searchButtonTxt}>Where are you going?</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
