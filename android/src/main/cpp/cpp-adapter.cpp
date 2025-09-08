#include <jni.h>
#include "MyNitroModuleOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::mynitromodule::initialize(vm);
}
