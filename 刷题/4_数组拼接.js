function getNewArr(arr, subLen, count) {
  arr = arr.map(it => it.split(','));
  var a = arr.map(it => it.length);
  var maxLen = Math.max.apply(null, a);
  var loopCount = Math.ceil(maxLen / subLen)
  var res = [];
  for(var i = 0; i < loopCount; i++) {
    for(var j = 0; j < count; j++) {
      var d = arr[j].slice(i*subLen, (i+1)*subLen);
      res.push(...d)
    }
  }
  console.log(res.join(','));
}
getNewArr(['2,5,6,7,9,5,7', '1,7,4,3,4'], 3, 2)