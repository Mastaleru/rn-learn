import {useLayoutEffect, useContext} from "react";
import {View, Text, Image, StyleSheet, ScrollView} from "react-native";
import {MEALS} from "../data/dummy-data";
import List from "../components/List";
import Favorite from "../components/Favorite";
import {FavoritesContext} from "../store/context/favorites-context";

export default function MealDetailsScreen({route, navigation}) {

    const favoriteMealsContext = useContext(FavoritesContext);
    const mealId = route.params.mealId;
    const meal = MEALS.find(meal => meal.id === mealId);
    const isFavorited = favoriteMealsContext.isFavorite(mealId);

    const toggleFavorite = () =>{
        if(favoriteMealsContext.isFavorite(mealId)){
            favoriteMealsContext.removeFavorite(mealId);
        }
        else{
            favoriteMealsContext.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal.title,
            headerRight:()=><Favorite isFavorited={isFavorited} onPress={toggleFavorite}/>
        });
    }, [navigation, isFavorited])


    return (
        <View style={styles.container}>
            <ScrollView>
                <Image style={styles.image} source={{uri: meal.imageUrl}}/>
                <View style={styles.innerWrapper}>
                    <Text style={styles.title}>{meal.title}</Text>
                    <View style={styles.shortDetails}>
                        <Text style={styles.shortDetailsText}>
                            {meal.duration} minutes
                        </Text>
                        <Text style={styles.shortDetailsText}> | </Text>
                        <Text style={styles.shortDetailsText}>
                            {meal.complexity.toLowerCase()}
                        </Text>
                        <Text style={styles.shortDetailsText}> | </Text>
                        <Text style={styles.shortDetailsText}>
                            {meal.affordability.toLowerCase()}
                        </Text>
                    </View>

                    <View style={styles.mealPreferences}>
                        {meal.isGlutenFree && <Image style={styles.mealPreferencesImage}
                                                     source={require("../assets/meal-icons/gluten-free.png")}/>}
                        {meal.isLactoseFree && <Image style={styles.mealPreferencesImage}
                                                      source={require("../assets/meal-icons/lactose-free.png")}/>}
                        {meal.isVegetarian && <Image style={styles.mealPreferencesImage}
                                                     source={require("../assets/meal-icons/vegetarian.png")}/>}
                        {meal.isVegan && <Image style={styles.mealPreferencesImage}
                                                source={require("../assets/meal-icons/vegan.png")}/>}
                    </View>

                    <View style={styles.moreDetailsWrapper}>
                        <Text style={styles.subtitle}>Ingredients</Text>
                        <List data={meal.ingredients}></List>
                    </View>

                    <View style={styles.moreDetailsWrapper}>
                        <Text style={styles.subtitle}>Steps</Text>
                        <List data={meal.steps}></List>
                    </View>

                </View>
            </ScrollView>
        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3"
    },
    image: {
        width: "100%",
        height: 200
    },
    innerWrapper: {
        margin: 24,
        flex: 1
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    shortDetails: {
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    shortDetailsText: {
        fontSize: 16,
        color: "#9E9E9E"
    },
    mealPreferences: {
        flexDirection: "row",
        width: "100%",
        marginLeft: -8
    },
    mealPreferencesImage: {
        width: 48,
        height: 48,
        margin: 8
    },
    moreDetailsWrapper: {},
    subtitle: {
        fontSize: 18,
        marginVertical: 16,
        marginBottom:8,
        paddingLeft:16
    }
})