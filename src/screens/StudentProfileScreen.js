import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../styles/globalStyles";

export default function StudentProfileScreen({ navigation }) {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    studentId: "",
    email: "",
    phone: "",
    studyYear: "",
    studyProgram: "",
    birthDate: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Load profile data when component mounts
  useEffect(() => {
    loadProfileData();
  }, []);

  const loadProfileData = async () => {
    try {
      const savedProfile = await AsyncStorage.getItem("studentProfile");
      if (savedProfile) {
        setProfileData(JSON.parse(savedProfile));
      }
    } catch (error) {
      console.error("Error loading profile data:", error);
    }
  };

  const saveProfileData = async () => {
    try {
      await AsyncStorage.setItem("studentProfile", JSON.stringify(profileData));
      setIsEditing(false);
      Alert.alert("Uspjeh", "Profil je uspješno spremljen!", [
        { text: "OK", style: "default" },
      ]);
    } catch (error) {
      console.error("Error saving profile data:", error);
      Alert.alert("Greška", "Dogodila se greška prilikom spremanja profila.", [
        { text: "OK", style: "default" },
      ]);
    }
  };

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const cancelEditing = () => {
    loadProfileData(); // Reload original data
    setIsEditing(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            style={globalStyles.content}
            showsVerticalScrollIndicator={false}
          >
            <View style={globalStyles.welcomeSection}>
              <Text style={globalStyles.welcomeTitle}>Moj profil</Text>
              <Text style={globalStyles.welcomeText}>
                Ovjde možete urediti svoje osobne podatke i informacije o
                studiju.
              </Text>
            </View>

            {/* Profile Icon */}
            <View style={styles.profileIconContainer}>
              <View style={styles.profileIcon}>
                <Image
                  source={require("../../assets/user.png")}
                  style={styles.profileIconImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Profile Form */}
            <View style={globalStyles.featuresContainer}>
              <Text style={globalStyles.sectionTitle}>Osobni podaci:</Text>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Ime:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.firstName}
                  onChangeText={(text) => handleInputChange("firstName", text)}
                  placeholder="Unesite ime"
                  editable={isEditing}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Prezime:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.lastName}
                  onChangeText={(text) => handleInputChange("lastName", text)}
                  placeholder="Unesite prezime"
                  editable={isEditing}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>JMBAG:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.studentId}
                  onChangeText={(text) => handleInputChange("studentId", text)}
                  placeholder="Unesite JMBAG"
                  editable={isEditing}
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Email:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.email}
                  onChangeText={(text) => handleInputChange("email", text)}
                  placeholder="ime.prezime@student.unipu.hr"
                  editable={isEditing}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Telefon:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.phone}
                  onChangeText={(text) => handleInputChange("phone", text)}
                  placeholder="Unesite broj telefona"
                  editable={isEditing}
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Datum rođenja:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.birthDate}
                  onChangeText={(text) => handleInputChange("birthDate", text)}
                  placeholder="dd.mm.yyyy"
                  editable={isEditing}
                />
              </View>

              <Text style={[globalStyles.sectionTitle, { marginTop: 30 }]}>
                Studijske informacije:
              </Text>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Studijski program:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.studyProgram}
                  onChangeText={(text) =>
                    handleInputChange("studyProgram", text)
                  }
                  placeholder="npr. Preddiplomski studij informatike"
                  editable={isEditing}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Godina studija:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.studyYear}
                  onChangeText={(text) => handleInputChange("studyYear", text)}
                  placeholder="npr. 2. godina"
                  editable={isEditing}
                />
              </View>

              <Text style={[globalStyles.sectionTitle, { marginTop: 30 }]}>
                Adresa:
              </Text>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Adresa:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.address}
                  onChangeText={(text) => handleInputChange("address", text)}
                  placeholder="Ulica i broj"
                  editable={isEditing}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Grad:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.city}
                  onChangeText={(text) => handleInputChange("city", text)}
                  placeholder="Unesite grad"
                  editable={isEditing}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Poštanski broj:</Text>
                <TextInput
                  style={[
                    styles.textInput,
                    !isEditing && styles.textInputDisabled,
                  ]}
                  value={profileData.zipCode}
                  onChangeText={(text) => handleInputChange("zipCode", text)}
                  placeholder="Unesite poštanski broj"
                  editable={isEditing}
                  keyboardType="numeric"
                />
              </View>

              {/* Action Buttons */}
              <View style={styles.buttonContainer}>
                {!isEditing ? (
                  <TouchableOpacity
                    style={styles.editButton}
                    onPress={() => setIsEditing(true)}
                  >
                    <Text style={styles.buttonText}>✏️ Uredi profil</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.editingButtons}>
                    <TouchableOpacity
                      style={styles.saveButton}
                      onPress={saveProfileData}
                    >
                      <Text style={styles.buttonText}>💾 Spremi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.cancelButton}
                      onPress={cancelEditing}
                    >
                      <Text style={styles.buttonText}>❌ Odustani</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = {
  profileIconContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#6DD0F6",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileIconImage: {
    width: 50,
    height: 50,
    tintColor: "#fff",
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  textInputDisabled: {
    backgroundColor: "#f5f5f5",
    color: "#666",
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#6DD0F6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  editingButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
};
