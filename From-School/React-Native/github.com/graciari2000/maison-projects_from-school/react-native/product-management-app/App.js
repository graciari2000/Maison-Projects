// App.js
import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './app/screens/HomeScreens';
import MarketScreen from './app/screens/MarketScreen';
import NewsScreen from './app/screens/NewsScreen';
import CartScreen from './app/screens/CartScreen';
import ProductScreen from './app/screens/ProductScreens';
import ProductDetails from './app/screens/ProductDetails';
import SplashScreen from './app/screens/splash/SplashScreen';
import { CartProvider } from './app/CartContext'; // Import CartProvider

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
            <Tab.Screen name="Accueil" component={HomeScreen} options={{ title: '' }} />
            <Tab.Screen name="Marché" component={MarketScreen} options={{ title: '' }} />
            <Tab.Screen name="Actualités" component={NewsScreen} options={{ title: '' }} />
            <Tab.Screen name="Panier" component={CartScreen} options={{ title: '' }} />
            <Tab.Screen name="Produits" component={ProductScreen} options={{ title: '' }} />
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
                component={() => (
                    <Stack.Navigator>
                        <Stack.Screen name="HomeTabs" component={MainTabs} options={{ headerShown: false }} />
                        <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
                    </Stack.Navigator>
                )}
                options={{ title: '' }}
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
        <NavigationContainer>
            <CartProvider> {/* Wrap everything with CartProvider */}
                {isLoading ? <SplashScreen /> : <Navigation />}
            </CartProvider>
        </NavigationContainer>
    );
}