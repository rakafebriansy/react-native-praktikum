import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "react-native";
import Icon from "react-native-vector-icons";

import TodoScreen from "../todo_screen/TodoScreen";
import DoingScreen from "../doing/DoingScreen";
import FinishedScreen from "../finished/FinishedScreen";

const Tab = createMaterialTopTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ color }) => {
        // let iconName;

        // if (route.name === "Todo") {
        //   iconName = "check-box-outline";
        // } else if (route.name === "Doing") {
        //   iconName = "progress-clock";
        // } else if (route.name === "Finished") {
        //   iconName = "check-box-outline";
        // }

        //   return <Icon name={'ios-information-circle'} />;
        // },
        tabBarShowIcon: true,
        tabBarInactiveTintColor: "#BCC8F4FF",
        tabBarActiveTintColor: "#2852EBFF",
        tabBarLabel: ({ label }) => {
          let labelName;

          if (route.name === "Todo") {
            labelName = "Akan dikerjakan";
          } else if (route.name === "Doing") {
            labelName = "Sedang dikerjakan";
          } else if (route.name === "Finished") {
            labelName = "Selesai";
          }

          return <Text>{labelName}</Text>;
        },
        tabBarIndicatorStyle: {
          borderBottomColor: "#6F8AEBFF",
        },
      })}
    >
      <Tab.Screen name="Todo" component={TodoScreen} />
      <Tab.Screen name="Doing" component={DoingScreen} />
      <Tab.Screen name="Finished" component={FinishedScreen} />
    </Tab.Navigator>
  );
}
