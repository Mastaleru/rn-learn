import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";
import {useState} from "react";

export default function GoalInput(props) {

    const [goal, setGoal] = useState("");
    const setGoalText = (text) => {
        setGoal(text);
    }

    const submitGoal = ()=>{
        let goalObj = {
            content: goal,
            id: Math.random().toString()
        }
        setGoalText("");
        props.onSubmitGoal(goalObj);
    }

    console.log("here")
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")} width={256} height={245}/>
                <TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={setGoalText}
                               value={goal}>
                </TextInput>

                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add goal" onPress={submitGoal}></Button>
                    </View>
                    <View style={styles.button}>
                    <Button title="Cancel" onPress={props.onModalClose} color="#989898"></Button>
                    </View>
                </View>
            </View>
        </Modal>)
}

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding:16,
        alignItems: "center",
        backgroundColor:"#eee"
    },

    textInput: {
        borderWidth: 1,
        borderColor: "#CCC",
        width: "100%",
        padding: 16,
        borderRadius:5
    },
    buttonContainer:{
        flexDirection:"row",
        marginTop:16
    },
    button:{
        width:"30%",
        marginHorizontal:8
    },
    image:{
        margin:20,
        width:83,
        height:67
    }
});
