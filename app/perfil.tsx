import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, Alert, StyleSheet } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import Card from '../components/Card';
import Button from '../components/Button';
import { useAppStore } from '../lib/store';

export default function Perfil() {
    const { xp, streak } = useAppStore();
    const [goal, setGoal] = useState<string>('20');

    async function tryBiometric() {
        try {
            const available = await LocalAuthentication.hasHardwareAsync();
            if (!available) return Alert.alert('Biometria não disponível');
            const enrolled = await LocalAuthentication.isEnrolledAsync();
            if (!enrolled) return Alert.alert('Nenhuma credencial biométrica configurada');
            const result = await LocalAuthentication.authenticateAsync({ promptMessage: 'Desbloquear' });
            if (!result.success) Alert.alert('Autenticação falhou');
        } catch (e) {
            Alert.alert('Erro na autenticação');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Card title="Conta">
          <View>
            <Text style={styles.label}>XP</Text>
            <Text style={styles.xp}>{xp}</Text>
            <Text style={styles.label}>Streak</Text>
            <Text style={styles.xp}>{streak}</Text>
          </View>

          <View style={styles.goalContainer}>
            <Text style={styles.label}>Meta diária de XP</Text>
            <TextInput
              value={goal}
              onChangeText={setGoal}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button onPress={tryBiometric}>Desbloquear com biometria</Button>
          </View>
        </Card>
      </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#E0E0E0',
        marginBottom: 16,
    },
    card: {
        marginTop: 16,
    },
    label: {
        fontSize: 14,
        color: '#C9A45C',
        marginBottom: 4,
    },
    xp: {
        fontSize: 18,
        color: '#E0E0E0',
        marginBottom: 16,
    },
    goalContainer: {
        marginTop: 16,
    },
    input: {
        backgroundColor: '#1A1A1A',
        color: '#E0E0E0',
        padding: 12,
        borderRadius: 8,
        marginTop: 8,
    },
    buttonContainer: {
        marginTop: 16,
    },
});