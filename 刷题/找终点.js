function getFinal(str) {
  var arr = str.split(' ').map(x => parseInt(x, 10));
  var len = arr.length;
  var step = 0;
  var count = 0;
  var x = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < len / 2 - 1; i++) {
    step = i;
    count = 1;
    while(step < arr.length - 1) {
      step += arr[step];
      count++;
    }
    if (step === arr.length - 1) {
      x = Math.min(x, count)
    }
  }
  if (x === Number.MAX_SAFE_INTEGER) {
    console.log('-1');
  } else {
    console.log(x);
  }
}
getFinal('1 2 3 7 1 5 9 3 2 1')
getFinal('7 5 9 4 2 6 8 3 5 4 3 9')