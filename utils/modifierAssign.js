export default function modifierAssign (vnodes, ...modifier) {
  for (let i = 0; i < vnodes.length; i++) {
    if (vnodes[i].text != null) continue
    if (!vnodes[i].data.class) {
      vnodes[i].data.class = {}
    }
    for (let j = 0; j < modifier.length; j++) {
      vnodes[i].data.class[modifier[j]] = true
    }
  }
}
