import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, useColorScheme } from 'react-native';
import { ProductContext } from '../provider/productContext'; // Replace with actual context or state

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const { featuredProducts } = useContext(ProductContext) || {}; // Ensure context is available

  // Check if featuredProducts is available
  if (!featuredProducts) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
      <FlatList
        data={featuredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  containerDark: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#11998e',
  },
  productItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#333',
  },
});