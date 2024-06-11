import { StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { countries } from "../../../../utils/data";
import { Country } from "../../../../components";

const AllCountries = () => {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <SafeAreaView>
        <Text style={styles.title}>All Countries</Text>

        <FlatList
          data={countries}
          renderItem={({ item, index }) => <Country key={index} item={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AllCountries;

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
