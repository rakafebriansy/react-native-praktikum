import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  TouchableHighlight,
} from "react-native";
import InputTeks from "./components/InputTeks";
import { useRef, useState } from "react";
import Navigation from "./routes/Navigation";

export default function App() {
  return <Navigation />;
}
