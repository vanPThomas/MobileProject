import React, { useEffect, useState } from 'react';  
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity} from 'react-native';  
import { Card } from 'react-native-elements';  
import {useNavigation} from '@react-navigation/native';
import { db } from "../config/firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

export default function App() {

  const getBooks = async () => {
    try {
      const booksCollection = collection(db, "books");
      const booksSnapshot = await getDocs(booksCollection);
      const booksList = booksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return booksList;
    } catch (error) {
      console.error("Error getting books collection: ", error);
      throw new Error("Could not fetch books");
    }
  };

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks();
        setBooks(booksData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const navigation = useNavigation();

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.scrollView}
          data={books}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item: book }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Details', {book})}>
              <Card containerStyle={styles.listItem}>
                <Card.Image source={{uri: book.avatar_url}} style={{ height: 500 }}/>
                <Card.Divider/>
                <Text style={{...styles.text, fontSize: 40}}>{book.name}</Text>
                <Text style={styles.text}>{book.author}</Text>
                <Text style={styles.text}>{book.price}</Text>
                <Text style={styles.text}>{book.description}</Text>
                <Text style={styles.text}>Genre: {book.genre}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />
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
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
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
    borderColor: '#0f0',
    borderWidth: 5

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
  
});
