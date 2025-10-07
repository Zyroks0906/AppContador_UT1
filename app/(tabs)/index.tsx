import React, { useState } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ParallaxScrollView from '@/components/parallax-scroll-view';

export default function HomeScreen() {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Mi App Contador 🎯</ThemedText>
      </ThemedView>

      <ThemedView style={styles.counterContainer}>
        <ThemedText type="subtitle">Cuenta actual:</ThemedText>
        <ThemedText type="title" style={styles.countText}>
          {count}
        </ThemedText>
        {count >= 10 && <ThemedText style={styles.emoji}>🎉 ¡Meta alcanzada!</ThemedText>}
      </ThemedView>

      <ThemedView style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.decrement]}
          onPress={decrement}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>−</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.reset]}
          onPress={reset}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>Reset</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.increment]}
          onPress={increment}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>+</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginTop: 60, 
  },
  counterContainer: {
    alignItems: 'center',
    marginTop: 90, // espacio extra para que el número no se corte
    marginBottom: 20,
    gap: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 40,
    marginBottom: 80, // da un poco de espacio final
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 14,
  },
  increment: {
    backgroundColor: '#22C55E',
  },
  decrement: {
    backgroundColor: '#EF4444',
  },
  reset: {
    backgroundColor: '#6B7280',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  countText: {
    fontSize: 40, // número grande, legible
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emoji: {
    fontSize: 26,
    marginTop: 15,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
