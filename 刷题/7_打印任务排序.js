/* 
某个打印机根据打印队列执行打印任务。打印任务分为九个优先级，分别采用数字1~9表示，数字越大优先级越高。打印机每次从队列头部取出第一个任务A，然后检查队列余下任务中有没有比A优先级更高的任务，如果有比A优先级高的任务，则将任务A放到队列尾部，否则执行任务A的打印。请编写一个程序，根据输入的打印队列，输出实际打印顺序。
*/
function printPrinter(str) {
  let arr = str.split(",");
  let arr2 = [...arr];
  arr2.sort((a, b) => b-a); // 降序排序
  let indexArr = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    let index = arr2.indexOf(arr[i]);
    indexArr[i] = index;
    arr2[index] = undefined; // 防止重复的元素
  }
  // 输出的实际的打印顺序，0 表示第一个打印
  console.log(indexArr.join());
}
printPrinter('1,2,2') // 2，0，1