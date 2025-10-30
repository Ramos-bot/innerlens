import '../app.css';
import React from 'react';
import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#0D0D0D', borderTopColor: 'transparent' },
                tabBarActiveTintColor: '#C9A45C',
                tabBarInactiveTintColor: '#E0E0E0',
            }}
        />
    );
}