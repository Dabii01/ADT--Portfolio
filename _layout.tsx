import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#2f5bea" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "700" },
        headerBackTitle: "Home",
        contentStyle: { backgroundColor: "#f4f6fb" },
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Student Portal" }}
      />

      <Stack.Screen
        name="about"
        options={{ title: "About" }}
      />

      <Stack.Screen
        name="contact"
        options={{ title: "Contact" }}
      />

      <Stack.Screen
        name="profile"
        options={{ title: "Profile" }}
      />
    </Stack>
  );
}