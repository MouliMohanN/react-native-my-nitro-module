import { NitroModules } from 'react-native-nitro-modules'
import type { MyNitroModule as MyNitroModuleSpec } from './specs/my-nitro-module.nitro'

export const MyNitroModule =
  NitroModules.createHybridObject<MyNitroModuleSpec>('MyNitroModule')