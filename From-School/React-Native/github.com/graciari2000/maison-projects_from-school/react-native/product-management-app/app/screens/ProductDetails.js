// ProductDetails.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, useColorScheme, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../CartContext'; // Import CartContext

export default function ProductDetails() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { product } = route.params || {}; // Get product details from route params
    const { addToCart } = useContext(CartContext); // Access addToCart from context

    const handleAddToCart = () => {
        if (addToCart) {
            addToCart(product); // Add the product to the cart
        }
    };

    return (
        <View style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>
                    Back
                </Text>
            </TouchableOpacity>
            {product && (
                <View style={styles.content}>
                    <Image source={{ uri: product.image }} style={styles.productImage} />
                    <Text style={colorScheme === 'dark' ? styles.productNameDark : styles.productNameLight}>
                        {product.name}
                    </Text>
                    <TouchableOpacity onPress={handleAddToCart} style={styles.addToCartButton}>
                        <Text style={styles.addToCartText}>
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
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
    backButton: {
        padding: 10,
        backgroundColor: '#11998e',
        borderRadius: 5,
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    backButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    content: {
        alignItems: 'center',
    },
    productImage: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    productNameLight: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    productNameDark: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    addToCartButton: {
        padding: 15,
        backgroundColor: '#11998e',
        borderRadius: 5,
        marginTop: 20,
    },
    addToCartText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});