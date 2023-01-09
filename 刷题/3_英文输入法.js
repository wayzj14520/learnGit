function getChar(str, key) {
  var reg = new RegExp('\\W', 'g')
  str = str.replace(reg, ' ');
  console.log(str);
  var arr = str.split(' ');
  var res = arr.filter(it => it.startsWith(key));
  if (res && res.length) {
    res.sort();
  } else {
    res = [key]
  }
  console.log(res.join(' '));
}
getChar('I love You,I like her,I don^t enjoy it', 'l')