import {TextInput, View, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import {useState} from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
export default function StartGameScreen(props){

	const [enteredNumber,setNumber] = useState("")
	const resetGame = () =>{
		setNumber("");
	}

	const startGame = () =>{
		const number = parseInt(enteredNumber);
		if(isNaN(number) || number<=0) {
			return Alert.alert("Invalid number!", "Entered number is not valid! Only numbers between 0 and 99 are allowed",[{
				text: 'Okay',
				style:'destructive',
				onPress:resetGame
			}])
		}
		props.startGame(number);
	}
	const numberHandler = (value) =>{
		setNumber(value);
	}

	return(
	<View style={styles.rootContainer}>
		<Title>Guess Number Game</Title>
		<Card>
			<TextInput style={styles.inputContainer}
					   keyboardType="number-pad"
					   placeholder="Enter number"
					   maxLength={2}
					   autoCapitalize="none"
					   autoCorrect={false}
					   value={enteredNumber}
					   onChangeText={numberHandler}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetGame}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={startGame}>Confirm</PrimaryButton>
				</View>
			</View>
		</Card>
	</View>
	);
}

const styles= StyleSheet.create({
	rootContainer:{
		flex:1,
		marginTop:100,
		alignItems:"center"
	},
	inputContainer:{
		borderBottomColor:Colors.primary500,
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
