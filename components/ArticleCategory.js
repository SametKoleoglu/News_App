import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ArticleCategory = ({ item }) => {
  // Router
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        router.push({
          pathname: "/news/details",
          params: {
            title: item.title,
            description: item.description,
            content: item.content,
            urlToImage: item.urlToImage,
          },
        })
      }
    >
      {item.urlToImage && (
        <Image source={{ uri: item.urlToImage }} style={styles.image} />
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );
};

export default ArticleCategory;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  image: {
    height: 200,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#555",
  },
});
