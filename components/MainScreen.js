import { View, StyleSheet, Button } from 'react-native'


export default function MainScreen({ navigation }){
    return(
      <View style={styles.main}>
        <Button title='Ваш счет' onPress={() => navigation.navigate('Count')} />
        <Button title='Помощь' onPress={() => navigation.navigate('Help')} />
        <Button title='Информация о пользователе' onPress={() => navigation.navigate('Profile')} />
      </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        paddingHorizontal:15,
        paddingVertical:20,
        gap:10
    }
})