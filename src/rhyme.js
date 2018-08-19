import * as fs from 'fs';
import * as path from 'path';
import yun from '../data/yun';
import {
  stdout
} from 'single-line-log';
const _p = _path => path.join(__dirname, _path)
export default async () => {
  const pinyins = JSON.parse(fs.readFileSync(_p('../data/pinyins.json')).toString())
  const allWordsCount = pinyins.length
  for (const [i, word] of pinyins.entries()) {
    // (o|ō|ó|ǒ|ò)
    // (a|ā|á|ǎ|à)
    // (e|ē|é|ě|è)
    // (i|ī|í|ǐ|ì)
    // (u|ū|ú|ǔ|ù)
    // (ü|ǖ|ǘ|ǚ|ǜ)
    // (zh|ch|sh|z|c|s)
    // (b|p|m|f|d|t|n|l|j|q|x|y)

    // 十八韵：
    // 一麻，新华字典里的韵母 a、ua、ia 同属一个韵部。 
    const ma = /(u|i)(a|ā|á|ǎ|à)$/　　
    // 二波，韵母 o、uo。
    const bo = /(u|)(ō|ó|ǒ|ò)$/　　　
    // 三歌，韵母 e。 
    const ge = /[^(ü|u|i|y)](e|ē|é|ě|è)$/　　
    // 四皆，韵母 ie、ue。 
    const jie = /(u|i|y)(e|ē|é|ě|è)$/
    // 五支，韵母 i (属 zh、ch、sh、z、c、s 声母，与七齐有别)。 　
    const zhi = /^(zh|ch|sh|z|c|s)(i|ī|í|ǐ|ì)$/
    // 六儿，韵母 er。
    const er = /(e|ē|é|ě|è)r$/　　
    // 七齐，韵母 i (属声母 b、p、m、f、d、t、n、l、j、q、x、y，有别于五支)。 
    const qi = /^(b|p|m|f|d|t|n|l|j|q|x|y)(i|ī|í|ǐ|ì)$/　　
    // 八微，韵母 ei、ui。
    const wei = /((e|ē|é|ě|è)i|u(i|ī|í|ǐ|ì))$/　
    // 九开，韵母 ai、uai。
    const kai = /(u|)(a|ā|á|ǎ|à)i$/
    // 十姑，韵母 u。 　
    const gu = /(u|ū|ú|ǔ|ù)$/　
    // 十一鱼，韵母 v。 
    const yu = /(ü|ǖ|ǘ|ǚ|ǜ)$/
    // 十二侯，韵母 ou、iu。 
    const hou = /(|)u/
    // 十三豪，韵母 ao。 
    const hao = /(a|ā|á|ǎ|à)o$/
    // 十四寒，韵母 an、ian、uan。
    const han = /(u|i|)(a|ā|á|ǎ|à)n$/
    // 十五痕，韵母 en、in、un、vn。 　
    const hen = /((e|ē|é|ě|è)|(i|ī|í|ǐ|ì)|(u|ū|ú|ǔ|ù)|(ü|ǖ|ǘ|ǚ|ǜ))n$/　
    // 十六唐，韵母 ang、uang、iang。 　
    const tang = /(u|i|)(a|ā|á|ǎ|à)ng$/　
    // 十七庚，韵母 eng、ing。 　
    const geng = /((i|ī|í|ǐ|ì)|(e|ē|é|ě|è))ng$/　
    // 十八东，韵母 ong、iong。
    const dong = /(i|)(o|ō|ó|ǒ|ò)ng/
    if (word.pinyin.length >= 2 && word.pinyin[word.pinyin.length - 2][0].match(zhi) && word.pinyin[word.pinyin.length - 1][0].match(ge)) {
      console.log(word.word, word.pinyin)
    }
  }
}