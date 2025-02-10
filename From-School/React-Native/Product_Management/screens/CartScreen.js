// CartScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from './actions/cartActions'; // Import your actions

export default function CartScreen() {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const colorScheme = useColorScheme();

    const handleIncreaseQuantity = (id) => {
        dispatch(updateQuantity(id, quantity + 1));
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(updateQuantity(id, quantity > 1 ? quantity - 1 : quantity));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <View style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
            <Text style={colorScheme === 'dark' ? styles.titleDark : styles.titleLight}>Panier</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={colorScheme === 'dark' ? styles.cartItemDark : styles.cartItemLight}>
                        <View style={styles.itemInfo}>
                            <Text style={colorScheme === 'dark' ? styles.itemNameDark : styles.itemNameLight}>
                                {item.name}
                            </Text>
                            <Text style={colorScheme === 'dark' ? styles.itemQuantityDark : styles.itemQuantityLight}>
                                Quantité: {item.quantity}
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleIncreaseQuantity(item.id)}
                            >
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleDecreaseQuantity(item.id)}
                            >
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.removeButton]}
                                onPress={() => handleRemoveItem(item.id)}
                            >
                                <Text style={styles.buttonText}>Supprimer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
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
    cartItemLight: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
    },
    cartItemDark: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#555',
        borderRadius: 8,
        backgroundColor: '#333',
    },
    itemInfo: {
        flex: 1,
    },
    itemNameLight: {
        fontSize: 16,
        color: '#000000', // Light mode item name color
    },
    itemNameDark: {
        fontSize: 16,
        color: '#ffffff', // Dark mode item name color
    },
    itemQuantityLight: {
        fontSize: 16,
        color: '#000000', // Light mode item quantity color
    },
    itemQuantityDark: {
        fontSize: 16,
        color: '#ffffff', // Dark mode item quantity color
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#11998e',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 4,
        alignItems: 'center',
    },
    removeButton: {
        backgroundColor: '#ff4d4d', // Red background for remove button
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
