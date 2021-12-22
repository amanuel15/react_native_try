import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import About from "../screens/about";

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
