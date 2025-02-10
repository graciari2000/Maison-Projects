import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import store from './store'; // Import the store
import { ProductProvider } from './provider/productContext';
import HomeScreen from './screens/HomeScreens';
import MarketScreen from './screens/MarketScreen';
import NewsScreen from './screens/NewsScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreens';
import ProductDetails from './screens/ProductDetails';
import SplashScreen from './screens/splash/SplashScreen';

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

          switch (route.name) {
            case 'Accueil':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Marché':
              iconName = focused ? 'basket' : 'basket-outline';
              break;
            case 'Actualités':
              iconName = focused ? 'newspaper' : 'newspaper-outline';
              break;
            case 'Panier':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Produits':
              iconName = focused ? 'pricetags' : 'pricetags-outline';
              break;
            default:
              iconName = 'help-circle';
              break;
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

// Define the StackNavigator component separately
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ title: 'Product Details' }} />
    </Stack.Navigator>
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
      >
        {() => <StackNavigator />} {/* Pass StackNavigator as children */}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a splash screen or app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust duration as needed

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <Provider store={store}>
      <ProductProvider>
        <NavigationContainer>
          {isLoading ? <SplashScreen /> : <Navigation />}
        </NavigationContainer>
      </ProductProvider>
    </Provider>
  );
}