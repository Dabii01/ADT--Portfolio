import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const menuItems = [
  {
    label: "About",
    icon: "information-circle-outline",
    href: "/about",
  },
  {
    label: "Contact",
    icon: "call-outline",
    href: "/contact",
  },
  {
    label: "Profile",
    icon: "person-circle-outline",
    href: "/profile",
  },
] as const;

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="school-outline"
          size={44}
          color="#fff"
        />

        <Text style={styles.cardTitle}>Student Portal</Text>
        <Text style={styles.cardSubtitle}>Welcome back, Janah</Text>
      </View>

      <View style={styles.menuList}>
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            asChild
          >
            <Pressable style={styles.menuButton}>
              <View style={styles.iconBox}>
                <Ionicons
                  name={item.icon}
                  size={24}
                  color="#2f5bea"
                />
              </View>

              <Text style={styles.menuText}>{item.label}</Text>

              <Ionicons
                name="chevron-forward"
                size={20}
                color="#b0b8c9"
              />
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6fb",
  },

  card: {
    backgroundColor: "#2f5bea",
    marginTop: 14,
    marginHorizontal: 16,
    paddingVertical: 40,
    paddingHorizontal: 40,
    borderRadius: 24,
    alignItems: "center",
  },

  cardTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "700",
    marginTop: 10,
  },

  cardSubtitle: {
    color: "#dce4ff",
    fontSize: 14,
    marginTop: 4,
  },

  menuList: {
    padding: 20,
  },

  menuButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 14,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#eaf0ff",
    alignItems: "center",
    justifyContent: "center",
  },

  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#1e2230",
  },
});