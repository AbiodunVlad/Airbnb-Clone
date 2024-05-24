import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Entype from "react-native-vector-icons/Entypo";
import HomeScreen from "./src/screens/HomeScreen";
import SearchResultsScreen from "./src/screens/SearchResults";
import Post from "./src/components/Post";
import DestinationSearchScreen from "./src/screens/DestinationSearch";
import Guests from "./src/screens/Guests";

import Router from "./src/navigation/router";

import "react-native-gesture-handler";

import feed from "./assets/data/feed";

// const post1 = feed[0];

export default function App() {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <SearchResultsScreen /> */}
      {/* <Post post={post1} /> */}
      {/* <DestinationSearchScreen /> */}
      {/* <Guests /> */}

      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
