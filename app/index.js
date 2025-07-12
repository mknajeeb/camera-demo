import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Rush Bag App</Text>
      <Link href="/scan" asChild>
        <Button title="Go to Scan Screen" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, marginBottom: 16 },
});