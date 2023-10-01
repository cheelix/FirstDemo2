import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , Button } from 'react-native';
import { useState } from 'react';



export default function App() {
  const[firstName] =  useState('cheelix');
  const[LastName] =  useState('jung');

  return (
    <View style={styles.container}>

      <View style={styles.header}>
       

      </View>



          <View style={styles.container}>
          <text > I am {firstName} {LastName}.age is .....</text>
          <StatusBar style='auto' />



            <Image source={require('./assets/ilaclogo.png')} style={styles.image}/>
             
            
          </View>
      



      <Text>222222222222</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
header:{

  backgroundColor:'skyblue',
  padding:130,
  margin:50,

},
TextFormat:{
  fontWeight:'bold',

},
body:{
backgroundColor:"tomato",
},
image:{
  width:200,
  height:200,
}






});
