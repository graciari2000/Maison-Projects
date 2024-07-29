import React from 'react';
import { View, Text, StyleSheet, useColorScheme, TextInput, FlatList, Image, ScrollView } from 'react-native';

const featuredProducts = [
    { id: '1', name: 'Product 1', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Product 2', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Product 3', image: 'https://via.placeholder.com/150' },
];

const bestSellers = [
    { id: '4', name: 'Best Seller 1', image: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Best Seller 2', image: 'https://via.placeholder.com/150' },
    { id: '6', name: 'Best Seller 3', image: 'https://via.placeholder.com/150' },
];

const newArrivals = [
    { id: '7', name: 'New Arrival 1', image: 'https://via.placeholder.com/150' },
    { id: '8', name: 'New Arrival 2', image: 'https://via.placeholder.com/150' },
    { id: '9', name: 'New Arrival 3', image: 'https://via.placeholder.com/150' },
];

export default function HomeScreen() {
    const colorScheme = useColorScheme();

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

            <Section title="Featured Products" products={featuredProducts} colorScheme={colorScheme} />
            <Section title="Best Sellers" products={bestSellers} colorScheme={colorScheme} />
            <Section title="New Arrivals" products={newArrivals} colorScheme={colorScheme} />
        </ScrollView>
    );
}

const Section = ({ title, products, colorScheme }) => (
    <View style={styles.sectionContainer}>
        <Text style={colorScheme === 'dark' ? styles.sectionTitleDark : styles.sectionTitleLight}>
            {title}
        </Text>
        <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.productItem}>
                    <Image source={{ uri: item.image }} style={styles.productImage} />
                    <Text style={colorScheme === 'dark' ? styles.productNameDark : styles.productNameLight}>
                        {item.name}
                    </Text>
                </View>
            )}
            horizontal
        />
    </View>
);

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        backgroundColor: '#ffffff', // Light mode background color
    },
    containerDark: {
        flex: 1,
        backgroundColor: '#000000', // Dark mode background color
    },
    header: {
        padding: 16,
        backgroundColor: '#11998e', // Header background color
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTextLight: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff', // Light mode header text color
    },
    headerTextDark: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff', // Dark mode header text color
    },
    searchBar: {
        marginTop: 10,
        width: '90%',
        height: 40,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        paddingHorizontal: 15,
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
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
        color: '#000000', // Light mode section title color
    },
    sectionTitleDark: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 16,
        color: '#ffffff', // Dark mode section title color
    },
    productItem: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    productImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    productNameLight: {
        marginTop: 8,
        fontSize: 16,
        color: '#000000', // Light mode product name color
    },
    productNameDark: {
        marginTop: 8,
        fontSize: 16,
        color: '#ffffff', // Dark mode product name color
    },
});