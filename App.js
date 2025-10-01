import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MagiasList from "./src/screens/MagiasList";
import CreateMagia from "./src/screens/Magics/CreateScreen";

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={MagiasList} />
        <Stack.Screen name="Create" component={CreateMagia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}