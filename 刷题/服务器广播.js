function getServer(arr) {
  arr = arr.map(x => x.split(' ').map(x => parseInt(x)));
  var map = new Map();
  var mapKey = 0;
  for (var i = 0; i < arr.length; i++) {
    var isContain = false;
    map.forEach((value, key) => {
      if (value && value.includes(i)) {
        isContain = true;
        mapKey = key;
      }
    })
    if (!isContain) {
      map.set(i, []);
      mapKey = i;
    }
    for (var j = i; j < arr.length; j++) {
      if (i !== j && arr[i][j] === 1) {
        var ddd = map.get(mapKey);
        ddd.push(j)
        map.set(mapKey, ddd);
      }
    }
  }
  console.log(map.size);
}
getServer(['1 0 0', '0 1 0', '0 0 1'])
getServer(['1 1', '1 1'])