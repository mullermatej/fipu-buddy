import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeSection: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginTop: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#7f8c8d",
    lineHeight: 24,
  },
  featuresContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
  },
  featureCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 14,
    color: "#7f8c8d",
    lineHeight: 20,
  },
  titleRow: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  professorCard: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  professorHeader: {
    marginBottom: 10,
  },
  professorName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 3,
  },
  professorPosition: {
    fontSize: 14,
    color: "#3498db",
    fontWeight: "600",
  },
  professorInfo: {
    marginBottom: 15,
  },
  professorDetail: {
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 5,
  },
  coursesSection: {
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
    paddingTop: 15,
  },
  coursesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 8,
  },
  courseItem: {
    fontSize: 14,
    color: "#34495e",
    marginBottom: 3,
    paddingLeft: 5,
  },
});
