import {StyleSheet, Text, View} from "react-native";

export default function Title(props) {
    return (
        <View>
            <Text style={styles.title}>{props.children}</Text>
        </View>)
}

const styles = StyleSheet.create({

    title:{
        fontSize:22,
        color:"white",
        textAlign:"center",
        margin:8,
        marginBottom:0
    }

})