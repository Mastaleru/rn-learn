import {StyleSheet, ImageBackground, StatusBar} from 'react-native';
import StartGameScreen from "./screens/StartGameScreen";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
	return (
		<>
			<StatusBar></StatusBar>
			<LinearGradient style={styles.rootScreen} colors={["#d2086c","#a10452"]}>
				<ImageBackground source={require("./assets/images/game_bg.jpg")} resizeMode={"cover"} style={styles.rootScreen} imageStyle={styles.imageStyle}>
					<StartGameScreen/>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	imageStyle:{
			opacity:0.75
	}

});
