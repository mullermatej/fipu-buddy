import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image } from "react-native";

// Import screens
import HomeScreen from "./src/screens/HomeScreen";
import CoursesMenuScreen from "./src/screens/CoursesMenuScreen";
import CoursesListScreen from "./src/screens/CoursesListScreen";
import ProfessorsScreen from "./src/screens/ProfessorsScreen";
import ExamScheduleScreen from "./src/screens/ExamScheduleScreen";
import TemplateDocumentsScreen from "./src/screens/TemplateDocumentsScreen";
import StudentProfileScreen from "./src/screens/StudentProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  // Function to create profile icon for headers
  const ProfileIcon = ({ navigation }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("StudentProfile")}
      style={{
        marginRight: 15,
        padding: 8,
        borderRadius: 20,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      }}
    >
      <Image
        source={require("./assets/user.png")}
        style={{
          width: 24,
          height: 24,
          tintColor: "#fff",
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );

  // Common header options with profile icon
  const getHeaderOptions =
    (title) =>
    ({ navigation }) => ({
      title: title,
      headerRight: () => <ProfileIcon navigation={navigation} />,
    });
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6DD0F6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={getHeaderOptions("FIPU Buddy")}
        />
        <Stack.Screen
          name="CoursesMenu"
          component={CoursesMenuScreen}
          options={getHeaderOptions("Odaberi godinu")}
        />
        <Stack.Screen
          name="CoursesList"
          component={CoursesListScreen}
          options={({ route, navigation }) => ({
            title: `${route.params.year}`,
            headerRight: () => <ProfileIcon navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Professors"
          component={ProfessorsScreen}
          options={getHeaderOptions("Profesori")}
        />
        <Stack.Screen
          name="ExamSchedule"
          component={ExamScheduleScreen}
          options={getHeaderOptions("Ispitni rokovi")}
        />
        <Stack.Screen
          name="TemplateDocuments"
          component={TemplateDocumentsScreen}
          options={getHeaderOptions("Template dokumenti")}
        />
        <Stack.Screen
          name="StudentProfile"
          component={StudentProfileScreen}
          options={{ title: "Moj profil" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
