import {CATEGORIES, MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";
import {View, StyleSheet, FlatList} from "react-native";
import Meal from "../components/Meal";
export default function MealsOverviewScreen({route, navigation}){

    const categoryId = route.params.categoryId;
    const meals = MEALS.filter((meal=>meal.categoryIds.includes(categoryId)));

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find(cat => cat.id === categoryId).title;
        navigation.setOptions({
            title:categoryTitle
        })
    },[categoryId, navigation])


    function visitMealDetailsScreen(mealId){
        navigation.navigate("MealDetails",{
            mealId:mealId
        })

    }
    function renderMealItem({item}){

        const mealItemProps = {
            title:item.title,
            imageUrl:item.imageUrl,
            duration:item.duration,
            affordability:item.affordability,
            complexity:item.complexity,
            onPress: ()=>{
                visitMealDetailsScreen(item.id)
            }
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
