import { NitroModules } from 'react-native-nitro-modules'
import type { MyNitroModule as MyNitroModuleSpec } from './specs/my-nitro-module.nitro'

export const MyNitroModule =
  NitroModules.createHybridObject<MyNitroModuleSpec>('MyNitroModule')

// Export types for consumers
export type { DeviceInfo } from './specs/my-nitro-module.nitro'
