import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../styles/globalStyles";

export default function TemplateDocumentsScreen({ navigation }) {
  const handleTemplatePress = (templateName) => {
    Alert.alert(
      "Template dokument",
      `Otvaranje template dokumenta: ${templateName}\n\nOva funkcionalnost će biti dostupna u budućoj verziji aplikacije.`,
      [{ text: "OK", style: "default" }]
    );
  };

  const templates = [
    {
      id: 1,
      name: "Završni rad - Template",
      description: "Predložak za pisanje završnog rada (preddiplomski studij)",
      icon: "🎓",
      fileName: "zavrsni_rad_template.docx",
    },
    {
      id: 2,
      name: "Diplomski rad - Template",
      description: "Predložak za pisanje diplomskog rada (diplomski studij)",
      icon: "📜",
      fileName: "diplomski_rad_template.docx",
    },
    {
      id: 3,
      name: "Seminarski rad - Template",
      description: "Predložak za pisanje seminarskih radova",
      icon: "📝",
      fileName: "seminarski_rad_template.docx",
    },
    {
      id: 4,
      name: "Projektni rad - Template",
      description: "Predložak za projektne zadatke i grupne radove",
      icon: "💼",
      fileName: "projektni_rad_template.docx",
    },
    {
      id: 5,
      name: "Izvještaj o praksi - Template",
      description: "Predložak za izvještaj o studentskoj praksi",
      icon: "🏢",
      fileName: "izvjestaj_praksa_template.docx",
    },
    {
      id: 6,
      name: "Poster prezentacija - Template",
      description: "Predložak za akademske poster prezentacije",
      icon: "🖼️",
      fileName: "poster_prezentacija_template.pptx",
    },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="auto" />

        <ScrollView
          style={globalStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <View style={globalStyles.welcomeSection}>
            <Text style={globalStyles.welcomeTitle}>Template dokumenti</Text>
            <Text style={globalStyles.welcomeText}>
              Gotovi predlošci za akademske radove s pravilnim formatiranjem i
              strukturom.
            </Text>
          </View>

          <View style={globalStyles.featuresContainer}>
            <Text style={globalStyles.sectionTitle}>Dostupni predlošci:</Text>

            {templates.map((template) => (
              <TouchableOpacity
                key={template.id}
                style={globalStyles.featureCard}
                onPress={() => handleTemplatePress(template.name)}
              >
                <Text style={globalStyles.featureIcon}>{template.icon}</Text>
                <View style={globalStyles.featureContent}>
                  <Text style={globalStyles.featureTitle}>{template.name}</Text>
                  <Text style={globalStyles.featureDescription}>
                    {template.description}
                  </Text>
                  <Text
                    style={[
                      globalStyles.featureDescription,
                      { fontStyle: "italic", fontSize: 12, marginTop: 4 },
                    ]}
                  >
                    📁 {template.fileName}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={globalStyles.welcomeSection}>
            <Text style={globalStyles.welcomeText}>
              💡 Savjet: Predlošci su formatirani prema akademskim standardima i
              uključuju sve potrebne sekcije za uspješan rad.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
