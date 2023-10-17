import {Text, View,StyleSheet} from "react-native";

export default function List({data}) {
    return data.map((item, index) =>
        <View style={styles.lisItem} key={index}>
            <Text style={styles.circle}> ⃘   </Text>
            <Text>{item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    lisItem:{
        borderBottomColor:"#9fc96c",
        borderBottomWidth:1,
        padding:4,
        paddingLeft:0,
        flexDirection:"row",
        alignItems:"center"

    },
    circle:{
        color:"#9fc96c"

    }
})