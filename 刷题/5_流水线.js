/* 
 m 条流水线， 来并行完成n个任务，优先处理耗时最少的任务
*/
function getMinTime(m, n, arr) {
  if (m >= n) {
    return Math.max.apply(null, arr);
  } 
  var loop = Math.ceil(n / m);
  var index = n % m === 0 ? m : n % m;
  var time = 0;
  arr.sort((a, b) => a - b);
  for (var i = 0; i < loop; i++) {
    var item = arr.slice(i*m, (i+1)*m);
    time += item[index - 1];
  }
  return time;
}
console.log(getMinTime(3,8, [8,4,3,2,10,11, 6, 9]));
console.log(getMinTime(5, 4, [8,4, 6, 9]));