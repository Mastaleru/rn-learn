import {StyleSheet, ImageBackground, StatusBar, SafeAreaView} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {

    const [pickedNumber, setPickedNumber] = useState();
    const [gameIsOver, setIsGameOver] = useState(false)
    const [roundsNumber, setRoundsNumber]= useState(0);

    const pickedNumberHandler = (_pickedNumber) => {
        setPickedNumber(_pickedNumber);

    }

	const onGameOver = (_roundsNumber)=>{
		setIsGameOver(true);
        setRoundsNumber(_roundsNumber);
	}

    const startNewGame=()=>{
        setPickedNumber(undefined);
        setRoundsNumber(0);
        setIsGameOver(false);
    }


    let screen;
    if(pickedNumber && gameIsOver ){
        screen = <GameOverScreen pickedNumber={pickedNumber} startNewGame = {startNewGame} roundsNumber={roundsNumber} />
    }
    else if(pickedNumber &&!gameIsOver){
        screen = <GameScreen pickedNumber={pickedNumber} onGameOver = {onGameOver}/>
    }else {
        screen = <StartGameScreen startGame={pickedNumberHandler}/>
    }


    return (
        <>
            <StatusBar></StatusBar>
            <LinearGradient style={styles.rootScreen} colors={[Colors.primary300, Colors.primary700]}>
                <ImageBackground source={require("./assets/images/game_bg.jpg")} resizeMode={"cover"}
                                 style={styles.rootScreen} imageStyle={styles.imageStyle}>
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </>

    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    imageStyle: {
        opacity: 0.75
    }

});
