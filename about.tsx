import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Registration Application</Text>
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
    padding: 20,
    alignItems: "center",
  },

  icon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#eaf0ff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e2230",
    marginBottom: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  text: {
    fontSize: 15,
    lineHeight: 22,
    color: "#4a4f5e",
    textAlign: "center",
  },
});
