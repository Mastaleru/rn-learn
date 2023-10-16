import {MEALS} from "../data/dummy-data";
import {Text, View, StyleSheet, FlatList} from "react-native";
import Meal from "../components/Meal";
export default function MealsOverviewScreen({route}){

    const categoryId = route.params.categoryId;

    const meals = MEALS.filter((meal=>meal.categoryIds.includes(categoryId)));

    function renderMealItem({item}){

        const mealItemProps = {
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            affordability:item.affordability,
            complexity:item.complexity
        }

        return (
           <Meal
               {...mealItemProps}
           />
        )
    }

    return <View styles={styles.container}>
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
