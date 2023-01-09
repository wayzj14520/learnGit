let str = ['a','bc', 'ab']
let res = []
function swap(i, j) {
  if (i == j) {
    return
  }
  let temp = str[i]
  str[i] = str[j]
  str[j] = temp
}
function Permutation(from, to) {
  // 依次将各个位置上的字符与第一个字符进行互换位置，被换到第一个位置的字符将作为固定部分
  for (let i = from; i < to; i++) {
    swap(i, from)
    // 将每一种情况保存到 res 里面
    if (!res.includes(str.join(''))) {
      res.push(str.join(''))
    }
    // 递归
    Permutation(from + 1, to)
    // 将互换的两个字符重新换回来，保证每依次循环以后将数据恢复到最初状态
    swap(i, from)
  }
}
Permutation(0, str.length)
console.log(res)
