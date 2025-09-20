import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";
import {
  undergraduateCourses,
  electiveCourses,
  graduateCourses,
} from "../data/courses";

export default function CoursesListScreen({ navigation, route }) {
  const { year } = route.params;

  // Dohvaćamo kolegije za odabranu godinu - provjeravamo i preddiplomske i diplomske
  let yearCourses = undergraduateCourses[year];

  // Ako nije pronađeno u preddiplomskim, probaj diplomske
  if (!yearCourses) {
    yearCourses = graduateCourses[year];
  }

  if (!yearCourses) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={globalStyles.container}>
          <StatusBar style="auto" />
          <ScrollView style={globalStyles.content}>
            <View style={globalStyles.welcomeSection}>
              <Text style={globalStyles.welcomeTitle}>Greška</Text>
              <Text style={globalStyles.welcomeText}>
                Kolegiji za {year} nisu pronađeni.
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }

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
              Popis kolegija za {year} s ECTS bodovima i informacijama o
              profesorima.
            </Text>
          </View>

          {Object.entries(yearCourses).map(([semester, courses]) => (
            <View key={semester} style={globalStyles.featuresContainer}>
              <Text style={globalStyles.sectionTitle}>{semester}:</Text>

              {courses.map((course) => (
                <View key={course.id} style={globalStyles.courseCard}>
                  <View style={globalStyles.courseHeader}>
                    <Text style={globalStyles.courseTitle}>{course.name}</Text>
                    <Text style={globalStyles.courseEcts}>
                      {course.ects} ECTS
                    </Text>
                  </View>

                  <View style={globalStyles.courseInfo}>
                    <Text style={globalStyles.courseDetail}>
                      👨‍🏫 {course.professors.join(", ")}
                    </Text>
                    <Text style={globalStyles.courseDetail}>
                      📚 Opterećenje: {course.load}
                    </Text>
                    {course.note && (
                      <Text style={globalStyles.courseNote}>
                        ℹ️ {course.note}
                      </Text>
                    )}
                  </View>

                  {/* Prikaz izbornih kolegija */}
                  {course.name.includes("Izborni predmet") &&
                    electiveCourses[course.name] && (
                      <View style={globalStyles.electiveCoursesSection}>
                        <Text style={globalStyles.electiveCoursesTitle}>
                          📋 Dostupni izborni kolegiji:
                        </Text>
                        {electiveCourses[course.name].map((elective, index) => (
                          <View key={index} style={globalStyles.electiveCourse}>
                            <Text style={globalStyles.electiveCourseTitle}>
                              {elective.name}
                            </Text>
                            <Text style={globalStyles.electiveCourseInfo}>
                              👨‍🏫 {elective.professors.join(", ")}
                            </Text>
                            <Text style={globalStyles.electiveCourseInfo}>
                              📚 {elective.load} | {elective.ects} ECTS
                            </Text>
                          </View>
                        ))}
                      </View>
                    )}
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
