import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🎓 FIPU Buddy</Text>
          <Text style={styles.headerSubtitle}>
            Tvoj digitalni vodič kroz studij
          </Text>
        </View>

        {/* Main Content */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Dobrodošao!</Text>
            <Text style={styles.welcomeText}>
              FIPU Buddy je tvoja aplikacija za lakše snalaženje tijekom studija
              na Fakultetu informatike u Puli.
            </Text>
          </View>

          {/* Feature Cards */}
          <View style={styles.featuresContainer}>
            <Text style={styles.sectionTitle}>Brzo dođi do:</Text>

            <TouchableOpacity style={styles.featureCard}>
              <Text style={styles.featureIcon}>📚</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Kolegiji</Text>
                <Text style={styles.featureDescription}>
                  Pregled svih kolegija po godinama s ECTS bodovima
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <Text style={styles.featureIcon}>👨‍🏫</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Profesori</Text>
                <Text style={styles.featureDescription}>
                  Kontakti, predmeti i informacije o završnim radovima
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <Text style={styles.featureIcon}>📄</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Template dokumenti</Text>
                <Text style={styles.featureDescription}>
                  Gotovi predlošci za seminarske i završne radove
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard}>
              <Text style={styles.featureIcon}>ℹ️</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Informacije</Text>
                <Text style={styles.featureDescription}>
                  Pravila, rokovi, menza, smještaj i ostale korisne informacije
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Verzija 1.0.0 • FIPU 2025</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#2c3e50",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#ecf0f1",
    textAlign: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeSection: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginTop: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#7f8c8d",
    lineHeight: 24,
  },
  featuresContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
  },
  featureCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: "#7f8c8d",
    lineHeight: 20,
  },
  footer: {
    backgroundColor: "#ecf0f1",
    paddingVertical: 15,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#7f8c8d",
  },
});
