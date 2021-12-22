import React, {useState} from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route, navigation }) {
  const { name, age } = route.params;
  const [count, setCount] = useState(0);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View style={globalStyles.container}>
      <Text>
        ReviewDetails for {name} and of age {age} Screen
      </Text>
      <Text>
        The count is: {count}
      </Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            name: "aman",
            age: 100,
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: "Updated!" })}
      />
    </View>
  );
}
