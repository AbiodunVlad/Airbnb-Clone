import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Post(props) {
  // console.log(props);

  const post = props.post;

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/* Old and New Prices */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrices}>${post.oldPrice} </Text>
        <Text style={styles.newPrices}> ${post.newPrice}</Text> / night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrices}>${post.totalPrice} total</Text>
    </View>
  );
}
