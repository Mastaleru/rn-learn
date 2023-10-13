import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

export default function PrimaryButton(props) {


	return (
		<View style={[styles.buttonContainer,props.style]}>
			<Pressable style={({pressed})=>pressed && styles.pressed} onPress={props.onPress} android_ripple={{color:Colors.primary700}}>
				<Text style={styles.buttonText}>{props.children}</Text>
			</Pressable>
		</View>

	);
}

const styles = StyleSheet.create({

	buttonContainer:{
		backgroundColor:Colors.primary500,
		borderRadius:5,
		elevation:4,
		margin:5,
		overflow:"hidden"
	},

	buttonText:{
		paddingVertical:10,
		paddingHorizontal:15,
		color:"white",
		textAlign:"center"
	},
	pressed:{
		opacity:0.75
	}
})
