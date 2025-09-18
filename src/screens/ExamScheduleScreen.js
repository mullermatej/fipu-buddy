import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";
import { undergraduateCourses, electiveCourses } from "../data/courses";

export default function ExamScheduleScreen({ navigation }) {
  const [searchText, setSearchText] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allCourses, setAllCourses] = useState([]);
  const [courseSelected, setCourseSelected] = useState(false);

  // Prilikom učitavanja komponente, kreiraj popis svih kolegija
  useEffect(() => {
    const courses = [];

    // Dodaj obavezne kolegije
    Object.values(undergraduateCourses).forEach((year) => {
      Object.values(year).forEach((semester) => {
        semester.forEach((course) => {
          if (!course.name.includes("Izborni predmet")) {
            courses.push(course.name);
          }
        });
      });
    });

    // Dodaj izborne kolegije
    Object.values(electiveCourses).forEach((electiveGroup) => {
      electiveGroup.forEach((course) => {
        courses.push(course.name);
      });
    });

    // Ukloni duplikate i sortiraj
    const uniqueCourses = [...new Set(courses)].sort();
    setAllCourses(uniqueCourses);
  }, []);

  // Filtriraj kolegije na osnovu unesenog teksta
  const handleSearchChange = (text) => {
    setSearchText(text);
    setCourseSelected(false); // Reset kad korisnik tipka

    if (text.length > 0) {
      const filtered = allCourses.filter((course) =>
        course.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      // Ako nema teksta, prikaži sve kolegije
      setFilteredCourses(allCourses);
    }
    setShowSuggestions(true);
  };

  // Funkcija za fokusiranje input polja
  const handleInputFocus = () => {
    setCourseSelected(false); // Reset kad se fokusira input

    if (searchText.length > 0) {
      const filtered = allCourses.filter((course) =>
        course.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      // Prikaži sve kolegije kada se fokusira prazan input
      setFilteredCourses(allCourses);
    }
    setShowSuggestions(true);
  };

  // Odaberi kolegij iz prijedloga
  const selectCourse = (courseName) => {
    setSearchText(courseName);
    setShowSuggestions(false);
    setFilteredCourses([]);
    setCourseSelected(true); // Označava da je kolegij odabran iz liste
  };

  // Zatvori prijedloge
  const closeSuggestions = () => {
    setShowSuggestions(false);
  };

  // Dodaj rok za odabrani kolegij
  const addExamDate = () => {
    if (searchText.trim()) {
      // TODO: Implementiraj spremanje rokova u lokalnu bazu ili AsyncStorage
      alert(`Rok dodan za kolegij: ${searchText}`);
      setSearchText("");
      setShowSuggestions(false);
      setCourseSelected(false);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />

        <ScrollView
          style={globalStyles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={globalStyles.welcomeSection}>
            <Text style={globalStyles.welcomeTitle}>Ispitni rokovi</Text>
            <Text style={globalStyles.welcomeText}>
              Dodajte ispitne rokove za vaše kolegije. Kliknite na polje za
              prikaz svih kolegija ili tipkajte za pretraživanje.
            </Text>
          </View>

          <View style={globalStyles.featuresContainer}>
            <Text style={globalStyles.sectionTitle}>Dodaj novi rok:</Text>

            <View style={globalStyles.examInputContainer}>
              <Text style={globalStyles.inputLabel}>Kolegij:</Text>
              <TextInput
                style={globalStyles.courseInput}
                placeholder="Kliknite za prikaz svih kolegija ili tipkajte za pretraživanje..."
                value={searchText}
                onChangeText={handleSearchChange}
                onFocus={handleInputFocus}
              />

              {/* Prikaz prijedloga */}
              {showSuggestions && filteredCourses.length > 0 && (
                <View style={globalStyles.suggestionsContainer}>
                  <ScrollView
                    style={globalStyles.suggestionsList}
                    nestedScrollEnabled={true}
                    keyboardShouldPersistTaps="handled"
                  >
                    {filteredCourses.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={globalStyles.suggestionItem}
                        onPress={() => selectCourse(item)}
                      >
                        <Text style={globalStyles.suggestionText}>{item}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              )}

              {/* Dugme za dodavanje roka - pokaži samo kada je kolegij kliknut iz liste */}
              {searchText.length > 0 && courseSelected && (
                <TouchableOpacity
                  style={globalStyles.addExamButton}
                  onPress={addExamDate}
                >
                  <Text style={globalStyles.addExamButtonText}>
                    📅 Dodaj rok za "
                    <Text style={{ fontWeight: "bold" }}>{searchText}</Text>"
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <View style={globalStyles.infoSection}>
              <Text style={globalStyles.infoTitle}>ℹ️ Napomena:</Text>
              <Text style={globalStyles.infoText}>
                • Kliknite na polje za prikaz svih dostupnih kolegija
              </Text>
              <Text style={globalStyles.infoText}>
                • Tipkajte za pretraživanje određenog kolegija
              </Text>
              <Text style={globalStyles.infoText}>
                • Odaberite kolegij iz liste ili nastavite tipkati
              </Text>
              <Text style={globalStyles.infoText}>
                • Funkcionalnost spremanja rokova bit će dodana u budućoj
                verziji
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
