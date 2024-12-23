import React from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ParallaxScrollView
        headerImage={<Image source={require('@/assets/images/react-logo.png')} style={{ width: '100%', height: '100%' }} />}
        headerBackgroundColor={{
          dark: '#333', // Provide color for dark mode
          light: '#fff', // Provide color for light mode
        }}>
        <ThemedText style={styles.headerText}>
          Welcome to the Home Screen
        </ThemedText>
        <ThemedText style={styles.bodyText}>
          This is where you can add your app content.
        </ThemedText>
      </ParallaxScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#fff',
  },
  bodyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#fff',
  },
});

