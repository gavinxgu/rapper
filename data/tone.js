// ā á ǎ à ō ó ǒ ò ē é ě è ī í ǐ ì ū ú ǔ ù ǖ ǘ ǚ ǜ ü
const tone = {
  "a": ["a", "ā", "á", "ǎ", "à"],
  "o": ["o", "ō", "ó", "ǒ", "ò"],
  "e": ["e", "ē", "é", "ě", "è"],
  "i": ["i", "ī", "í", "ǐ", "ì"],
  "u": ["u", "ū", "ú", "ǔ", "ù"],
  "ü": ["ü", "ǖ", "ǘ", "ǚ", "ǜ"],
}
const tone2 = [{
  "i": ["i"]
}, {
  "u": ["u"]
}, {
  "ü": ["ü"]
}, {
  "a": ["a"]
}, {
  "ia": ["ia"]
}, {
  "ua": ["ua"]
}, {
  "o": ["o"]
}, {
  "uo": ["uo"]
}, {
  "e": ["e"]
}, {
  "ie": ["ie"]
}, {
  "üe": ["üe"]
}, {
  "ai": ["ai"]
}, {
  "uai": ["uai"]
}, {
  "ei": ["ei"]
}, {
  "uei": ["uei"]
}, {
  "ao": ["ao"]
}, {
  "iao": ["iao"]
}, {
  "ou": ["ou"]
}, {
  "iou": ["iou"]
}, {
  "an": ["an"]
}, {
  "ian": ["ian"]
}, {
  "uɑn": ["uɑn"]
}, {
  "üan": ["üan"]
}, {
  "en": ["en"]
}, {
  "in": ["in"]
}, {
  "uen": ["uen"]
}, {
  "ün": ["ün"]
}, {
  "ang": ["ang"]
}, {
  "iang": ["iang"]
}, {
  "uang": ["uang"]
}, {
  "eng": ["eng"]
}, {
  "ing": ["ing"]
}, {
  "ueng": ["ueng"]
}, {
  "ong": ["ong"]
}, {
  "iong": ["iong"]
}]

const aaa = {}
for (const i in tone) {
  for (const j of tone[i]) {
    aaa[j] = i
  }
}
console.log(aaa)
// export default tone