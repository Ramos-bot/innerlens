import React, { useMemo } from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import { loadLessons } from '../lib/content';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Licoes() {
    const lessons = useMemo(() => loadLessons(), []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Lições</Text>

                <FlatList
                    data={lessons}
                    numColumns={2}
                    keyExtractor={(i) => i.id}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginTop: 12 }}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Card title={item.title} subtitle={`${item.category || ''} • ${item.level || ''}`}>
                                <Text style={styles.description}>{item.description}</Text>
                                <View style={styles.buttonContainer}>
                                    <Button variant="outline">Abrir</Button>
                                </View>
                            </Card>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#E0E0E0',
    },
    card: {
        width: '48%',
    },
    description: {
        fontSize: 14,
        color: '#E0E0E0',
    },
    buttonContainer: {
        marginTop: 12,
    },
});