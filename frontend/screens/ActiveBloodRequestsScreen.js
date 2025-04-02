import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const activeRequests = [
  {
    id: 1,
    requesterName: "John Doe",
    bloodGroup: "O+",
    location: "852-B Milaad St, Block B Faisal Town, Lahore, 54770",
    urgency: "Emergency",
  },
  {
    id: 2,
    requesterName: "Sarah Khan",
    bloodGroup: "A-",
    location: "Karachi, Pakistan",
    urgency: "Regular",
  },
  {
    id: 3,
    requesterName: "Ali Raza",
    bloodGroup: "B+",
    location: "Islamabad, Pakistan",
    urgency: "Emergency",
  },
  {
    id: 4,
    requesterName: "Maria Shah",
    bloodGroup: "AB+",
    location: "Rawalpindi, Pakistan",
    urgency: "Regular",
  },
  {
    id: 5,
    requesterName: "Tariq Ahmed",
    bloodGroup: "O-",
    location: "Lahore, Pakistan",
    urgency: "Emergency",
  },
  {
    id: 6,
    requesterName: "Mariam Noor",
    bloodGroup: "B-",
    location: "Karachi, Pakistan",
    urgency: "Regular",
  },
];

export default function ActiveBloodRequestsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Active Blood Requests</Text>
      <ScrollView contentContainerStyle={styles.requestsContainer}>
        {activeRequests.map((request) => (
          <View key={request.id} style={styles.card}>
            <Text style={styles.cardTitle}>{request.requesterName}</Text>
            <Text style={styles.cardText}>
              Blood Group: {request.bloodGroup}
            </Text>
            <Text style={styles.cardText}>Location: {request.location}</Text>
            <Text style={styles.cardText}>Urgency: {request.urgency}</Text>

            {/* Accept Request Button */}
            <TouchableOpacity
              style={[
                styles.button,
                {
                  backgroundColor:
                    request.urgency === "Emergency" ? "#d32f2f" : "#4caf50",
                },
              ]}
              onPress={() =>
                console.log(`Accepting request from ${request.requesterName}`)
              }
            >
              <Text style={styles.buttonText}>
                {request.urgency === "Emergency"
                  ? "Accept Emergency"
                  : "Accept Request"}
              </Text>
            </TouchableOpacity>

            {/* See Location Button */}
            <TouchableOpacity
              style={styles.locationButton}
              onPress={() =>
                navigation.navigate("Location", { location: request.location })
              }
            >
              <Text style={styles.buttonText}>See Location</Text>
            </TouchableOpacity>

            {/* Contact Button */}
            <TouchableOpacity
              style={styles.contactButton}
              onPress={() => console.log(`Contacting ${request.requesterName}`)}
            >
              <Text style={styles.contactButtonText}>Contact</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#d32f2f",
    marginBottom: 20,
    textAlign: "center",
  },
  requestsContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  cardText: {
    fontSize: 16,
    color: "#555",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#4caf50",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    width: "100%",
    alignItems: "center",
  },
  locationButton: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  contactButton: {
    backgroundColor: "#d32f2f",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
