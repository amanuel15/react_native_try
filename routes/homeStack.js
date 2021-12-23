import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { Button } from "react-native";

const Stack = createNativeStackNavigator();

export default function mainNavigator() {
  return (
    // <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'papayawhip' }, headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={ReviewDetails}
          options={{
            title: "New details",
            // headerStyle: {
            //   backgroundColor: "#f4511e",
            // },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            // headerRight: () => (
            //   <Button
            //     title="Info"
            //     color="#aaa"
            //   />
            // ),
          }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
