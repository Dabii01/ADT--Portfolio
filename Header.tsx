import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#2563EB",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 6,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
});
