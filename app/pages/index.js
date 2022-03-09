import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import Para from '../components/Text';
import Card from '../components/Card';

export default function Homepage() {
    return (
        <View>
            <StatusBar style="dark" />
            <Header />
            <Para />
            <Card />
        </View>
    );
}