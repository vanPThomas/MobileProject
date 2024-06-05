import React from 'react';  
import { createStackNavigator } from '@react-navigation/stack';  
import App from '../../App';  
import Details from '../../src/screens/bookdetails.tsx';  
  
const Stack = createStackNavigator();  
  
function BookDetailNavigator() {  
  return (  
    <Stack.Navigator initialRouteName="App">  
      <Stack.Screen name="Details" component={Details} />  
    </Stack.Navigator>  
  );  
}  
  
export default BookDetailNavigator;  
