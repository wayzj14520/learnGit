/*
  1、从头开始遍历字符，遇到左括号，就将其后边的操作符压入操作符栈中
  2、遇到数字，就将其压入数据栈中（考虑连续数字和负数）
  3、遇到右括号，就从操作符栈中出栈最近的操作符
  4、然后在数据栈中出栈两个数字
  5、通过第3步的操作符和第4步的两个数字进行计算
  6、将第5步的计算结果压入数据栈中
  7、重复执行上述1~6，直到操作符栈为空，输出数据栈的结果即可
*/
function calculate(op, p1, p2) {

  switch (op) {
    case 'add':
      return parseInt(p1) + parseInt(p2);
    case 'sub':
      return parseInt(p1) - parseInt(p2);
    case 'mul':
      return parseInt(p1) * parseInt(p2);
    case 'div':
      return parseInt(p1) / parseInt(p2)
  }
}
function LISP(str) {
  // 操作符栈
  var opStack = [];
  // 数据栈
  var dataStack = [];
  for (var i = 0; i < str.length;) {
    var x = str.charAt(i);
    if (x === '(') {
      // 操作符入栈
      opStack.push(str.substring(i+1, i+4));
      // 修改循环下标并跳过当前循环
      i = i + 4;
      continue;
    }
    // 如果是空格，跳过当前循环
    if (x == ' ') {
      i++;
      continue;
    }
    // 如果是数字，连续读取，并压入数据栈
    if (x === '-' || '0123456789'.includes(x)) {
      var j = i;
      while ('0123456789'.includes(str.charAt(j + 1))) {
        j++;
      }
      dataStack.push(parseInt(str.substring(i, j + 1)));
      i = j + 1;
      continue;
    }
    if (x === ')') {
      // 取出操作符和数据，并将计算结果压入数据栈中`
      var op = opStack.pop();
      var p2 = dataStack.pop();
      var p1 = dataStack.pop();
      if (parseInt(p2) === 0 && op === 'div') {
        console.log('error');
        return;
      }
      var result = calculate(op, p1, p2);
      dataStack.push(result);
      i++;
    }
  }
  if (opStack.length === 0) {
    // 如果操作符栈为空，则输出数据栈结果
    console.log(dataStack.pop());
  } else {
    console.log('error');
  }
}
LISP('(sub (mul 2 4) (div 9 0))')