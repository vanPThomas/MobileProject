import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AddCourseScreen from "../screens/AddCourseScreen";
import CameraScreen from "../screens/CameraScreen";
import RNPaper from "../screens/RNPaper";
import ContactsScreen from "../screens/ContactsScreen";
import LocationScreen from "../screens/LocationScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator style={styles.listItem}
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#0f0",
        drawerStyle: { backgroundColor: "#0f0" },
        drawerActiveBackgroundColor: "#0f0",
        drawerActiveTintColor: "white",
      }}>
      <Drawer.Screen style={styles.listItem}
        name="DrawerCourse"
        component={AddCourseScreen}
        options={{
          title: "Add Book",
        }}
      />
      <Drawer.Screen name="RNPaper" component={RNPaper} />
      <Drawer.Screen name="Camera" component={CameraScreen} />
      <Drawer.Screen name="Contacts" component={ContactsScreen} />
      <Drawer.Screen name="Location" component={LocationScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

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
  
});