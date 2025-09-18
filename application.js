import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import screens
import HomeScreen from "./src/screens/HomeScreen";
import CoursesMenuScreen from "./src/screens/CoursesMenuScreen";
import CoursesListScreen from "./src/screens/CoursesListScreen";
import ProfessorsScreen from "./src/screens/ProfessorsScreen";

const Stack = createStackNavigator();

export default function App() {
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
          options={{ title: "FIPU Buddy" }}
        />
        <Stack.Screen
          name="CoursesMenu"
          component={CoursesMenuScreen}
          options={{ title: "Odaberi godinu" }}
        />
        <Stack.Screen
          name="CoursesList"
          component={CoursesListScreen}
          options={({ route }) => ({ title: `${route.params.year}` })}
        />
        <Stack.Screen
          name="Professors"
          component={ProfessorsScreen}
          options={{ title: "Profesori" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
