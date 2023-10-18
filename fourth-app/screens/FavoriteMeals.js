import {FlatList, Text, StyleSheet, View, Button} from "react-native";
import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import Meal from "../components/Meal";
import {useNavigation} from "@react-navigation/native";

export default function FavoriteMeals() {

    const FavoriteCtx = useContext(FavoritesContext);
    const navigation = useNavigation();

    const favoriteMeals = MEALS.filter(meal => FavoriteCtx.ids.includes(meal.id));


    function visitMealDetailsScreen(mealId) {
        navigation.navigate("MealDetails", {
            mealId: mealId
        })

    }

    function renderMealItem({item}) {

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity,
            onPress: () => {
                visitMealDetailsScreen(item.id)
            }
        }

        return (
            <Meal
                {...mealItemProps}
            />
        )
    }

    function goToLanding() {
        navigation.goBack();
    }

    return <View style={styles.container}>
        {favoriteMeals.length ?
            <FlatList
                data={favoriteMeals}
                renderItem={renderMealItem}
                keyExtractor={item => item.id}

            /> : <><Text style={styles.noFavoritesMeal}>
                No favorite meals added
            </Text>
                <Button onPress={goToLanding} title={"Discover your favorite meal"}> </Button>
            </>

        }
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    noFavoritesMeal: {
        marginTop: "40%",
        padding: 20,
        fontWeight: "600",
        fontStyle: "italic",
        textAlign: "center",
        color: "white"

    }
})