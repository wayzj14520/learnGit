function getMinNum(str) {
  var arr = str.split(',');
  arr.sort((a, b) => a - b)
  console.log(arr);
  arr = arr.slice(0, 3);
  arr.sort((a, b) => (a+b) - (b+a))
  console.log(arr.join(''));
}
getMinNum('9,998,12,11,2')
getMinNum('21,30,62,5,31')
getMinNum('5,21')