export function initPlugin (plugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }
}
