import { type HybridObject } from 'react-native-nitro-modules'

export interface MyNitroModule extends HybridObject<{ android: 'kotlin', ios: 'swift' }> {
  // Basic arithmetic operations
  sum(num1: number, num2: number): number
  multiply(num1: number, num2: number): number
  
  // String operations
  greet(name: string): string
  reverseString(input: string): string
  
  // Array operations
  getArraySum(numbers: number[]): number
  
  // Object operations
  getDeviceInfo(): { platform: string; model: string; version: string }
  
  // Async operations
  delayedGreeting(name: string, delayMs: number): Promise<string>
  
  // Boolean operations
  isEven(number: number): boolean
}
