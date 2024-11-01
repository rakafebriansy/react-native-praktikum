import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons";

import TodoScreen from "../screens/todo_screen/TodoScreen";
import DoingScreen from "../screens/doing/DoingScreen";
import FinishedScreen from "../screens/finished/FinishedScreen";

const Tab = createMaterialTopTabNavigator();

export default function Navigation() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;

              if (route.name === "Todo") {
                iconName = "check-box-outline";
              } else if (route.name === "Doing") {
                iconName = "progress-clock";
              } else if (route.name === "Finished") {
                iconName = "check-box-outline";
              }

              return <Icon name={iconName} />;
            },
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

              return labelName;
            },
            tabBarIndicatorStyle: {
              borderBottomColor: "#6F8AEBFF",
            },
          })}
        />
        <Tab.Screen name="Todo" component={TodoScreen} />
        <Tab.Screen name="Doing" component={DoingScreen} />
        <Tab.Screen name="Finished" component={FinishedScreen} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
