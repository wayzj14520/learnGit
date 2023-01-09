function qujianjihe(input) {
  input = input.split(' ').map(x => parseInt(x, 10));
  var arr = [];
  for (var i = 0; i < input.length; i+=2) {
    var item = input.slice(i, i+2);
    arr.push(item);
  }
  arr.sort((a, b) => a.join('') - b.join(''));
  // 求交集
  var jiaojiArr = [];
  for(var m = 0; m < arr.length; m++) {
    for(var n = m + 1; n < arr.length; n++) {
      var left = Math.max(arr[m][0], arr[n][0]);
      var right = Math.min(arr[m][1], arr[n][1]);
      if (right >= left) {
        jiaojiArr.push([left, right]);
      }
    }
  }
  jiaojiArr.sort((a, b) => a.join('') - b.join(''));

  // 求交集的并集
  var res = [];
  var left1, right1;
  for(var i = 0; i < jiaojiArr.length; i++) {
    left1 = jiaojiArr[i][0]
    right1 = jiaojiArr[i][1]
    for (var j = i+1; j < jiaojiArr.length; j++) {
      if (jiaojiArr[j] === 0) {
        continue;
      }
      if (jiaojiArr[j][0] > right1) {
        break;
      }
      right1 = jiaojiArr[j][1];
      jiaojiArr[j] = 0;
    }
    res.push(left1,right1)
  }
  res = res.filter(x => x).join(' ')
  console.log(arr);
  console.log(res);
}
qujianjihe('1 3 2 4 4 8 5 9')
qujianjihe('1 6 2 5 5 7')