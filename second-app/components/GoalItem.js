import {StyleSheet, Text, View, Pressable} from "react-native";

export default function GoalItem(props) {

    return (

        <View style={styles.goalItemContainer}>
            <Pressable
                onPress={() => {
                    props.onDeleteItem(props.goal.id)
                }}
                android_ripple={{color: '#210644'}}
                style={({pressed}) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalItem}>{props.goal.content}</Text>
            </Pressable>
        </View>

    );

}

const styles = StyleSheet.create({

    goalItemContainer: {
        margin: 8,
        borderRadius: 5,
        backgroundColor: "#5e0acc"
    },

    goalItem: {
        color: "white",
        padding: 8

    },
    pressedItem: {
        opacity: 0.5
    }
});


