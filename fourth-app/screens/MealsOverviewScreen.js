import {MEALS} from "../data/dummy-data";
import {Text, View, StyleSheet, FlatList} from "react-native";
import Meal from "../components/Meal";
export default function MealsOverviewScreen({route}){

    const categoryId = route.params.categoryId;

    const meals = MEALS.filter((meal=>meal.categoryIds.includes(categoryId)));

    function renderMealItem(itemData){
        return (
           <Meal title={itemData.item.title}/>
        )
    }

    return <View styles={styles.container}>
        <Text>Meals Overview Screen {categoryId}</Text>
        <FlatList
            data={meals}
            renderItem={renderMealItem}
            keyExtractor={item=>item.id}

        />
    </View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
})