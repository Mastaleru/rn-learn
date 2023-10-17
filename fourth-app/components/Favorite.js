import {Image, Pressable, View, StyleSheet, Platform} from "react-native";

export default function Favorite({isFavorited,onPress}){


    return (<View style={styles.container}>
        <Pressable android_ripple={{color:"white"}} onPress={onPress} style={({pressed})=>{
            return pressed && Platform.OS === "ios" && styles.ios
        }}>
            <Image style={styles.image}
                   source={isFavorited ? require("../assets/favorited.png") : require("../assets/favorite.png")}
            />
        </Pressable>
    </View>);
}


const styles = StyleSheet.create(
    {
        container:{
            borderRadius:24,
            overflow:"hidden",
        },
        image:{
            width:40,
            height:40
        },
        ios:{
            opacity:0.25
        }
    }
)