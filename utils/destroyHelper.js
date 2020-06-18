export default function destroyHelper (vueInstance, name) {
  if (
    vueInstance[name] != null &&
    typeof vueInstance === 'object' &&
    typeof vueInstance[name].destroy === 'function'
  ) {
    vueInstance[name].destroy()
    vueInstance[name] = null
  }
}
