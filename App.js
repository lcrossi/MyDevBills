/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Button,
   FlatList,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 const App = () => {
 
   const addEntry = () => {
     alert("Abrir tela de add lançamento")
   }
 
   return (
     <View style={{padding: 10}}>
       <Text
         style={{
           fontSize: 22,
           fontWeight: "bold",
           marginTop: 10, 
           marginBottom:10
         }}>Saldo: $2.102.53</Text>
       <Button 
         onPress={addEntry} 
         title="Adicionar"></Button>
       <Text
       style={{
         fontSize: 22,
         fontWeight: "bold",
         marginTop: 10, 
         marginBottom:10
       }}>Categorias</Text>
 
       <FlatList
         data={[
           {key: "Alimentação: $ 200,00"},
           {key: "Combustível: $ 12,00"},
           {key: "Aluguel: $ 120,00"},
           {key: "Lazer: $ 250,00"},
           {key: "Outros: $ 1200,00"},
         ]}
         renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
 
       <Text
       style={{
         fontSize: 22,
         fontWeight: "bold",
         marginTop: 10, 
         marginBottom:10
       }}>Últimos lançamentos</Text>
 
       <FlatList
         data={[
           {key: "Padaria Asa Branca: $ 15,00"},
           {key: "Sonda Supermercado: $ 80,00"},
           {key: "Posto Ipiranga: $ 12,00"},
         ]}
         renderItem={({item}) => <Text>{item.key}</Text>}></FlatList>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
 
 });
 
 export default App;
 