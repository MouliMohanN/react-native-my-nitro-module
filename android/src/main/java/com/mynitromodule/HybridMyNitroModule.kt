package com.mynitromodule

import android.os.Build
import com.margelo.nitro.mynitromodule.HybridMyNitroModuleSpec
import com.margelo.nitro.core.Promise
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

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
    
    override fun getDeviceInfo(): Map<String, Any> {
        return mapOf(
            "platform" to "Android",
            "model" to Build.MODEL,
            "version" to Build.VERSION.RELEASE
        )
    }
    
    override fun delayedGreeting(name: String, delayMs: Double): Promise<String> {
        return Promise.async { resolve ->
            CoroutineScope(Dispatchers.Main).launch {
                delay(delayMs.toLong())
                resolve("Hello, $name! This greeting was delayed by ${delayMs.toInt()}ms.")
            }
        }
    }
    
    override fun isEven(number: Double): Boolean {
        return number.toInt() % 2 == 0
    }
}
