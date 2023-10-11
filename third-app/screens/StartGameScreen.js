import {TextInput, View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen(){

	const resetGame = () =>{

	}

	const startGame = () =>{

	}

	return <View style={styles.mainContainer}>
		<TextInput style={styles.inputContainer} keyboardType="number-pad" placeholder="Enter number" maxLength={2} autoCapitalize="none" autoCorrect={false}/>
		<View style={styles.buttonsContainer}>
			<View style={styles.buttonContainer}>
				<PrimaryButton onPress={resetGame}>Reset</PrimaryButton>
			</View>
			<View style={styles.buttonContainer}>
				<PrimaryButton onPress={startGame}>Confirm</PrimaryButton>
			</View>
		</View>
	</View>
}

const styles= StyleSheet.create({
	mainContainer:{
		padding:20,
		backgroundColor:"#EEE",
		marginTop:50,
		marginHorizontal:20,
		elevation:5,
		borderRadius:10,
		shadowColor:"black",
		shadowOffset: {
			width: 0, height: 2
		},
		shadowRadius:6,
		shadowOpacity:0.25,
		alignItems:"center"
	},
	inputContainer:{
		borderBottomColor:"#a10452",
		borderBottomWidth:3,
		width:"60%",
		padding:6,
		height:50,
		fontSize:24,
		marginVertical:8,
		textAlign:"center"

	},
	buttonsContainer:{
		flexDirection:"row"
	},
	buttonContainer:{
		flex:1
	}
})
