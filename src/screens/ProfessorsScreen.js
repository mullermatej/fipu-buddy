import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";
import { professorsData } from "../data/professors";

export default function ProfessorsScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />

        <ScrollView
          style={globalStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={globalStyles.featuresContainer}>
            {professorsData.map((professor) => (
              <View key={professor.id} style={globalStyles.professorCard}>
                <View style={globalStyles.professorHeader}>
                  <Text style={globalStyles.professorName}>
                    {professor.title} {professor.name}
                  </Text>
                  <Text style={globalStyles.professorPosition}>
                    {professor.position}
                  </Text>
                </View>

                <View style={globalStyles.professorInfo}>
                  <Text style={globalStyles.professorDetail}>
                    📧 {professor.email}
                  </Text>
                  <Text style={globalStyles.professorDetail}>
                    🏢 Ured: {professor.office}
                  </Text>
                </View>

                <View style={globalStyles.coursesSection}>
                  <Text style={globalStyles.coursesTitle}>Kolegiji:</Text>
                  {professor.courses.map((course, index) => (
                    <Text key={index} style={globalStyles.courseItem}>
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
}
