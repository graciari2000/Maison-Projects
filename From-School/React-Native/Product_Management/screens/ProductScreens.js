import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image, StyleSheet, useColorScheme, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';

export default function ProductScreen() {
    const [hasPermission, setHasPermission] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [cameraReady, setCameraReady] = useState(false);
    const colorScheme = useColorScheme();
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleTakePhoto = async () => {
        if (cameraRef.current && cameraReady) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                setPhoto(photo.uri);
            } catch (error) {
                console.error("Error taking picture:", error);
            }
        }
    };

    const handleCameraReady = () => {
        setCameraReady(true);
    };

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Demande de permission...</Text>
                <ActivityIndicator size="large" color={colorScheme === 'dark' ? '#ffffff' : '#000000'} />
            </View>
        );
    }

    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Pas d'accès à la caméra</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, colorScheme === 'dark' ? styles.containerDark : styles.containerLight]}>
            <Text style={[styles.text, colorScheme === 'dark' ? styles.textDark : styles.textLight]}>
                Détails du produit
            </Text>
            <Camera
                style={styles.camera}
                ref={cameraRef}
                onCameraReady={handleCameraReady}
            />
            <Button title="Prendre une photo" onPress={handleTakePhoto} color="#11998e" />
            {photo && <Image source={{ uri: photo }} style={styles.image} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    containerLight: {
        backgroundColor: '#ffffff', // Light mode background color
    },
    containerDark: {
        backgroundColor: '#000000', // Dark mode background color
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textLight: {
        color: '#11998e', // Light mode text color
    },
    textDark: {
        color: '#11998e', // Dark mode text color
    },
    camera: {
        width: 300,
        height: 300,
        marginVertical: 20,
        borderColor: '#11998e',
        borderWidth: 2,
        borderRadius: 10,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
        borderRadius: 10,
    },
});