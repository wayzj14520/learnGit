function getMatrixMax(arr) {
  var res = 0;
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var max = 0;
    var data = arr[i].replace(/ /g, '');
    for (var j = 0; j < len; j++) {
      var s = data.substring(j) + data.substring(0, j);
      var v = parseInt(s, 2);
      max = Math.max(max, v);
    }
    res += max;
  }
  console.log(res);
}
getMatrixMax(['1 0 0 0 1', '0 0 0 1 1', '0 1 0 1 0', '1 0 0 1 1', '1 0 1 0 1'])