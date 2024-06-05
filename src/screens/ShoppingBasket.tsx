import { useSelector } from 'react-redux';  
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeBook } from '../store/basket/slice';
import { Card } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";



const ShoppingBasket = () => {  
  const basket = useSelector((state) => state.basket);  
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { isAuthenticated } = useAuth();

  const handleConfirm = () => {
    if (isAuthenticated) {
      navigation.navigate('ConfirmationScreen');
    } else {
      navigation.navigate('LoginOrRegister');
    }
  };

  return (  
    <View style={styles.fullscreen}>
    <Text style={styles.title}>Shopping Basket:</Text>  
      <FlatList
        data={basket}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
            <Card containerStyle={styles.listItem}>
                <Card.Divider/>
                <Text style={{...styles.text, fontSize: 40}}>{item.name}</Text>
                <Text style={styles.text}>{item.author}</Text>
                <Text style={styles.text}>{item.price}</Text>
                <Text style={styles.text}>{item.description}</Text>
                <Text style={styles.text}>Genre: {item.genre}</Text>
                    
                <TouchableOpacity
                    onPress={() => dispatch(removeBook(item))} 
                    style={styles.button}
                >
                    <Text style={styles.buttontext}> Remove </Text>
                </TouchableOpacity>
                    
            </Card>
        )}  
      />
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttontext}>Confirm</Text>
      </TouchableOpacity>
      
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

export default ShoppingBasket;

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
      padding: 5,
      marginTop: 5,
      backgroundColor: '#000000',
      margin: 0,
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
        flex: 1,
        fontFamily: 'IBM'
    },
    title: {
        color: '#0f0',
        fontFamily: 'IBM',
        paddingRight:5,
        fontSize: 40,
        textAlign: 'center',  
        padding: 10,  
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