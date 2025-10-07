import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const [count, setCount] = useState<number>(0);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      {/* 🔹 Espacio superior para que el número no se corte */}
      <View style={{ height: 180 }} />

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Mi App Contador 🎯</ThemedText>
      </ThemedView>

      <ThemedView style={styles.counterContainer}>
        <ThemedText type="subtitle">Cuenta actual:</ThemedText>
        <ThemedText type="title" style={styles.countText}>{count}</ThemedText>
        {count >= 10 && <ThemedText style={styles.emoji}>🎉 ¡Meta alcanzada!</ThemedText>}
      </ThemedView>

      <ThemedView style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.decrement]} onPress={() => setCount(c => c - 1)}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>−</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.reset]} onPress={() => setCount(0)}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>Reset</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.increment]} onPress={() => setCount(c => c + 1)}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>+</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* 🔹 Espacio final opcional */}
      <View style={{ height: 40 }} />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 40,
    marginBottom: 80,
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
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  emoji: {
    fontSize: 26,
    marginTop: 15,
  },
});
