import pinyin from 'pinyin';
import * as fs from 'fs';
import * as path from 'path';
import {
  stdout
} from 'single-line-log';
const _p = _path => path.join(__dirname, _path)
export default async () => {
  const ci = JSON.parse(fs.readFileSync(_p('../data/ci.json')).toString())
  const pinyins = []
  const allWordsCount = ci.length
  for (const [i, word] of ci.entries()) {
    const _pinyin = pinyin(word.ci)
    pinyins.push({
      pinyin: _pinyin,
      word: word.ci,
      desc: word.explanation
    })
    stdout(`${(i/allWordsCount*100).toFixed(2)}% ${word.ci} ${_pinyin}`, 'utf-8');
    // console.log((i / allWordsCount * 100).toFixed(2))
  }
  fs.writeFileSync(_p("../data/pinyins.json"), JSON.stringify(pinyins))
}