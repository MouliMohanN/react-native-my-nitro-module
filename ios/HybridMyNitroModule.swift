//
//  HybridMyNitroModule.swift
//  Pods
//
//  Created by  on 8/9/2025.
//

import Foundation
import UIKit

class HybridMyNitroModule: HybridMyNitroModuleSpec {
    func sum(num1: Double, num2: Double) throws -> Double {
        return num1 + num2
    }
    
    func multiply(num1: Double, num2: Double) throws -> Double {
        return num1 * num2
    }
    
    func greet(name: String) throws -> String {
        return "Hello, \(name)! Welcome to Nitro modules."
    }
    
    func reverseString(input: String) throws -> String {
        return String(input.reversed())
    }
    
    func getArraySum(numbers: [Double]) throws -> Double {
        return numbers.reduce(0, +)
    }
    
    func getDeviceInfo() throws -> [String: Any] {
        return [
            "platform": "iOS",
            "model": UIDevice.current.model,
            "version": UIDevice.current.systemVersion
        ]
    }
    
    func delayedGreeting(name: String, delayMs: Double) -> Promise<String> {
        return Promise.async { resolve in
            DispatchQueue.main.asyncAfter(deadline: .now() + .milliseconds(Int(delayMs))) {
                resolve("Hello, \(name)! This greeting was delayed by \(Int(delayMs))ms.")
            }
        }
    }
    
    func isEven(number: Double) throws -> Bool {
        return Int(number) % 2 == 0
    }
}
