import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";

export default function CoursesListScreen({ navigation, route }) {
  const { year } = route.params;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />

        <ScrollView
          style={globalStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={globalStyles.welcomeSection}>
            <Text style={globalStyles.welcomeTitle}>Kolegiji - {year}</Text>
            <Text style={globalStyles.welcomeText}>
              Ovdje će biti prikazan popis kolegija za {year} s ECTS bodovima,
              opisima i informacijama o profesorima.
            </Text>
          </View>

          <View style={globalStyles.featuresContainer}>
            <Text style={globalStyles.sectionTitle}>Dostupno uskoro:</Text>
            <View style={globalStyles.featureCard}>
              <Text style={globalStyles.featureIcon}>🔧</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>U razvoju</Text>
                <Text style={globalStyles.featureDescription}>
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
}
