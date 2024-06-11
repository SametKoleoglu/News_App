import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { getTopNewsByCountry } from "../../../lib/react-query/api/server";
import ArticleCountry from "../../../components/ArticleCountry";

const CountryNews = () => {
  const { country } = useLocalSearchParams();
  console.log(country);

  const { data, error, isError, isSuccess, isLoading } = useQuery({
    queryKey: ["newsByCountry"],
    queryFn: () => getTopNewsByCountry('country'),
  });

  return (
    <SafeAreaView style={styles.continer}>
      <Text style={styles.title}>{country.toUpperCase()} : News</Text>
      <FlatList
        data={data.articles}
        renderItem={({ item, index }) => (
          <ArticleCountry key={index} item={item} />
        )}
        keyExtractor={(item) => item.url}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default CountryNews;

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
});
