# Usage Examples

This document shows how to use the MyNitroModule in your React Native application.

## Basic Import

```typescript
import { MyNitroModule } from 'react-native-my-nitro-module';
```

## Arithmetic Operations

```typescript
// Basic sum
const result = MyNitroModule.sum(5, 3); // Returns 8

// Multiplication  
const product = MyNitroModule.multiply(4, 7); // Returns 28

// Check if number is even
const evenCheck = MyNitroModule.isEven(42); // Returns true
```

## String Operations

```typescript
// Greet a user
const greeting = MyNitroModule.greet('John'); 
// Returns "Hello, John! Welcome to Nitro modules."

// Reverse a string
const reversed = MyNitroModule.reverseString('Hello World'); 
// Returns "dlroW olleH"
```

## Array Operations

```typescript
// Sum array of numbers
const numbers = [1, 2, 3, 4, 5];
const sum = MyNitroModule.getArraySum(numbers); // Returns 15
```

## Object Operations

```typescript
// Get device information
const deviceInfo = MyNitroModule.getDeviceInfo();
console.log(deviceInfo);
// iOS: { platform: "iOS", model: "iPhone", version: "17.0" }
// Android: { platform: "Android", model: "SM-G973F", version: "13" }
```

## Async Operations

```typescript
// Delayed greeting (returns a Promise)
const delayedMessage = await MyNitroModule.delayedGreeting('Alice', 2000);
console.log(delayedMessage); 
// "Hello, Alice! This greeting was delayed by 2000ms."

// Using .then()
MyNitroModule.delayedGreeting('Bob', 1000)
  .then(message => console.log(message));
```

## React Component Example

```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MyNitroModule } from 'react-native-my-nitro-module';

export default function App() {
  const [result, setResult] = useState<number>(0);
  const [deviceInfo, setDeviceInfo] = useState<any>({});
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    // Get device info on component mount
    const info = MyNitroModule.getDeviceInfo();
    setDeviceInfo(info);
  }, []);

  const performCalculation = () => {
    const sum = MyNitroModule.sum(10, 25);
    const product = MyNitroModule.multiply(sum, 2);
    setResult(product);
  };

  const getDelayedGreeting = async () => {
    try {
      const message = await MyNitroModule.delayedGreeting('React Native', 1500);
      setGreeting(message);
    } catch (error) {
      console.error('Error getting greeting:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyNitroModule Demo</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Device Info:</Text>
        <Text>Platform: {deviceInfo.platform}</Text>
        <Text>Model: {deviceInfo.model}</Text>
        <Text>Version: {deviceInfo.version}</Text>
      </View>

      <View style={styles.section}>
        <Button title="Perform Calculation" onPress={performCalculation} />
        <Text>Result: {result}</Text>
      </View>

      <View style={styles.section}>
        <Button title="Get Delayed Greeting" onPress={getDelayedGreeting} />
        <Text>{greeting}</Text>
      </View>

      <View style={styles.section}>
        <Text>String Operations:</Text>
        <Text>Reversed 'Nitro': {MyNitroModule.reverseString('Nitro')}</Text>
        <Text>Is 42 even? {MyNitroModule.isEven(42) ? 'Yes' : 'No'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginVertical: 15,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
```

## Error Handling

```typescript
try {
  const result = MyNitroModule.sum(10, 5);
  console.log('Sum:', result);
} catch (error) {
  console.error('Error performing sum:', error);
}

// For async operations
MyNitroModule.delayedGreeting('Test', 1000)
  .then(message => console.log(message))
  .catch(error => console.error('Async error:', error));
```

## Advanced Usage with Custom Types

You can extend the module by creating custom interfaces:

```typescript
interface CustomDeviceInfo {
  platform: string;
  model: string;
  version: string;
}

const typedDeviceInfo: CustomDeviceInfo = MyNitroModule.getDeviceInfo() as CustomDeviceInfo;
```

## Performance Notes

- Nitro modules provide near-native performance
- Synchronous operations (like `sum`, `greet`) have minimal overhead
- Asynchronous operations use native threading for optimal performance
- Array operations are optimized for large datasets
