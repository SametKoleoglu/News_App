import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

const Country = ({ item }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        router.push({
          pathname: `/news/countries`,
          params: { country: item.code },
        })
      }
    >
      <MaterialIcons
        name={item.icon}
        size={23}
        color={"white"}
        style={styles.icon}
      />
      <Text style={styles.CountryText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    padding: 16,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 23,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  icon: {
    marginRight: 8,
  },
  CountryText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
export default Country;
