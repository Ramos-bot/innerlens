import React, { useMemo, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Card from '../components/Card';
import { loadPhrases } from '../lib/content';
import { useAppStore } from '../lib/store';

export default function Treino() {
    const phrases = useMemo(() => loadPhrases(), []);
    const [step, setStep] = useState(0);
    const [chosen] = useState(() => {
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    });
    const { addXP, incStreak } = useAppStore();

    function next() {
        if (step >= 2) {
            incStreak();
            addXP(10);
            setStep(0);
        } else setStep((s) => s + 1);
    }
    function prev() {
        setStep((s) => Math.max(0, s - 1));
    }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.stepText}>Passo {step + 1}/3</Text>

      <View style={styles.card}>
        <Card>
          {step === 0 && (
            <>
              <Text style={styles.title}>Frase do Dia</Text>
              <Text style={styles.chosenText}>{chosen?.text}</Text>
            </>
          )}
          {step === 1 && (
            <>
              <Text style={styles.title}>Leitura Corporal</Text>
              <Text style={styles.bodyText}>Observe a sua postura e respiração. (Placeholder)</Text>
            </>
          )}
          {step === 2 && (
            <>
              <Text style={styles.title}>Micro-Rotina</Text>
              <Text style={styles.bodyText}>Execute 1 min de respiração consciente.</Text>
            </>
          )}

          <View style={styles.buttonContainer}>
            <Button variant="outline" onPress={prev}>
              Anterior
            </Button>
            <Button onPress={next}>{step === 2 ? 'Concluir' : 'Seguinte'}</Button>
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
        padding: 24,
    },
    stepText: {
        fontSize: 14,
        color: '#C9A45C',
    },
    card: {
        marginTop: 16,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E0E0E0',
    },
    chosenText: {
        marginTop: 8,
        fontSize: 16,
        color: '#E0E0E0',
    },
    bodyText: {
        marginTop: 8,
        fontSize: 16,
        color: '#E0E0E0',
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});