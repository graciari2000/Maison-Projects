import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, Image, StyleSheet, useColorScheme } from 'react-native';
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
            const photo = await cameraRef.current.takePictureAsync();
            setPhoto(photo.uri);
        }
    };

    const handleCameraReady = () => {
        setCameraReady(true);
    };

    if (hasPermission === null) {
        return <View style={styles.container}><Text style={styles.text}>Demande de permission...</Text></View>;
    }
    if (hasPermission === false) {
        return <View style={styles.container}><Text style={styles.text}>Pas d'accès à la caméra</Text></View>;
    }

    return (
        <View style={colorScheme === 'dark' ? styles.containerDark : styles.containerLight}>
            <Text style={colorScheme === 'dark' ? styles.textDark : styles.textLight}>Détails du produit</Text>
            <Camera
                style={styles.camera}
                ref={cameraRef}
                onCameraReady={handleCameraReady}
            />
            <Button title="Prendre une photo" onPress={handleTakePhoto} color={colorScheme === 'dark' ? '#11998e' : '#11998e'} />
            {photo && <Image source={{ uri: photo }} style={styles.image} />}
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
    camera: {
        width: 300,
        height: 300,
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});