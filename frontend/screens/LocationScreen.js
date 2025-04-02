import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function LocationScreen({ route }) {
  const { location } = route.params;

  const openGoogleSearch = () => {
    const query = encodeURIComponent(location);
    const url = `https://www.google.com/maps?q=${query}`; // Google Maps Search URL
    Linking.openURL(url); // Opens Google search for the location
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Location Details</Text>
      <View style={styles.card}>
        <Text style={styles.locationText}>Location: {location}</Text>
        <TouchableOpacity style={styles.button} onPress={openGoogleSearch}>
          <Text style={styles.buttonText}>Search on Google Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f4f7", // Light background for a cleaner look
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  locationText: {
    fontSize: 20,
    color: "#333",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2196F3", // Attractive blue for the button
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
