/* 

最长的指定瑕疵度的元音子串 | 时间限制：1秒 | 内存限制：262144K | 语言限制：不限
开头和结尾都是元音字母（aeiouAEIOU）的字符串为 元音字符串 ，其中混杂的非元音字母数量为其 瑕疵度 。比如:
· “a” 、 “aa”是元音字符串，其瑕疵度都为0

· “aiur”不是元音字符串（结尾不是元音字符）

· “abira”是元音字符串，其瑕疵度为2

给定一个字符串，请找出指定瑕疵度的最长元音字符子串，并输出其长度，如果找不到满足条件的元音字符子串，输出0。

子串：字符串中任意个连续的字符组成的子序列称为该字符串的子串。
*/

// 解法： 通过双指针
function getLongestFlawedVowelSubstrLen(flaw, str) {
  str = str.toLowerCase();
  var vowel = 'aeiou';
  var left = 0;
  var right = 0;
  var currentFlaw = 0;
  var max = 0;
  while (right < str.length - 1) {
    right += 1;
    if (!vowel.includes(str[right])) {
      currentFlaw += 1;
    }
    while (currentFlaw > flaw) {
      if (!vowel.includes(str[left])) {
        currentFlaw -= 1;
      }
      // 这步会提前到达下一个点，可能会超范围
      left += 1;
    }

    if (left < str.length && currentFlaw === flaw && vowel.includes(str[left]) && vowel.includes(str[right])) {
      max = Math.max(max, right + 1 - left);
    }
  }
  return max;
}
console.log(getLongestFlawedVowelSubstrLen(0, 'asdbuiodevauufgh'));
console.log(getLongestFlawedVowelSubstrLen(2, 'aeueo'));
console.log(getLongestFlawedVowelSubstrLen(1, 'aabeebuu'));