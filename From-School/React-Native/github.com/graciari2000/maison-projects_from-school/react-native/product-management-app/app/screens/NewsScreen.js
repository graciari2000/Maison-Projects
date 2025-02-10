import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

const initialNews = [
    { id: '1', title: 'Actualité 1', content: 'Détails de l’actualité 1...' },
    { id: '2', title: 'Actualité 2', content: 'Détails de l’actualité 2...' },
    { id: '3', title: 'Actualité 3', content: 'Détails de l’actualité 3...' },
];

export default function NewsScreen() {
    const [news, setNews] = useState(initialNews);
    const colorScheme = useColorScheme();

    // You can use useEffect to fetch news data from an API
    useEffect(() => {
        // Example of fetching data from an API
        // fetch('https://api.example.com/news')
        //   .then(response => response.json())
        //   .then(data => setNews(data));
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={colorScheme === 'dark' ? styles.newsItemDark : styles.newsItemLight}>
            <Text style={colorScheme === 'dark' ? styles.newsTitleDark : styles.newsTitleLight}>{item.title}</Text>
            <Text style={colorScheme === 'dark' ? styles.newsContentDark : styles.newsContentLight}>{item.content}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
            <Text style={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}>Actualités</Text>
            <FlatList
                data={news}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff', // Light mode background color
    },
    containerDark: {
        flex: 1,
        padding: 16,
        backgroundColor: '#000000', // Dark mode background color
    },
    titleLight: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#11998e', // Light mode title color
    },
    titleDark: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#11998e', // Dark mode title color
    },
    newsItemLight: {
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    newsItemDark: {
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: '#333',
        borderColor: '#555',
        borderWidth: 1,
    },
    newsTitleLight: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000', // Light mode news title color
    },
    newsTitleDark: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff', // Dark mode news title color
    },
    newsContentLight: {
        fontSize: 16,
        color: '#000000', // Light mode news content color
    },
    newsContentDark: {
        fontSize: 16,
        color: '#ffffff', // Dark mode news content color
    },
    listContainer: {
        paddingBottom: 16, // Add padding to the bottom of the list
    },
});