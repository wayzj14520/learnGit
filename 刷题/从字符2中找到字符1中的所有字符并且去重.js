function getStr(str1, str2) {
  var arr2 = str2.split('');
  var res = [];
  for (var i = 0; i < str1.length; i++) {
    if (arr2.includes(str1.charAt(i))) {
      res.push(parseInt(str1.charCodeAt(i), 10));
    }
  }
  res = [...new Set(res)]
  res.sort((a, b) => a - b);
  res = res.map(x => String.fromCharCode(x))
  console.log(res);
}
getStr('bbaaccedfg', 'fach');