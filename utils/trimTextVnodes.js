export default function trimTextVnodes (vnodes) {
  for (let i = 0; i < vnodes.length; i++) {
    if (vnodes.text != null) {
      vnodes.text = vnodes.trim()
    }
  }
  return vnodes
}
