import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";

export default function CoursesMenuScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />

        <ScrollView
          style={globalStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={globalStyles.featuresContainer}>
            <Text style={globalStyles.sectionTitle}>Preddiplomski studij:</Text>

            <TouchableOpacity
              style={globalStyles.featureCard}
              onPress={() =>
                navigation.navigate("CoursesList", {
                  year: "1. godina preddiplomskog",
                })
              }
            >
              <Text style={globalStyles.featureIcon}>1️⃣</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>1. godina</Text>
                <Text style={globalStyles.featureDescription}>
                  Kolegiji prve godine preddiplomskog studija
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={globalStyles.featureCard}
              onPress={() =>
                navigation.navigate("CoursesList", {
                  year: "2. godina preddiplomskog",
                })
              }
            >
              <Text style={globalStyles.featureIcon}>2️⃣</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>2. godina</Text>
                <Text style={globalStyles.featureDescription}>
                  Kolegiji druge godine preddiplomskog studija
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={globalStyles.featureCard}
              onPress={() =>
                navigation.navigate("CoursesList", {
                  year: "3. godina preddiplomskog",
                })
              }
            >
              <Text style={globalStyles.featureIcon}>3️⃣</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>3. godina</Text>
                <Text style={globalStyles.featureDescription}>
                  Kolegiji treće godine preddiplomskog studija
                </Text>
              </View>
            </TouchableOpacity>

            <Text style={[globalStyles.sectionTitle, { marginTop: 30 }]}>
              Diplomski studij:
            </Text>

            <TouchableOpacity
              style={globalStyles.featureCard}
              onPress={() =>
                navigation.navigate("CoursesList", {
                  year: "4. godina diplomskog",
                })
              }
            >
              <Text style={globalStyles.featureIcon}>🎓</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>
                  4. godina (1. diplomska)
                </Text>
                <Text style={globalStyles.featureDescription}>
                  Kolegiji četvrte godine / prve godine diplomskog studija
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={globalStyles.featureCard}
              onPress={() =>
                navigation.navigate("CoursesList", {
                  year: "5. godina diplomskog",
                })
              }
            >
              <Text style={globalStyles.featureIcon}>🏆</Text>
              <View style={globalStyles.featureContent}>
                <Text style={globalStyles.featureTitle}>
                  5. godina (2. diplomska)
                </Text>
                <Text style={globalStyles.featureDescription}>
                  Kolegiji pete godine / druge godine diplomskog studija
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
