import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppContext } from '../contexts/AppContext';

const DetailsScreen = ({ navigation }) => {
    const { selectedItem } = useAppContext();
    const favorites = useSelector(state => state.favorites.favorites);

    return (
        <View style={styles.container}>
            {selectedItem ? (
                <>
                    <Text style={styles.title}>{selectedItem.name}</Text>
                    <Button title="Go Back" onPress={() => navigation.goBack()} />
                </>
            ) : (
                <Text>No item selected</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default DetailsScreen;