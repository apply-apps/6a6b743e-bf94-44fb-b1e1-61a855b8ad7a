// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Learn to Read</Text>
            <LetterDisplay />
        </SafeAreaView>
    );
};

const LetterDisplay = () => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const showNextLetter = () => {
        setCurrentLetterIndex((index) => (index + 1) % letters.length);
    };

    return (
        <View style={letterStyles.container}>
            <Text style={letterStyles.letter}>{letters[currentLetterIndex]}</Text>
            <Button title="Next Letter" onPress={showNextLetter} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
});

const letterStyles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    letter: {
        fontSize: 100,
        marginVertical: 50,
    },
});

export default App;