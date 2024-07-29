// app/screens/MarketScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MarketScreen() {
    const [location, setLocation] = useState(null);
    const colorScheme = useColorScheme(); // Hook pour détecter le mode sombre

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                let { coords } = await Location.getCurrentPositionAsync({});
                setLocation(coords);
            }
        })();
    }, []);

    return (
        <View style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
            <Text style={colorScheme === 'dark' ? styles.textDark : styles.textLight}>Marché</Text>
            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                        }}
                        title="Votre position"
                    />
                </MapView>
            ) : (
                <Text style={colorScheme === 'dark' ? styles.textDark : styles.textLight}>
                    En attente de la localisation...
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    containerLight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // Light mode background color
    },
    containerDark: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000', // Dark mode background color
    },
    textLight: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#11998e', // Light mode text color
    },
    textDark: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#11998e', // Dark mode text color
    },
    map: {
        width: '100%',
        height: '80%',
    },
});
