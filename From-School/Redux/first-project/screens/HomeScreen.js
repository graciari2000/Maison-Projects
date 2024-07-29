import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useAppContext } from '../contexts/AppContext';
import { setItems } from '../store/reducers/itemReducer';
import { addFavorite } from '../store/reducers/favoriteReducer';

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    const { setSelectedItem } = useAppContext();

    useEffect(() => {
        // Simulate API call
        const fetchedItems = [
            { id: '1', name: 'Item 1' },
            { id: '2', name: 'Item 2' },
        ];
        dispatch(setItems(fetchedItems));
    }, [dispatch]);

    const handleSelectItem = (item) => {
        setSelectedItem(item);
        navigation.navigate('DetailsScreen');
    };

    const handleAddFavorite = (item) => {
        dispatch(addFavorite(item));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                        <Button title="View Details" onPress={() => handleSelectItem(item)} />
                        <Button title="Add to Favorites" onPress={() => handleAddFavorite(item)} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        marginBottom: 20,
    },
});

export default HomeScreen;
