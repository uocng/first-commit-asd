var arr = [1, 6, 3, 4, 5];
var len = arr.length;
for (var i = 0; i < len - 1; i++) {
  for (var j = 0; j < len - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      // Hoán đổi giá trị
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr); // In mảng đã sắp xếp
