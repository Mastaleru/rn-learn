import {Text, View, StyleSheet, Pressable, useWindowDimensions} from "react-native";

export default function Category(props) {

    const {height, width} = useWindowDimensions();
    let minHeight = (height > 720 && width > 640) ? 320 : 160;

    return (
        <View style={[styles.category, {minHeight: minHeight}]}>
            <Pressable
                onPress={props.onPress}
                style={({pressed}) => [pressed && styles.pressed, styles.pressable]}
                       android_ripple={styles.categoryBtn}>
                <View style={[styles.textWrapper, {backgroundColor: props.categoryColor}]}>
                    <Text style={styles.textStyle}>{props.categoryName}</Text>
                </View>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    category: {
        flex: 1,
        flexDirection: "column",
        margin: 1,
        elevation: 6

    },
    textWrapper: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    categoryBtn: {
        color: "white",
    },
    textStyle: {
        fontSize: 18
    },
    pressable: {
        flex: 1,
    },
    pressed: {
        opacity: 0.25
    }

})