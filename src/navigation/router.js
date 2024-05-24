import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import DestinationSearchScreen from "../screens/DestinationSearch";
import Guests from "../screens/Guests";

import HomeTabNavigator from "./HomeTabNavigator";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function Router(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{ title: "Where are you going to?" }}
        />

        <Stack.Screen
          name={"Guests"}
          component={Guests}
          options={{ title: "How many people?" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
