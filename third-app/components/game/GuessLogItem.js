import {StyleSheet, View,Text} from "react-native";
import Colors from "../../constants/colors";

export default function GuessLogItem({roundNumber, guess}){


    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber} </Text>
            <Text> Opponent's Guess: {guess}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    listItem:{
        backgroundColor:"white",
        borderColor:Colors.primary300,
        borderWidth:1,
        borderRadius:10,
        padding:16,
        marginHorizontal:16,
        marginVertical:8,
        flexDirection:"row",
        justifyContent:"center",

        elevation:4,
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:0
        },
        shadowOpacity:0.25,
        shadowRadius:3
    }
})