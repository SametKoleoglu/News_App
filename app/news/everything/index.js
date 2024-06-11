import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { searchNews } from "../../../lib/react-query/api/server";
import { useQuery } from "@tanstack/react-query";

const SearchNews = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("latest");

  const router = useRouter();

  const { data, error, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["newsBySearch"],
    queryFn: () => searchNews(searchQuery),
    enabled: !!searchQuery,
  });

  const handleSearch = () => {
    setSearchQuery(query);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4c669f" />
        <Text style={styles.loadingText}>Loading news...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Error loading news: {error.message}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Text style={styles.title}>Latest News</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for news..."
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      {data && data.articles ? (
        <FlatList
          data={data.articles}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              style={styles.articleContainer}
              onPress={() =>
                router.push({
                  pathname: `/news/details/`,
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
                <Image
                  source={{ uri: item.urlToImage }}
                  style={styles.articleImage}
                />
              )}
              <View style={styles.textContainer}>
                <Text style={styles.articleTitle}>{item.title}</Text>
                <Text style={styles.articleDescription} numberOfLines={2}>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noResultsText}>No news articles found.</Text>
      )}
    </SafeAreaView>
  );
};

export default SearchNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f4f7",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  searchButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#4c669f",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  articleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  articleImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  articleDescription: {
    fontSize: 14,
    color: "#666",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: "#4c669f",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    color: "#d9534f",
    textAlign: "center",
  },
  noResultsText: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 16,
  },
});
