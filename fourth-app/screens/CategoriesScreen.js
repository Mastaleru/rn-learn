import {CATEGORIES} from "../data/dummy-data";
import Category from "../components/Category";
import {FlatList, StyleSheet, View,useWindowDimensions} from "react-native";

export default function CategoriesScreen({navigation}) {

    const categoryRenderer = (itemData)  => {
        return <Category
            onPress = {()=>{
                navigation.navigate("MealsOverview",{
                    categoryId:itemData.item.id
                })
            }}
            categoryColor={itemData.item.color}
            categoryName={itemData.item.title}/>
    }


    const {width} = useWindowDimensions();
    let numCols;
    if(width>=800){
        numCols =  Math.floor(width/300);
    }
    else{
        numCols = 2;
    }

    const categories = [...CATEGORIES];

    return (
        <View style={styles.categories}>
            <FlatList key={numCols} data={categories} renderItem={categoryRenderer} keyExtractor={(itemData) => itemData.id} numColumns={numCols}/>
        </View>
    )
}

const styles = StyleSheet.create({
    categories:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    }
});
