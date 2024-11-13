import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import "/Users/VAVA/Documents/dtp-hacker/film/global.css";

const TeamCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/team/[team]",
        params: { team: item.name },
      }}
    >
      <View className= "p-4 m-2 bg-red-400 rounded-x1">
        <Image
        className = "rounded-x1"
          source={{
            uri: item.logo,
            height: 200,
            width: 150,
          }}
        />
        <Text className="text-center font-bold text-white">
          {item.name}+ {item.id}
        </Text>
      </View>
    </Link>
  );
};

export default TeamCard;
