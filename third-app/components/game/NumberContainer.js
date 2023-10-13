import {Text, View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
import Card from "../ui/Card";
export default function NumberContainer({number}) {

    return (
        <Card>
            <View style={styles.container}>
                <Text style={styles.text}>{number}</Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        borderWidth:4,
        padding:12,
        borderColor:Colors.primary300,
        borderRadius:5,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:28,
        color:Colors.primary500,

    }
})