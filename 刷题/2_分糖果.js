/* 
 小明从糖果盒里随机抓一把糖果，每次小明都会取出一半分给同学们
 当糖果不能均分时，小明可以从糖果盒里取出一个或放回一个。
 小明最少需要多少次（取出、放回、均分各记一次），能将手中的糖分至只剩一颗

 例如：
 输入 15
 则 输出 5
 备注： 15+1 = 16； 16/2 = 8; 8/2 = 4; 4/2 = 2; 2/2 = 1;
*/
var list = [];
function getCount(num, count) {
  if (num === 1) {
    list.push(count);
    return;
  }
  if (num % 2 === 0) {
    count++;
    getCount(num / 2, count);
  } else {
    count++;
    getCount(num+1, count);
    getCount(num-1, count);
  }
  return;
}
getCount(8, 0)
console.log(Math.min.apply(null, list));