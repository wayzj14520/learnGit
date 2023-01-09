function getCars(str) {
  var arr = str.replace(/,/g, '').split('0').filter(x => x);
  var res = 0;
  arr.forEach(x => {
    var len = x.length;
    if (len === 1 || len === 2) {
      res += 1
    } else {
      var count = parseInt(len / 3);
      res += count;
      var v = len % 3;
      if (v !== 0) res += 1;
    }
  })
  console.log(arr);
  console.log(res);
}
getCars('1,1,0,0,1,1,1,1,0,1,0,1,1,0')