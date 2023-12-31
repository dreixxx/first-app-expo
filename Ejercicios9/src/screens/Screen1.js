import { useContext, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import ScreensContext from "./ScreensContext";
import { getData } from "../services/services";

const Screen1 = (props) => {
    const { setData } = useContext(ScreensContext);
    const [word, setWord] = useState(null);

    const fetchData = async () => {
        try {
            const result = await getData(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    const showResult = () => {
        fetchData();
        props.navigation.navigate("Screen2");
    };
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <TextInput
                style={styles.inputs}
                onChangeText={(newWord) => setWord(newWord)}
            ></TextInput>
            <Button
                color={"orange"}
                title="BUSCAR"
                onPress={() => showResult()}
            ></Button>
        </View>
    );
};
const styles = StyleSheet.create({
    inputs: {
        padding: 7,
    },
});
export default Screen1;
