/* 
 同一个数轴x有两个点的集合A={A1,A2,...,Am}和B={B1,B2,...,Bm}  A(i)和B(j)均为正整数
 A、B已经按照从小到大排好序，AB均不为空
给定一个距离R 正整数，列出同时满足如下条件的(A(i),B(j))数对
1. A(i)<=B(j)
2. A(i),B(j)之间距离小于等于R
3. 在满足1，2的情况下每个A(i)只需输出距离最近的B(j)
4. 输出结果按A(i)从小到大排序

输入描述
第一行三个正整数m n R
第二行m个正整数 表示集合A
第三行n个正整数 表示集合B

输入限制
1<=R<=100000
1<=n,m<=100000
1<= A(i),B(j) <= 1000000000

输出描述
每组数对输出一行 A(i)和B(j)，以空格隔开

示例一
输入
4 5 5
1 5 5 10
1 3 8 8 20

输出
1 1
5 8
5 8

*/

function getDiff(arr1, arr2, r) {
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = index; j < arr2.length; j++) {
      // 因为数组是从小到大有序的，而且要求输出距离最近的Bj,所以只要满足条件就输出，然后break
      if (arr1[i] <= arr2[j] && arr2[j] - arr1[i] <= r) {
        index = j + 1;
        console.log(arr1[i] + ' ' + arr2[j]);
        break;
      }
    }
  }
}
getDiff([1, 5, 5, 10], [1, 3, 8, 8, 20], 5)


function different() {
  
}