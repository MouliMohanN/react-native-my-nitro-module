package com.mynitromodule

import android.os.Build
import com.margelo.nitro.mynitromodule.HybridMyNitroModuleSpec
import com.margelo.nitro.mynitromodule.DeviceInfo
import com.margelo.nitro.core.Promise
// Coroutines imports removed for simplified Promise implementation

class HybridMyNitroModule: HybridMyNitroModuleSpec() {    
    override fun sum(num1: Double, num2: Double): Double {
        return num1 + num2
    }
    
    override fun multiply(num1: Double, num2: Double): Double {
        return num1 * num2
    }
    
    override fun greet(name: String): String {
        return "Hello, $name! Welcome to Nitro modules."
    }
    
    override fun reverseString(input: String): String {
        return input.reversed()
    }
    
    override fun getArraySum(numbers: DoubleArray): Double {
        return numbers.sum()
    }
    
    override fun getDeviceInfo(): DeviceInfo {
        return DeviceInfo(
            platform = "Android",
            model = Build.MODEL,
            version = Build.VERSION.RELEASE
        )
    }
    
    override fun delayedGreeting(name: String, delayMs: Double): Promise<String> {
        // For now, return a resolved promise with a simple message
        // TODO: Implement proper async delay once we understand Nitro Promise API better
        return Promise.resolved("Hello, $name! This greeting was delayed by ${delayMs.toInt()}ms (simulated).")
    }
    
    override fun isEven(number: Double): Boolean {
        return number.toInt() % 2 == 0
    }
}
