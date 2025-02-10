import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, useColorScheme, ActivityIndicator } from 'react-native';

const NewsScreen = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const colorScheme = useColorScheme();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://api.example.com/news');
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={colorScheme === 'dark' ? styles.newsItemDark : styles.newsItemLight}>
            <Text style={colorScheme === 'dark' ? styles.newsTitleDark : styles.newsTitleLight}>{item.title}</Text>
            <Text style={colorScheme === 'dark' ? styles.newsContentDark : styles.newsContentLight}>{item.content}</Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
                <ActivityIndicator size="large" color={colorScheme === 'dark' ? '#ffffff' : '#000000'} />
                <Text style={colorScheme === 'dark' ? styles.textDark : styles.textLight}>Chargement...</Text>
            </View>
        );
    }

    return (
        <View style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
            <Text style={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}>Actualités</Text>
            {news.length === 0 ? (
                <Text style={colorScheme === 'dark' ? styles.textDark : styles.textLight}>Aucune actualité disponible.</Text>
            ) : (
                <FlatList
                    data={news}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    containerDark: {
        flex: 1,
        padding: 16,
        backgroundColor: '#000000',
    },
    titleLight: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#11998e',
    },
    titleDark: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#11998e',
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
        color: '#000000',
    },
    newsTitleDark: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    newsContentLight: {
        fontSize: 16,
        color: '#000000',
    },
    newsContentDark: {
        fontSize: 16,
        color: '#ffffff',
    },
    listContainer: {
        paddingBottom: 16,
    },
});

export default NewsScreen;