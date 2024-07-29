// index.tsx
import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreens'; // Adjust import path
import MarketScreen from '../screens/MarketScreen'; // Adjust import path
import NewsScreen from '../screens/NewsScreen'; // Adjust import path
import CartScreen from '../screens/CartScreen'; // Adjust import path
import ProductScreen from '../screens/ProductScreens'; // Adjust import path
import SplashScreen from '../screens/splash/SplashScreen'; // Adjust import path

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';

          if (route.name === 'Accueil') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Marché') {
            iconName = focused ? 'basket' : 'basket-outline';
          } else if (route.name === 'Actualités') {
            iconName = focused ? 'newspaper' : 'newspaper-outline';
          } else if (route.name === 'Panier') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Produits') {
            iconName = focused ? 'pricetags' : 'pricetags-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colorScheme === 'dark' ? '#11998e' : '#11998e',
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#ccc' : '#888',
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        tabBarLabel: () => null, // Hide tab bar labels
      })}
    >
      <Tab.Screen 
        name="Accueil" 
        component={HomeScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Marché" 
        component={MarketScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Actualités" 
        component={NewsScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Panier" 
        component={CartScreen} 
        options={{ title: '' }} 
      />
      <Tab.Screen 
        name="Produits" 
        component={ProductScreen} 
        options={{ title: '' }} 
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  const colorScheme = useColorScheme();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        drawerLabelStyle: {
          color: colorScheme === 'dark' ? '#fff' : '#000',
          fontSize: 16,
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
        },
        headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
      }}
    >
      <Drawer.Screen
        name="Main"
        component={MainTabs}
        options={{ title: '' }} // Set the title to an empty string
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Splash screen duration
  }, []);

  return (
    <NavigationContainer independent={true}>
      {isLoading ? <SplashScreen /> : <Navigation />}
    </NavigationContainer>
  );
}