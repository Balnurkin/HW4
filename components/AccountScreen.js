import { View, StyleSheet, TextInput } from 'react-native'
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AccountScreen(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [num, setNum] = useState('')
    const [addres, setAddres] = useState('')

    useEffect(()=>{
        (async () => {
            const username = await AsyncStorage.getItem('username')
            const usernameParse = JSON.parse(username)
            if(usernameParse){
                setUsername(usernameParse)
            }else{
                setUsername('')
            }

            const email = await AsyncStorage.getItem('email')
            const emailParse = JSON.parse(email)
            if(emailParse){
                setEmail(emailParse)
            }else{
                setEmail('')
            }

            const num = await AsyncStorage.getItem('num')
            const numParse = JSON.parse(num)
            if(numParse){
                setNum(numParse)
            }else{
                setNum('')
            }

            const addres = await AsyncStorage.getItem('addres')
            const addresParse = JSON.parse(addres)
            if(addresParse){
                setAddres(addresParse)
            }else{
                setAddres('')
            }
        })()
    }, [])

    const changeUsername = async (text) => {
        setUsername(text)
        await AsyncStorage.setItem('username', JSON.stringify(text))
    }

    const changeEmail = async (text) => {
        setEmail(text)
        await AsyncStorage.setItem('email', JSON.stringify(text))
    }

    const changeNum = async (text) => {
        setNum(text)
        await AsyncStorage.setItem('num', JSON.stringify(text))
    }

    const changeAddres = async (text) => {
        setAddres(text)
        await AsyncStorage.setItem('addres', JSON.stringify(text))
    }

    return(
      <View style={{paddingHorizontal:12, paddingVertical:15}}>
        <TextInput style={styles.input} placeholder='Имя' value={username} onChangeText={(text) => changeUsername(text)} />
        <TextInput style={styles.input} placeholder='Email' value={email} onChangeText={(text) => changeEmail(text)} />
        <TextInput style={styles.input} placeholder='Телефон' value={num} onChangeText={(text) => changeNum(text)} />
        <TextInput style={styles.input} placeholder='Адрес' value={addres} onChangeText={(text) => changeAddres(text)} />
      </View>
    )
}

const styles = StyleSheet.create({
    input:{
        fontSize:20,
        borderWidth:1,
        marginBottom:10,
        height:40
    }
})