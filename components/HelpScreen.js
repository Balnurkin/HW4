import { View, Text, StyleSheet } from 'react-native'

export default function HelpScreen(){
  return(
    <View style={styles.text}>
      <Text style={styles.lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in hendrerit sem. 
        Maecenas imperdiet quam non arcu dignissim scelerisque. Aenean at ullamcorper mi, non ornare lectus. 
        Curabitur eget nulla aliquet, mattis est non, consectetur massa. Proin molestie vel felis id euismod. 
        Vestibulum sed est congue, finibus nunc eget, congue orci. In non urna id enim blandit eleifend in eget massa.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        backgroundColor:'olive',
        paddingHorizontal:12,
        paddingVertical:20
    },
    lorem:{
        fontSize:20
    }
})