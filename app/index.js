import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/3837464/pexels-photo-3837464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>News App</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.subtitle}>
              Welcome to News App. Your daily dose of news, curated just for you
            </Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.push("/news/categories");
            }}
          >
            <Text style={styles.buttonText}>Browse by Category</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.push("/news/categories/countryCategories");
            }}
          >
            <Text style={styles.buttonText}>Browse by Counry</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 22,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    fontSize: 17,
    textAlign: "center",
    color: "white",
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "600",
  },
});

export default Home;
