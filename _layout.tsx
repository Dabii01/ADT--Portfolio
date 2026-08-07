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
        options={{ title: "Home" }}
      />

      <Stack.Screen
        name="profile"
        options={{ title: "Student Registration" }}
      />

      <Stack.Screen
        name="contact"
        options={{ title: "Saved Information" }}
      />

      <Stack.Screen
        name="about"
        options={{ title: "About App" }}
      />
    </Stack>
  );
}
