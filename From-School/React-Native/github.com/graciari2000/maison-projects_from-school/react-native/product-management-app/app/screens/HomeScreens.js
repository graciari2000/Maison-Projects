import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample product data
const featuredProducts = [
  { id: '1', name: 'Stylish Jackets', image: 'https://images.pexels.com/photos/769731/pexels-photo-769731.jpeg' },
  { id: '2', name: 'Smart Watches', image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg' },
  { id: '3', name: 'Wireless Headphones', image: 'https://images.pexels.com/photos/3394656/pexels-photo-3394656.jpeg' },
];

const bestSellers = [
  { id: '4', name: 'Running Shoes', image: 'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg' },
  { id: '5', name: 'Leather Backpacks', image: 'https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg' },
  { id: '6', name: 'Classic Sunglasses', image: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg' },
];

const newArrivals = [
  { id: '7', name: 'Elegant Dresses', image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg' },
  { id: '8', name: 'Modern Laptops', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg' },
  { id: '9', name: 'Handcrafted Mugs', image: 'https://images.pexels.com/photos/4466255/pexels-photo-4466255.jpeg' },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  const handlePress = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <ScrollView style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
      <View style={styles.header}>
        <Text style={colorScheme === 'dark' ? styles.headerTextDark : styles.headerTextLight}>Welcome</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for products..."
          placeholderTextColor={colorScheme === 'dark' ? '#999' : '#666'}
        />
      </View>

      <Section title="Featured Products" products={featuredProducts} colorScheme={colorScheme} onPress={handlePress} />
      <Section title="Best Sellers" products={bestSellers} colorScheme={colorScheme} onPress={handlePress} />
      <Section title="New Arrivals" products={newArrivals} colorScheme={colorScheme} onPress={handlePress} />
    </ScrollView>
  );
}

const Section = ({ title, products, colorScheme, onPress }) => (
  <View style={styles.sectionContainer}>
    <Text style={colorScheme === 'dark' ? styles.sectionTitleDark : styles.sectionTitleLight}>{title}</Text>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)} style={styles.productItem}>
          <Image source={{ uri: item.image }} style={styles.productImage} />
          <Text style={colorScheme === 'dark' ? styles.productNameDark : styles.productNameLight}>{item.name}</Text>
        </TouchableOpacity>
      )}
      horizontal
    />
  </View>
);

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    padding: 16,
    backgroundColor: '#11998e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextLight: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  headerTextDark: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  searchBar: {
    marginTop: 10,
    width: '90%',
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitleLight: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
    color: '#000000',
  },
  sectionTitleDark: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 16,
    color: '#ffffff',
  },
  productItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  productImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    aspectRatio: 1,
  },
  productNameLight: {
    marginTop: 8,
    fontSize: 16,
    color: '#000000',
  },
  productNameDark: {
    marginTop: 8,
    fontSize: 16,
    color: '#ffffff',
  },
});