import {Image, Text, View, StyleSheet} from "react-native";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen(props){

    return (<View style={styles.gameOverContainer}>
        <Card style={styles.imgContainer}>
            <Image source={require("../assets/images/game_over.png")}/>
        </Card>

        <Card style={{flex:2}}>
            <View style={styles.textWrapper}>
                <Text style={styles.guessedNumber}>Guessed number:
                    <Text style={styles.bold}>{props.pickedNumber}</Text>
                </Text>

                <Text style={styles.guessedNumber}>Phone made <Text style={styles.bold}>{props.roundsNumber}</Text> invalid guesses in order to find the right number:

                </Text>
            </View>
        </Card>

        <Card style={{flex:1,justifyContent: "center"}}>
            <PrimaryButton style={styles.newGame} onPress={props.startNewGame}>Start New Game</PrimaryButton>
        </Card>

    </View>)
}


const styles= StyleSheet.create({
    gameOverContainer:{
        flex:1
    },

    imgContainer:{
        flex:3,
        justifyContent:"center"

    },

    textWrapper:{
     justifyContent:"center",

    },

    guessedNumber:{
        fontSize:18,
        textAlign:"center",
        marginVertical:10
    },
    bold:{
        color:Colors.primary700,
        fontWeight:"bold",
    },
    newGame:{
        width:"80%",
        height:40,
        fontSize:16
    }
})
