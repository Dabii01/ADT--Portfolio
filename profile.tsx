import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const fields = [
  {
    icon: "person-outline",
    label: "Name",
    value: "Janah Baltazar",
  },
  {
    icon: "id-card-outline",
    label: "Student ID",
    value: "C23-0007",
  },
  {
    icon: "book-outline",
    label: "Course",
    value: "BS Information Technology",
  },
  {
    icon: "calendar-outline",
    label: "Year",
    value: "4th Year",
  },
] as const;

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>JB</Text>
      </View>

      <Text style={styles.name}>Janah Baltazar</Text>
      <Text style={styles.course}>BS Information Technology</Text>

      <View style={styles.card}>
        {fields.map((f, i) => (
          <View
            key={f.label}
            style={[
              styles.row,
              i !== 0 && styles.line,
            ]}
          >
            <Ionicons
              name={f.icon}
              size={18}
              color="#2f5bea"
              style={styles.icon}
            />

            <Text style={styles.label}>{f.label}</Text>
            <Text style={styles.text}>{f.value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
    alignItems: "center",
    padding: 20,
  },

  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#2f5bea",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e2230",
    marginTop: 12,
  },

  course: {
    fontSize: 13,
    color: "#8b91a3",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    gap: 10,
  },

  line: {
    borderTopWidth: 1,
    borderTopColor: "#eef1f7",
  },

  icon: {
    width: 24,
  },

  label: {
    width: 90,
    fontSize: 13,
    color: "#8b91a3",
    fontWeight: "500",
  },

  text: {
    flex: 1,
    fontSize: 14,
    color: "#1e2230",
    fontWeight: "600",
  },
});