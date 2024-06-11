import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getNewsByCategory } from "../../../lib/react-query/api/server";
import ArticleCategory from "../../../components/ArticleCategory";

const NewsByCategory = () => {
  // get the category from the url
  const { newsByCategory } = useLocalSearchParams();

  const { data, error, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["newsByCategory"],
    queryFn: () => getNewsByCategory(newsByCategory),
  });

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} color={"#4c669f"} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error : {error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.continer}>
      <Text style={styles.title}>{newsByCategory} : News</Text>
      <FlatList
        data={data.articles}
        renderItem={({ item, index }) => (
          <ArticleCategory key={index} item={item} />
        )}
        keyExtractor={(item) => item.url}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default NewsByCategory;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: "#4c669f",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    fontSize: 14,
    color: "#d9534f",
    textAlign: "center",
  },
  noResultsText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 14,
  },
});
