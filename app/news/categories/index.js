import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { categories } from "../../../utils/data";
import { LinearGradient } from "expo-linear-gradient";
import Category from "../../../components/Category";

const AllCategories = () => {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <SafeAreaView>
        <Text style={styles.title}>All Categories</Text>

        <FlatList
          data={categories}
          renderItem={({ item }) => <Category item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    color: "white",
  },
});
