import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Prayer, prayerData } from "../data/prayers";

const prayers: Prayer[] = prayerData;

export default function Index() {
  return (
    <View style={styles.container}>
      {prayers.map((prayer, index) => (
        <>
          <Text>{prayer.title}</Text>
          <Text>{prayer.text}</Text>
        </>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
