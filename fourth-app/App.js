import {StyleSheet, Text, StatusBar, SafeAreaView} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MealsOverviewScreen from "./screens/MealsOverviewScreen";


const Stack = createNativeStackNavigator();


export default function App() {
	return (

		<SafeAreaView style={{flex: 1}}>
			<StatusBar
				barStyle="light-content"
			/>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="MealsCategories" screenOptions={
					{
						headerStyle: {
							backgroundColor: "#351401"
						},
						headerTintColor: "#FFF",
						contentStyle: {
							backgroundColor: "#3f2f25"
						}
					}
				}>
					<Stack.Screen name={"MealsCategories"} component={CategoriesScreen} options={{
						title: "All Categories",

					}}/>
					<Stack.Screen name={"MealsOverview"} component={MealsOverviewScreen}/>
				</Stack.Navigator>
			</NavigationContainer>

		</SafeAreaView>

	);
}
