import {View, Text, StyleSheet, Alert, FlatList} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import {useState,useEffect} from "react";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import Colors from "../constants/colors";
import GuessLogItem from "../components/game/GuessLogItem";

export default function GameScreen({pickedNumber,onGameOver}) {

    function generateRandomBetween(min, max, exclude){
        const rndNum = Math.floor(Math.random()*(max-min))+min;

        if(exclude && rndNum === exclude){
            return generateRandomBetween(min, max, exclude);
        }

        return rndNum;

    }

    const[min,setMin] = useState(1);
    const [max,setMax] = useState(99);
    const [rounds, setRounds] = useState([]);
    const [generatedNumber, setGeneratedNumber] = useState();

    useEffect(()=>{

        if(generatedNumber === pickedNumber){
            return onGameOver(rounds.length);
        }

        if(generatedNumber){
            setRounds((previousState)=>[generatedNumber,...previousState])
        }

    },[generatedNumber])

    useEffect(() => {
        setGeneratedNumber(generateRandomBetween(min, max))
    }, [min,max]);

    const computeNextNumber = (direction)=>{

        if(direction === "lower"  && generatedNumber < pickedNumber || direction === "higher"  && generatedNumber > pickedNumber){
           return Alert.alert("Don't lie!", "The indication is contradictory",[{
               text:"Sorry",
               style:"cancel"
           }]);
        }

        if(direction === "lower"){
            setMax(generatedNumber);
        }
        else{
            setMin(generatedNumber+1);
        }
    }

    return (
        <View style={styles.gameContainer}>

            <Title>Opponent's Guess</Title>
            <NumberContainer number={generatedNumber}/>
            <Card>
                <Text style={styles.instructions}>Higher or lower?</Text>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={computeNextNumber.bind(this,"lower")}>
                        <Text>Lower</Text>
                    </PrimaryButton>
                    <PrimaryButton onPress={computeNextNumber.bind(this,"higher")}>
                        <Text>Higher</Text>
                    </PrimaryButton>
                </View>
            </Card>

            <View style={styles.listContainer}>
                <FlatList
                    data={rounds}
                    renderItem={(itemData)=>{
                        return <GuessLogItem guess={itemData.item} roundNumber={rounds.length - itemData.index}/>
                    }}
                    keyExtractor={(item)=>item}
                />
            </View>

        </View>

    );
}

const styles = StyleSheet.create({

    listContainer:{
        flex:1
    },

    gameContainer:{
      flex:1,
      padding:12
    },

    buttonsContainer: {
        flexDirection: "row",
        backgroundColor:"#eeeeee55",
        padding:12,
        justifyContent:"space-evenly"
    },
    instructions:{
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold",
        margin:12,
        color:Colors.primary500,

    }

})