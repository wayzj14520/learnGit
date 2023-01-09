function getNewArr(str) {
  var arr = str.split(',');
  var resMap = new Map();
  for (var i = 0; i < arr.length; i++) {
    if (!resMap.has(arr[i])) {
      resMap.set(arr[i], 1)
    } else {
      resMap.set(arr[i], resMap.get(arr[i]) + 1)
    }
  }
  var res = [...resMap]
  res.sort((a, b) => b[1] - a[1]);
  res = res.map(x => x[0])
  console.log(res);
}
getNewArr('4,1,3,3,3,2,4,4,5')