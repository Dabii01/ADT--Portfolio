import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const rows = [
  {
    icon: "mail-outline",
    label: "Email",
    value: "janahalibangbang.baltazar@my.smciligan.edu.ph",
  },
  {
    icon: "call-outline",
    label: "Phone",
    value: "09617249628",
  },
  {
    icon: "location-outline",
    label: "Address",
    value: "Suarez, Iligan City",
  },
] as const;

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Information</Text>

      <View style={styles.card}>
        {rows.map((row, i) => (
          <View
            key={row.label}
            style={[
              styles.row,
              i !== 0 && styles.line,
            ]}
          >
            <View style={styles.iconBox}>
              <Ionicons
                name={row.icon}
                size={20}
                color="#2f5bea"
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.label}>{row.label}</Text>
              <Text style={styles.text}>{row.value}</Text>
            </View>
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
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e2230",
    marginVertical: 16,
    textAlign: "center",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    paddingVertical: 16,
  },

  line: {
    borderTopWidth: 1,
    borderTopColor: "#eef1f7",
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#eaf0ff",
    alignItems: "center",
    justifyContent: "center",
  },

  info: {
    flex: 1,
  },

  label: {
    fontSize: 12,
    color: "#8b91a3",
    marginBottom: 2,
  },

  text: {
    fontSize: 15,
    color: "#1e2230",
    fontWeight: "500",
  },
});