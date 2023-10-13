import {View, StyleSheet} from "react-native";

export default function Card({children, style}){

    return (
        <View style={[styles.card, style]}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card:{
        padding:20,
        backgroundColor:"#EEE",
        marginVertical:25,
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
    }

})