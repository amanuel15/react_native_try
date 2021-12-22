import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// stacks
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

// drawer navigation options
const Drawer = createDrawerNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" component={HomeStack} options={{title: 'home'}}/>
        <Drawer.Screen name="AboutScreen" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
