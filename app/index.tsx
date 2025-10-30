import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import { loadPhrases } from '../lib/content';
import { useAppStore } from '../lib/store';

export default function Home() {
    const { xp, streak, addXP, incStreak } = useAppStore();
    const [phrases, setPhrases] = useState(() => loadPhrases());

    return (
        <SafeAreaView className="flex-1 bg-[#0D0D0D] p-6">
            <Text className="text-2xl font-bold text-[#E0E0E0]">Treino de Hoje</Text>

            <Card className="mt-4" title="Resumo">
                <View className="flex-row justify-between items-center">
                    <View>
                        <Text className="text-sm text-[#C9A45C]">XP</Text>
                        <Text className="text-lg text-[#E0E0E0]">{xp}</Text>
                    </View>
                    <View>
                        <Text className="text-sm text-[#C9A45C]">Streak</Text>
                        <Text className="text-lg text-[#E0E0E0]">{streak}</Text>
                    </View>
                </View>

                <View className="mt-4 flex-row space-x-3">
                    <Button onPress={() => addXP(10)}>+10 XP</Button>
                    <Button variant="outline" onPress={() => incStreak()}>
                        +1 Streak
                    </Button>
                </View>
            </Card>

            <Card className="mt-4" title="Frase de Hoje" subtitle={phrases[0]?.pack}>
                <Text className="text-[#E0E0E0]">{phrases[0]?.text}</Text>
                <View className="mt-3">
                    <Button onPress={() => { addXP(10); incStreak(); }}>Iniciar Treino</Button>
                </View>
            </Card>
        </SafeAreaView>
    );
}