import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./screens/siginin";
import SignUpScreen from "./screens/signup";
import TabNavigation from "./screens/(tabs)";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup">
        <Stack.Screen name="signup" component={SignUpScreen} options={{ 
          headerShown: false
         }}/>
        <Stack.Screen name="signin" component={SignInScreen} options={{ 
          headerShown: false
         }} />
        <Stack.Screen name="(tabs)" component={TabNavigation} options={{ 
          headerShown: false
         }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
