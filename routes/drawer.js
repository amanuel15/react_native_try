import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// stacks
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import AboutScreen from "../screens/about";
import HomeScreen from "../screens/home";

// drawer navigation options
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    // <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={HomeStack} options={{title: 'home'}}/>
        <Drawer.Screen name="AboutScreen" component={AboutScreen} />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}
