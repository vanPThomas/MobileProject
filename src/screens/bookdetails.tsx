import React from 'react';  
import {View, Text, StyleSheet, Image, Button, TouchableOpacity, Linking} from 'react-native';  
import { useRoute } from '@react-navigation/native';  
import { ScrollView } from 'react-native-gesture-handler';  
import { useDispatch } from 'react-redux';  
import { addBook } from '../store/basket/slice';
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
  
const BookDetailScreen = ({}) => {  
  const route = useRoute();    
  const book = route.params.book;  
  const dispatch = useDispatch();  

  const openURL = (url) => {  
    Linking.canOpenURL(url).then((supported) => {  
      if (supported) {  
        Linking.openURL(url);  
      } else {  
        console.log("Don't know how to open URI: " + url);  
      }  
    });  
  };

  return (
    <View style={styles.fullscreen}>
      <ScrollView>
          <View style={styles.listItem}>
              <Image source={{uri: book.avatar_url}} style={{ height: 500 }}/>
              <Text style={{...styles.text, fontSize: 40}}>{book.name}</Text>
              <Text style={styles.text}>{book.author}</Text>
              <Text style={styles.text}>{book.price}</Text>
              <Text style={styles.text}>{book.description}</Text>
              <Text style={styles.text}>Genre: {book.genre}</Text>
              <TouchableOpacity onPress={() => openURL(book.website)}>  
                <FontAwesome name="external-link" size={24} color="#0f0" />  
              </TouchableOpacity>  
              <TouchableOpacity
                        onPress={() => dispatch(addBook(book))} 
                        style={styles.button}
                    >
                        <Text style={styles.buttontext}> Add Book </Text>
              </TouchableOpacity>
          </View>
      </ScrollView>
      <View style={styles.foregroundImage} pointerEvents="none">
        <Image
          source={require('../../assets/scanlines.png')}
          style={{ flex: 1 }}
        />
      </View>      
      <View style={styles.foregroundImage} pointerEvents="none">
        <Image
          source={require('../../assets/scanlines.png')}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );  
};  

export default BookDetailScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0f0',
      position: "relative"
    },
    scrollView: {
      padding: 5
    },
    listItem: {
      // width: '100%',
      padding: 5,
      backgroundColor: '#000000',
      marginBottom: 10,
      borderRadius: 5,
  
    },
    text: {
      color: '#0f0',
      fontFamily: 'IBM',
      fontSize: 25,
      textAlign: 'left',
      padding: 5,
      paddingRight:5
    },
    foregroundImage: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    fullscreen: {
      backgroundColor: '#000',
      flex: 1
    },
    button: {  
      backgroundColor: '#0f0',
      borderRadius: 5,
      color: '#000',
      fontFamily: 'IBM',
      fontSize: 20,
      height: 30
    },
    buttontext:{
      fontFamily: 'IBM',
      fontSize: 30,
      textAlign: 'center',  
  }
  });
  