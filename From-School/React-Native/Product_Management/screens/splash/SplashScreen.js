// src/screens/SplashScreen.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/splash.png')} style={styles.image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});