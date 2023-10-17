import {StatusBar, SafeAreaView} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteMeals from "./screens/FavoriteMeals";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const screenOptions = {
    headerStyle: {
        backgroundColor: "#351401"
    },
    headerTintColor: "#FFF",
    contentStyle: {
        backgroundColor: "#3f2f25"
    },
    sceneContainerStyle: {
        backgroundColor: "#3f2f25"
    },
    drawerContentStyle: {
        backgroundColor: "#351401"
    },
    drawerInactiveTintColor: "white",
    drawerActiveTintColor: "#9f8484",
    drawerActiveBackgroundColor: "#e5d7d7"
}

function DrawerNavigator() {
    return (<Drawer.Navigator
            screenOptions={screenOptions}
        >
            <Drawer.Screen
                name={"MealsCategories"}
                component={CategoriesScreen}
                options={
                    {
                        title: "All Categories",
                        drawerIcon: ({color, size}) => {
                            return <Ionicons name={"list"} color={color} size={size}/>
                        }
                    }
                }
            />
            <Drawer.Screen
                name={"FavoriteMeals"}
                component={FavoriteMeals}
                options={{
                    title: "Favorite Meals",
                    drawerIcon: ({color, size}) => {
                        return <Ionicons name={"heart"} color={color} size={size}/>
                    }
                }}
            />
        </Drawer.Navigator>
    )
}

export default function App() {
    return (

        <SafeAreaView style={{flex: 1}}>
            <StatusBar
                barStyle="light-content"
            />
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions}>
                    <Stack.Screen name={"Landing"} component={DrawerNavigator} options={{
                        headerShown: false
                    }}/>
                    <Stack.Screen name={"MealsOverview"} component={MealsOverviewScreen}/>
                    <Stack.Screen name={"MealDetails"} component={MealDetailsScreen}/>
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>

    );
}
