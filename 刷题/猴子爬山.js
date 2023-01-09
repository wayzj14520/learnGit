function getCount(num) {
  num = parseInt(num, 10);
  if (num === 1 || num === 2) {
    return 1;
  }
  if (num === 3) {
    return 2;
  }
  return getCount(num - 1) + getCount(num - 3);
}
console.log(getCount(50));