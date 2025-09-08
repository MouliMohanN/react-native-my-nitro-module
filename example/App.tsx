import React, { useState, useEffect } from 'react';
import {Text, View, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import { MyNitroModule, DeviceInfo } from 'react-native-my-nitro-module';

function App(): React.JSX.Element {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo | null>(null);
  const [delayedMessage, setDelayedMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    try {
      const info = MyNitroModule.getDeviceInfo();
      setDeviceInfo(info);
    } catch (error) {
      console.error('Error getting device info:', error);
    }
  }, []);

  const testDelayedGreeting = async () => {
    setIsLoading(true);
    setDelayedMessage('Loading...');
    try {
      const message = await MyNitroModule.delayedGreeting('React Native', 2000);
      setDelayedMessage(message);
    } catch (error) {
      setDelayedMessage('Error: ' + String(error));
      console.error('Error with delayed greeting:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const testAllMethods = () => {
    try {
      const sum = MyNitroModule.sum(15, 25);
      const product = MyNitroModule.multiply(8, 7);
      const greeting = MyNitroModule.greet('Nitro Developer');
      const reversed = MyNitroModule.reverseString('Hello Nitro');
      const arraySum = MyNitroModule.getArraySum([1, 2, 3, 4, 5, 10]);
      const isEven42 = MyNitroModule.isEven(42);
      const isEven43 = MyNitroModule.isEven(43);
      
      Alert.alert(
        'Test Results',
        `Sum (15+25): ${sum}\n` +
        `Product (8*7): ${product}\n` +
        `Greeting: ${greeting}\n` +
        `Reversed: ${reversed}\n` +
        `Array Sum: ${arraySum}\n` +
        `42 is even: ${isEven42}\n` +
        `43 is even: ${isEven43}`
      );
    } catch (error) {
      Alert.alert('Error', String(error));
    }
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
      <Text style={styles.title}>🔥 MyNitroModule Demo</Text>
      
      {/* Basic Sum Test */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Sum Test:</Text>
        <Text style={styles.result}>
          1 + 2 = {MyNitroModule.sum(1, 2)}
        </Text>
      </View>

      {/* Device Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Device Info:</Text>
        {deviceInfo ? (
          <>
            <Text style={styles.info}>Platform: {deviceInfo.platform}</Text>
            <Text style={styles.info}>Model: {deviceInfo.model}</Text>
            <Text style={styles.info}>Version: {deviceInfo.version}</Text>
          </>
        ) : (
          <Text style={styles.info}>Loading device info...</Text>
        )}
      </View>

      {/* Test All Methods Button */}
      <View style={styles.section}>
        <Button title="Test All Methods" onPress={testAllMethods} />
      </View>

      {/* Async Test */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Async Test:</Text>
        <Button 
          title={isLoading ? "Loading..." : "Test Delayed Greeting"} 
          onPress={testDelayedGreeting}
          disabled={isLoading}
        />
        {delayedMessage ? (
          <Text style={styles.info}>{delayedMessage}</Text>
        ) : null}
      </View>

      {/* Quick Tests */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Tests:</Text>
        <Text style={styles.info}>Greeting: {MyNitroModule.greet('World')}</Text>
        <Text style={styles.info}>Reversed 'Nitro': {MyNitroModule.reverseString('Nitro')}</Text>
        <Text style={styles.info}>Array [1,2,3,4,5] sum: {MyNitroModule.getArraySum([1,2,3,4,5])}</Text>
        <Text style={styles.info}>Is 100 even? {MyNitroModule.isEven(100) ? 'Yes' : 'No'}</Text>
        <Text style={styles.info}>Is 101 even? {MyNitroModule.isEven(101) ? 'Yes' : 'No'}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginVertical: 20,
  },
  section: {
    marginVertical: 12,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007bff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
  },
  info: {
    fontSize: 14,
    color: '#666',
    marginVertical: 2,
  },
});

export default App;