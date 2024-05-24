import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import Entypo from "react-native-vector-icons/Entypo";

import searchResults from "../../../assets/data/search";

export default function DestinationSearchScreen(props) {
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Imput component */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* List of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Guests")}
            style={styles.row}
          >
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={25} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}
