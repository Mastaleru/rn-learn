import {FlatList, StyleSheet, View, Button, StatusBar} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";


export default function App() {

    const [goals, setGoals] = useState([])
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const onSubmitGoal = (goal) => {
        setGoals((currentGoals) => [...currentGoals, goal]);
        setModalIsVisible(false);
    }

    const renderGoal = (itemData) => {
        const goal = itemData.item;
        return <GoalItem goal={goal} onDeleteItem = {deleteGoalHandler}/>
    }

    const deleteGoalHandler = (goalId) => {
        setGoals((goals) => {
            return goals.filter(goal => goal.id !== goalId)
        })
    }

    const startAddGoalHandler =()=>{
        setModalIsVisible(true);
    }

    return (
        <>
        <StatusBar barStyle={"light-content"}></StatusBar>
        <View style={styles.appContainer}>
            <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
            <GoalInput onSubmitGoal = {onSubmitGoal} visible={modalIsVisible} onModalClose={()=> setModalIsVisible(false)}></GoalInput>

            <View style={styles.goalsContainer}>
                <FlatList data={goals} renderItem={renderGoal} keyExtractor={(item, index)=>{
                    return item.id
                }}/>
            </View>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingLeft: 16,
        paddingRight: 16
    },

    goalsContainer: {
        flex: 6,
        marginTop:8
    }

});
