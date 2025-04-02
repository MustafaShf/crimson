import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  
  const navigateToBloodRequest = () => {
    navigation.navigate('BloodRequest');  // Navigate to Blood Request page
  };
  
  const navigateToDonorRegistration = () => {
    navigation.navigate('DonorRegistration');  // Navigate to Donor Registration page
  };
  
  const navigateToActiveRequests = () => {
    navigation.navigate('ActiveBloodRequests');  // Navigate to Active Blood Requests page
  };
  
  const navigateToAdminDashboard = () => {
    navigation.navigate('AdminDashboard');  // Navigate to Admin Dashboard page
  };
  
  const navigateToNotifications = () => {
    navigation.navigate('Notifications');  // Navigate to Notifications page
  };
  
  const navigateToContactUs = () => {
    navigation.navigate('ContactUs');  // Navigate to Contact Us page
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/blood.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to CrimsonChain</Text>
      <Text style={styles.subtitle}>Your Health, Our Priority</Text>

      {/* Navigation Buttons */}
      <TouchableOpacity style={styles.button} onPress={navigateToBloodRequest}>
        <Text style={styles.buttonText}>Request Blood</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToDonorRegistration}>
        <Text style={styles.buttonText}>Register as Donor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToActiveRequests}>
        <Text style={styles.buttonText}>View Active Blood Requests</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToAdminDashboard}>
        <Text style={styles.buttonText}>Admin Dashboard</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToNotifications}>
        <Text style={styles.buttonText}>Emergency Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToContactUs}>
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Donate Blood, Save Lives</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe5e5', // Light pink background
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60, // Circular image
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d32f2f', // Dark red color for the title
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555', // Light gray subtitle color
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#d32f2f', // Dark red button color
    padding: 15,
    borderRadius: 10,
    width: '80%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 16,
    color: '#d32f2f', // Red footer text
    marginTop: 30,
    fontStyle: 'italic',
  },
});
