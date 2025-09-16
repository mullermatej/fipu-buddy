import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedYear, setSelectedYear] = useState(null);

  const openISSP = () => {
    Linking.openURL("https://issp.srce.hr/").catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const navigateToCoursesMenu = () => {
    setCurrentScreen("coursesMenu");
  };

  const navigateToProfessors = () => {
    setCurrentScreen("professors");
  };

  const navigateToHome = () => {
    setCurrentScreen("home");
    setSelectedYear(null);
  };

  const navigateToCoursesList = (year) => {
    setSelectedYear(year);
    setCurrentScreen("coursesList");
  };

  // Komponenta za glavni ekran
  const HomeScreen = () => (
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

            <TouchableOpacity
              style={styles.featureCard}
              onPress={navigateToCoursesMenu}
            >
              <Text style={styles.featureIcon}>📚</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>Kolegiji</Text>
                <Text style={styles.featureDescription}>
                  Pregled svih kolegija po godinama s ECTS bodovima
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.featureCard}
              onPress={navigateToProfessors}
            >
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
                <Text style={styles.featureTitle}>Referada</Text>
                <Text style={styles.featureDescription}>
                  Pravila, rokovi, menza, smještaj i ostale korisne informacije
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.featureCard} onPress={openISSP}>
              <Text style={styles.featureIcon}>🎓</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>ISSP Portal</Text>
                <Text style={styles.featureDescription}>
                  Studentske informacije, subvencije, radni ugovor i aktivnosti
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

  // Komponenta za meni odabira godine kolegija
  const CoursesMenuScreen = () => (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        {/* Header */}
        <View style={styles.header}>
          {/* Navigation Row */}
          <View style={styles.navigationRow}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={navigateToHome}
            >
              <Text style={styles.backButtonText}>← Natrag</Text>
            </TouchableOpacity>
          </View>

          {/* Title Row */}
          <View style={styles.titleRow}>
            <Text style={styles.headerTitle}>📚 Kolegiji</Text>
            <Text style={styles.headerSubtitle}>Odaberi godinu studija</Text>
          </View>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.featuresContainer}>
            <Text style={styles.sectionTitle}>Preddiplomski studij:</Text>

            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => navigateToCoursesList("1. godina preddiplomskog")}
            >
              <Text style={styles.featureIcon}>1️⃣</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>1. godina</Text>
                <Text style={styles.featureDescription}>
                  Kolegiji prve godine preddiplomskog studija
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => navigateToCoursesList("2. godina preddiplomskog")}
            >
              <Text style={styles.featureIcon}>2️⃣</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>2. godina</Text>
                <Text style={styles.featureDescription}>
                  Kolegiji druge godine preddiplomskog studija
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => navigateToCoursesList("3. godina preddiplomskog")}
            >
              <Text style={styles.featureIcon}>3️⃣</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>3. godina</Text>
                <Text style={styles.featureDescription}>
                  Kolegiji treće godine preddiplomskog studija
                </Text>
              </View>
            </TouchableOpacity>

            <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
              Diplomski studij:
            </Text>

            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => navigateToCoursesList("1. godina diplomskog")}
            >
              <Text style={styles.featureIcon}>🎓</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>1. godina diplomskog</Text>
                <Text style={styles.featureDescription}>
                  Kolegiji prve godine diplomskog studija
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.featureCard}
              onPress={() => navigateToCoursesList("2. godina diplomskog")}
            >
              <Text style={styles.featureIcon}>🏆</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>2. godina diplomskog</Text>
                <Text style={styles.featureDescription}>
                  Kolegiji druge godine diplomskog studija
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );

  // Komponenta za popis kolegija određene godine
  const CoursesListScreen = () => (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        {/* Header */}
        <View style={styles.header}>
          {/* Navigation Row */}
          <View style={styles.navigationRow}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setCurrentScreen("coursesMenu")}
            >
              <Text style={styles.backButtonText}>← Natrag</Text>
            </TouchableOpacity>
          </View>

          {/* Title Row */}
          <View style={styles.titleRow}>
            <Text style={styles.headerTitle}>📚 {selectedYear}</Text>
            <Text style={styles.headerSubtitle}>Popis kolegija</Text>
          </View>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>Kolegiji - {selectedYear}</Text>
            <Text style={styles.welcomeText}>
              Ovdje će biti prikazan popis kolegija za {selectedYear} s ECTS
              bodovima, opisima i informacijama o profesorima.
            </Text>
          </View>

          <View style={styles.featuresContainer}>
            <Text style={styles.sectionTitle}>Dostupno uskoro:</Text>
            <View style={styles.featureCard}>
              <Text style={styles.featureIcon}>🔧</Text>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>U razvoju</Text>
                <Text style={styles.featureDescription}>
                  Detaljni popis kolegija će biti dostupan u sljedećim verzijama
                  aplikacije.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );

  // Podatci profesora (mock data)
  const professorsData = [
    {
      id: 1,
      title: "dr. sc.",
      name: "Ana Marković",
      position: "Redovita profesorica",
      email: "ana.markovic@fipu.hr",
      office: "A301",
      courses: [
        "Programiranje 1",
        "Algoritmi i strukture podataka",
        "Objektno programiranje",
      ],
    },
    {
      id: 2,
      title: "dr. sc.",
      name: "Marko Petković",
      position: "Izvanredni profesor",
      email: "marko.petkovic@fipu.hr",
      office: "A205",
      courses: [
        "Baze podataka",
        "Napredne baze podataka",
        "Poslovna inteligencija",
      ],
    },
    {
      id: 3,
      title: "dr. sc.",
      name: "Petra Novak",
      position: "Docentica",
      email: "petra.novak@fipu.hr",
      office: "B102",
      courses: [
        "Web programiranje",
        "Mobilne aplikacije",
        "Korisničko iskustvo",
      ],
    },
    {
      id: 4,
      title: "",
      name: "Luka Horvat",
      position: "Asistent",
      email: "luka.horvat@fipu.hr",
      office: "A101",
      courses: ["Uvod u programiranje", "Praktikum iz programiranja"],
    },
    {
      id: 5,
      title: "dr. sc.",
      name: "Ivana Jurić",
      position: "Docentica",
      email: "ivana.juric@fipu.hr",
      office: "B204",
      courses: ["Matematika 1", "Matematika 2", "Diskretna matematika"],
    },
    {
      id: 6,
      title: "",
      name: "Filip Božić",
      position: "Asistent",
      email: "filip.bozic@fipu.hr",
      office: "A102",
      courses: ["Računalne mreže", "Sigurnost informacijskih sustava"],
    },
    {
      id: 7,
      title: "dr. sc.",
      name: "Sandra Miletić",
      position: "Redovita profesorica",
      email: "sandra.miletic@fipu.hr",
      office: "A302",
      courses: [
        "Operacijski sustavi",
        "Paralelno programiranje",
        "Distribuirani sustavi",
      ],
    },
  ];

  // Komponenta za popis profesora
  const ProfessorsScreen = () => (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />

        {/* Header */}
        <View style={styles.header}>
          {/* Navigation Row */}
          <View style={styles.navigationRow}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={navigateToHome}
            >
              <Text style={styles.backButtonText}>← Natrag</Text>
            </TouchableOpacity>
          </View>

          {/* Title Row */}
          <View style={styles.titleRow}>
            <Text style={styles.headerTitle}>👨‍🏫 Profesori</Text>
            <Text style={styles.headerSubtitle}>Nastavno osoblje FIPU-a</Text>
          </View>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.featuresContainer}>
            {professorsData.map((professor) => (
              <View key={professor.id} style={styles.professorCard}>
                <View style={styles.professorHeader}>
                  <Text style={styles.professorName}>
                    {professor.title} {professor.name}
                  </Text>
                  <Text style={styles.professorPosition}>
                    {professor.position}
                  </Text>
                </View>

                <View style={styles.professorInfo}>
                  <Text style={styles.professorDetail}>
                    📧 {professor.email}
                  </Text>
                  <Text style={styles.professorDetail}>
                    🏢 Ured: {professor.office}
                  </Text>
                </View>

                <View style={styles.coursesSection}>
                  <Text style={styles.coursesTitle}>Kolegiji:</Text>
                  {professor.courses.map((course, index) => (
                    <Text key={index} style={styles.courseItem}>
                      • {course}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );

  // Glavni render ovisno o trenutnom ekranu
  if (currentScreen === "coursesMenu") {
    return <CoursesMenuScreen />;
  }

  if (currentScreen === "coursesList") {
    return <CoursesListScreen />;
  }

  if (currentScreen === "professors") {
    return <ProfessorsScreen />;
  }

  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
    textAlign: "center",
    paddingTop: 20,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#2c3e50",
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
    paddingVertical: 15,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#7f8c8d",
  },
  navigationRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  titleRow: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  backButtonText: {
    fontSize: 16,
    color: "#2c3e50",
    fontWeight: "bold",
  },
  professorCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 15,
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
  professorHeader: {
    marginBottom: 10,
  },
  professorName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 3,
  },
  professorPosition: {
    fontSize: 14,
    color: "#3498db",
    fontWeight: "600",
  },
  professorInfo: {
    marginBottom: 15,
  },
  professorDetail: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 5,
  },
  coursesSection: {
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
    paddingTop: 15,
  },
  coursesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  courseItem: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 3,
    paddingLeft: 5,
  },
});
