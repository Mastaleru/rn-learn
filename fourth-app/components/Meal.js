import {Text, View, StyleSheet, Image, Pressable, Platform} from "react-native";

export default function Meal({title, imageUrl, duration, complexity, affordability}) {

	return <View style={styles.mealItem}>
		<View style={styles.innerContainer}>
			<Pressable android_ripple={styles.pressable} style={({pressed}) =>
				[pressed && styles.buttonPressed]
			}>
				<View>
					<Image style={styles.image} source={{uri: imageUrl}}/>
					<Text style={styles.title}>{title}</Text>
				</View>

				<View style={styles.details}>
					<Text style={styles.detailItem}>{duration} m</Text>
					<Text style={styles.detailItem}>{complexity.toUpperCase()} </Text>
					<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
				</View>
			</Pressable>
		</View>
	</View>

}

const styles = StyleSheet.create({

	innerContainer: {
		borderRadius: 5,
		overflow: "hidden"
	},
	mealItem: {
		margin: 16,
		borderRadius: 5,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		backgroundColor: "white",
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.25,
		textShadowOffset: {width: 0, height: 2},
		shadowRadius: 8

	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		padding: 8,
		fontSize: 18,
		textAlign: "center"
	},

	details: {
		flexDirection: "row",
		alignItems: "center",
		padding: 8,
		justifyContent: "center"
	},
	detailItem: {
		marginHorizontal: 5,
		fontSize: 13
	},
	pressable: {
		color: "#DDD"
	},
	buttonPressed: {
		opacity: 0.35
	}
})
