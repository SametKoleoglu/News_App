import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const NewsDetails = () => {
  const { title, description, content, urlToImage } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container2}>
        <Text style={styles.title}>{title}</Text>
        {urlToImage && (
          <Image source={{ uri: urlToImage }} style={styles.image} />
        )}
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.content}>{content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
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
