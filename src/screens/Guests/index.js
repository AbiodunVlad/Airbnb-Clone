import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function Guests() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View>
      <View style={{ justifyContent: "space-between", height: "100%" }}>
        {/* Row 1: Adults */}
        <View style={styles.row}>
          <View>
            <Text style={styles.adults}>Adults</Text>
            <Text style={styles.ages}>Ages 13 or above</Text>
          </View>

          <View style={styles.buttonView}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}
            >
              <Text style={styles.operator}>-</Text>
            </Pressable>

            <Text style={styles.text}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}
            >
              <Text style={styles.operator}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Children */}
        <View style={styles.row}>
          <View>
            <Text style={styles.adults}>Childres</Text>
            <Text style={styles.ages}>Ages 2 to 12</Text>
          </View>

          <View style={styles.buttonView}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}
            >
              <Text style={styles.operator}>-</Text>
            </Pressable>

            <Text style={styles.text}>{children}</Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}
            >
              <Text style={styles.operator}>+</Text>
            </Pressable>
          </View>
        </View>

        {/* Infants */}
        <View style={styles.row}>
          <View>
            <Text style={styles.adults}>Infants</Text>
            <Text style={styles.ages}>Ages below 2</Text>
          </View>

          <View style={styles.buttonView}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}
            >
              <Text style={styles.operator}>-</Text>
            </Pressable>

            <Text style={styles.text}>{infants}</Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}
            >
              <Text style={styles.operator}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() => navigation.navigate()}
          style={{
            marginBottom: 20,
            backgroundColor: "#f15454",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
