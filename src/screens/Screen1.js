import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ScreenStack1 from "./ScreenStack1";
import ScreenStack2 from "./ScreenStack2";
import ScreenStack3 from "./ScreenStack3";

const Stack = createStackNavigator();
const Screen1 = () => {
    return (
        <Stack.Navigator options="false">
            <Stack.Screen name="ScreenStack1" component={ScreenStack1} />
            <Stack.Screen name="ScreenStack2" component={ScreenStack2} />
            <Stack.Screen name="ScreenStack3" component={ScreenStack3} />
        </Stack.Navigator>
    );
};
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: "center",
        padding: 8,
    },
    title: {
        margin: 24,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});
export default Screen1;
