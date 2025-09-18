import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  const openISSP = () => {
    Linking.openURL("https://issp.srce.hr/").catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  const openStudomat = () => {
    Linking.openURL("https://www.isvu.hr/studomat/hr/prijava").catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />

        {/* Main Content */}
        <ScrollView
          style={globalStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={globalStyles.welcomeSection}>
            <Text style={globalStyles.welcomeTitle}>
              Dobrodošao u FIPU buddy!
            </Text>
            <Text style={globalStyles.welcomeText}>
              FIPU Buddy je tvoja aplikacija za lakše snalaženje tijekom studija
              na Fakultetu informatike u Puli.
            </Text>
          </View>

          {/* Feature Cards */}
          <View style={globalStyles.featuresContainer}>
            <Text style={globalStyles.sectionTitle}>Brzo dođi do:</Text>

            <TouchableOpacity
              style={globalStyles.featureCard}
              onPress={() => navigation.navigate("CoursesMenu")}
            >
              <Text style={globalStyles.featureIcon}>📚</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>Kolegiji</Text>
                <Text style={globalStyles.featureDescription}>
                  Pregled svih kolegija po godinama s ECTS bodovima
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={globalStyles.featureCard}
              onPress={() => navigation.navigate("Professors")}
            >
              <Text style={globalStyles.featureIcon}>👨‍🏫</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>Profesori</Text>
                <Text style={globalStyles.featureDescription}>
                  Kontakti, predmeti i informacije o završnim radovima
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.featureCard}>
              <Text style={globalStyles.featureIcon}>📄</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>
                  Template dokumenti
                </Text>
                <Text style={globalStyles.featureDescription}>
                  Gotovi predlošci za seminarske i završne radove
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={globalStyles.featureCard}>
              <Text style={globalStyles.featureIcon}>ℹ️</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>Referada</Text>
                <Text style={globalStyles.featureDescription}>
                  Pravila, rokovi, menza, smještaj i ostale korisne informacije
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={globalStyles.featureCard}
              onPress={openISSP}
            >
              <Text style={globalStyles.featureIcon}>🎓</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>ISSP Portal</Text>
                <Text style={globalStyles.featureDescription}>
                  Studentske informacije, subvencije, radni ugovor i aktivnosti
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={globalStyles.featureCard}
              onPress={openStudomat}
            >
              <Text style={globalStyles.featureIcon}>📊</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>Studomat</Text>
                <Text style={globalStyles.featureDescription}>
                  Uvid u ocjene, ispite, rezultate i akademski progress
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
