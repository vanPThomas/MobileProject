import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import RootStackNavigator from "./RootStackNavigator";
import ShoppingBasket from "../screens/ShoppingBasket";
import LoginOrRegister from "../screens/LoginOrRegister";
import ProfileScreen from "../screens/Profilescreen";
import { useAuth } from "../hooks/useAuth";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  
  const { isAuthenticated } = useAuth();
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#000" },
        headerTintColor: "#0f0",
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#0f0",
        tabBarInactiveTintColor: "#090",
      }}>

      <Tab.Group
        screenOptions={{
          headerShown: false,
          headerTitleStyle: { fontFamily: "IBM" },
          tabBarLabelStyle: { fontFamily: "IBM" },
        }}>
        <Tab.Screen
          name="home"
          component={RootStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen  
        name="Profile"  
        component={isAuthenticated ? ProfileScreen : LoginOrRegister}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cog" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen
          name="Basket"
          component={ShoppingBasket}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="shopping-basket" size={size} color={color} />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabNavigator;