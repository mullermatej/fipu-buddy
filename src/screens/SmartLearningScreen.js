import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Calendar } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { globalStyles } from "../styles/globalStyles";

export default function SmartLearningScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [activeExams, setActiveExams] = useState([]);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    loadActiveExams();
    setTodayAsSelected();
  }, []);

  const setTodayAsSelected = () => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
  };

  const loadActiveExams = async () => {
    try {
      const savedExams = await AsyncStorage.getItem("activeExams");
      if (savedExams) {
        const exams = JSON.parse(savedExams);
        setActiveExams(exams);
        updateMarkedDates(exams);
      } else {
        // Demo data for now
        const demoExams = [
          {
            id: 1,
            courseName: "Programiranje",
            examDate: "2025-09-30",
            examTime: "09:00",
            location: "Učionica 1",
            status: "Aktivno",
          },
          {
            id: 2,
            courseName: "Baze podataka 1",
            examDate: "2025-10-05",
            examTime: "11:00",
            location: "Učionica 2",
            status: "Aktivno",
          },
          {
            id: 3,
            courseName: "Web aplikacije",
            examDate: "2025-10-12",
            examTime: "14:00",
            location: "Laboratorij 1",
            status: "Aktivno",
          },
        ];
        setActiveExams(demoExams);
        updateMarkedDates(demoExams);
      }
    } catch (error) {
      console.error("Error loading active exams:", error);
    }
  };

  const updateMarkedDates = (exams) => {
    const marked = {};
    const today = new Date().toISOString().split("T")[0];

    // Mark today
    marked[today] = {
      selected: true,
      selectedColor: "#6DD0F6",
      selectedTextColor: "#fff",
    };

    // Mark exam dates
    exams.forEach((exam) => {
      if (marked[exam.examDate]) {
        // If today is also an exam date, combine the styling
        marked[exam.examDate] = {
          ...marked[exam.examDate],
          marked: true,
          dotColor: "#ff4444",
        };
      } else {
        marked[exam.examDate] = {
          marked: true,
          dotColor: "#ff4444",
        };
      }
    });

    setMarkedDates(marked);
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);

    // Update marked dates to show new selection
    const newMarkedDates = { ...markedDates };

    // Remove previous selection (but keep exam markers)
    Object.keys(newMarkedDates).forEach((date) => {
      if (newMarkedDates[date].selected) {
        newMarkedDates[date] = {
          ...newMarkedDates[date],
          selected: false,
          selectedColor: undefined,
          selectedTextColor: undefined,
        };
      }
    });

    // Add new selection
    newMarkedDates[day.dateString] = {
      ...newMarkedDates[day.dateString],
      selected: true,
      selectedColor: "#6DD0F6",
      selectedTextColor: "#fff",
    };

    setMarkedDates(newMarkedDates);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("hr-HR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const getExamsForSelectedDate = () => {
    return activeExams.filter((exam) => exam.examDate === selectedDate);
  };

  const navigateToExamSchedule = () => {
    navigation.navigate("ExamSchedule");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />

        <ScrollView
          style={globalStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={globalStyles.welcomeSection}>
            <Text style={globalStyles.welcomeTitle}>Pametno učenje</Text>
            <Text style={globalStyles.welcomeText}>
              Organizirajte svoje učenje uz pomoć kalendara i pregleda aktivnih
              ispitnih rokova.
            </Text>
          </View>

          {/* Calendar Section */}
          <View style={globalStyles.featuresContainer}>
            <Text style={globalStyles.sectionTitle}>📅 Kalendar</Text>

            <View style={styles.calendarContainer}>
              <Calendar
                onDayPress={onDayPress}
                markedDates={markedDates}
                theme={{
                  backgroundColor: "#ffffff",
                  calendarBackground: "#ffffff",
                  textSectionTitleColor: "#b6c1cd",
                  selectedDayBackgroundColor: "#6DD0F6",
                  selectedDayTextColor: "#ffffff",
                  todayTextColor: "#6DD0F6",
                  dayTextColor: "#2d4150",
                  textDisabledColor: "#d9e1e8",
                  dotColor: "#ff4444",
                  selectedDotColor: "#ffffff",
                  arrowColor: "#6DD0F6",
                  monthTextColor: "#2d4150",
                  indicatorColor: "#6DD0F6",
                  textDayFontFamily: "System",
                  textMonthFontFamily: "System",
                  textDayHeaderFontFamily: "System",
                  textDayFontWeight: "300",
                  textMonthFontWeight: "bold",
                  textDayHeaderFontWeight: "300",
                  textDayFontSize: 16,
                  textMonthFontSize: 18,
                  textDayHeaderFontSize: 13,
                }}
              />
            </View>

            {selectedDate ? (
              <View style={styles.selectedDateContainer}>
                <Text style={styles.selectedDateText}>
                  Odabrani datum: {formatDate(selectedDate)}
                </Text>
              </View>
            ) : null}
          </View>

          {/* Active Exams Section */}
          <View style={globalStyles.featuresContainer}>
            <Text style={globalStyles.sectionTitle}>
              📋 Aktivni prijavljeni rokovi
            </Text>

            {activeExams.length > 0 ? (
              <>
                {activeExams.map((exam) => (
                  <View key={exam.id} style={styles.examCard}>
                    <View style={styles.examHeader}>
                      <Text style={styles.examCourseName}>
                        {exam.courseName}
                      </Text>
                      <View style={styles.examStatus}>
                        <Text style={styles.examStatusText}>{exam.status}</Text>
                      </View>
                    </View>

                    <View style={styles.examDetails}>
                      <Text style={styles.examDetailText}>
                        📅 {formatDate(exam.examDate)}
                      </Text>
                      <Text style={styles.examDetailText}>
                        🕐 {exam.examTime}
                      </Text>
                      <Text style={styles.examDetailText}>
                        📍 {exam.location}
                      </Text>
                    </View>
                  </View>
                ))}
              </>
            ) : (
              <View style={styles.noExamsContainer}>
                <Text style={styles.noExamsText}>
                  Nemate aktivnih prijavljenih rokova.
                </Text>
              </View>
            )}

            {/* Button to navigate to Exam Schedule */}
            <TouchableOpacity
              style={styles.addExamButton}
              onPress={navigateToExamSchedule}
            >
              <Text style={styles.addExamButtonText}>➕ Prijavi se na rok</Text>
            </TouchableOpacity>
          </View>

          {/* Exams for Selected Date */}
          {selectedDate && getExamsForSelectedDate().length > 0 && (
            <View style={globalStyles.featuresContainer}>
              <Text style={globalStyles.sectionTitle}>
                🎯 Rokovi za {formatDate(selectedDate)}
              </Text>

              {getExamsForSelectedDate().map((exam) => (
                <View key={exam.id} style={styles.selectedDateExam}>
                  <Text style={styles.selectedDateExamTitle}>
                    {exam.courseName}
                  </Text>
                  <Text style={styles.selectedDateExamTime}>
                    🕐 {exam.examTime} | 📍 {exam.location}
                  </Text>
                </View>
              ))}
            </View>
          )}

          <View style={globalStyles.welcomeSection}>
            <Text style={globalStyles.welcomeText}>
              💡 Savjet: Označeni datumi na kalendaru (crvene točke)
              predstavljaju dane kada imate zakazane ispite.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = {
  calendarContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 15,
  },
  selectedDateContainer: {
    backgroundColor: "#f0f8ff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedDateText: {
    fontSize: 16,
    color: "#2d4150",
    fontWeight: "500",
    textAlign: "center",
  },
  examCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    borderLeftWidth: 4,
    borderLeftColor: "#6DD0F6",
  },
  examHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  examCourseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d4150",
    flex: 1,
  },
  examStatus: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  examStatusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  examDetails: {
    gap: 5,
  },
  examDetailText: {
    fontSize: 14,
    color: "#666",
  },
  noExamsContainer: {
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  noExamsText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  addExamButton: {
    backgroundColor: "#6DD0F6",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  addExamButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  selectedDateExam: {
    backgroundColor: "#fff3cd",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#ffc107",
  },
  selectedDateExamTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#856404",
    marginBottom: 4,
  },
  selectedDateExamTime: {
    fontSize: 14,
    color: "#856404",
  },
};
