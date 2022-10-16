import { useState } from 'react';
import { FlatList, View, Text, SafeAreaView } from 'react-native-gesture-handler';
import { NFTData, COLORS } from '../constants';
import { FocusedStatusBar } from '../components';

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FocusedStatusBar background={COLORS.primary} />
        </SafeAreaView>
    )
}


export default Home