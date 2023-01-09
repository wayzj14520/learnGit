function getMinSum(str) {
  var arr = str.split(' ').map(x => parseInt(x, 10));
  var min = Number.MAX_SAFE_INTEGER;
  var list = [];
  for (var i = 0; i < arr.length; i++) {
    var l = arr[i];
    for (var j = i+1; j < arr.length; j++) {
      var r = arr[j];
      var m = Math.abs(l + r);
      min = Math.min(min, m);
      list.push([l, r])
    }
  }
  var res = '';
  list.forEach(d => {
    var v = Math.abs(d[0] + d[1]);
    if (v === min) {
      res += d.join(' ')
    }
  })
  res += ' ' + min;
  console.log(min);
  console.log(res);
}
getMinSum('-1 -3 7 5 11 15');
getMinSum('1 2 3 4 2 -6');