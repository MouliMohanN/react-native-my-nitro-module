package com.mynitromodule

import com.margelo.nitro.mynitromodule.HybridMyNitroModuleSpec

class HybridMyNitroModule: HybridMyNitroModuleSpec() {    
    override fun sum(num1: Double, num2: Double): Double {
        return num1 + num2
    }
}
