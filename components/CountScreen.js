import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CountScreen(){
    const [value, setValue] = useState('')
    const [count, setCount] = useState(0)

    useEffect(()=>{
        (async()=>{
            const count = await AsyncStorage.getItem('count')
            const countParse = JSON.parse(count)
            if(countParse){
                setCount(countParse)
            }else{
                setCount(0)
            }
        })()
    })
  
    const plusCount = async () => {
      if(value){
        setCount(count + +value)
        await AsyncStorage.setItem('count', JSON.stringify(count + +value))
        setValue('')
      }
    }
  
    const minusCount = async () => {
      if(value){
        setCount(count - +value)
        await AsyncStorage.setItem('count', JSON.stringify(count - +value))
        setValue('')
      }
    }
  
    return(
      <View style={{marginHorizontal:12, marginVertical:15}}>
        <Text style={styles.text}>Баланс: {count}</Text>
        <TextInput style={styles.input} inputMode='numeric' placeholder='Наберите сумму' value={value} onChangeText={(num) => setValue(num)} />
        <Button title='Добавить' onPress={plusCount} />
        <Button title='Снять' onPress={minusCount} />
      </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:22
    },
    input:{
        fontSize:20,
        marginVertical:10
    }
})