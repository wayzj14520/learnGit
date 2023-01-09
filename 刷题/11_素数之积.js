
function getPrime(str) {
  var n = parseInt(str, 10)
  var m = 0;
  var list = [];
  while(m !== n) {
    n = m !== 0 ? m : n;
    for(var i = 2; i < Math.sqrt(n) + 1; i++) {
      if (n % i === 0) {
        m = n / i;
        list.push(i);
        break;
      }
    }
  }
  list.push(m);
  if (list.length === 2) {
    console.log(list.join(' '));
  } else {
    console.log('-1 -1');
  }
}
getPrime(27)