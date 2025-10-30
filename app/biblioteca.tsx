import React, { useMemo, useState } from 'react';
import { SafeAreaView, FlatList, TextInput, Text, View, StyleSheet } from 'react-native';
import Card from '../components/Card';
import { loadPhrases } from '../lib/content';
import { Phrase } from '../types/content';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }

  interface TextProps {
    className?: string;
  }

  interface TextInputProps {
    className?: string;
  }
}

export default function Biblioteca() {
  const phrases = useMemo(() => loadPhrases(), []);
  const [filter, setFilter] = useState('');

  const filtered = phrases.filter((p: Phrase) => {
    const q = filter.toLowerCase();
    return (
      p.text.toLowerCase().includes(q) ||
      (p.pack || '').toLowerCase().includes(q) ||
      (p.tags || []).some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <SafeAreaView className="flex-1 bg-[#0D0D0D] p-4">
      <View style={styles.content}>
        <Text style={styles.title}>Biblioteca</Text>
        <Text style={styles.subtitle}>Recursos e exercícios</Text>
      </View>
      <TextInput
        placeholder="Pesquisar texto ou tag"
        placeholderTextColor="#888"
        value={filter}
        onChangeText={setFilter}
        className="bg-[#1A1A1A] text-[#E0E0E0] p-3 rounded-xl"
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        className="mt-4"
        renderItem={({ item }) => (
          <Card title={item.pack} subtitle={item.tags?.join(', ')}>
            <Text className="text-[#E0E0E0]">{item.text}</Text>
          </Card>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#E0E0E0',
  },
  subtitle: {
    marginTop: 8,
    color: '#C9A45C',
  },
});