export default function classMatchInVnodesPredicate (vnode, className) {
  return vnode.data != null && ((vnode.data.staticClass != null && vnode.data.staticClass.includes(className)) || (vnode.data.class != null && vnode.data.class[className]))
}
