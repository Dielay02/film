import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TeamCard from "/Users/VAVA/Documents/dtp-hacker/film/components/TeamCard";

const DATA = [
  {
    id: "1",
    name: "Longlegs",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQT92sCVkTzzoRMlVlY5KFW8Fvutb7-LQ4FH52XIjN8VsqwBIqO",
  },
  {
    id: "2",
    name: "Trap",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStNHj0qt0J8CXPNdGcZo4UO-3H58fYwYat4M3dneSA6s5tOtXD",
  },
  {
    id: "3",
    name: "3.0 + 1.0",
    logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTABy06vVVtq1TBoP7qsmGlyeHYalbvVPP4Fnw3BKiZ0W0EhOrS",
  },
  {
    id: "4",
    name: "The Guilty",
    logo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbbI7m3nTwWeVNCR8r1NjIFbLyj3bFf5YEVF8cjJ_ugOYr7t4U",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={DATA}
        numColumns={3}
        renderItem={({ item }) => <TeamCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});