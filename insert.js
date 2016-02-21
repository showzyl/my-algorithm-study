/**
 * Created by showzyl on 16/2/21.
 */

'use strict';


// 从无序区的第一个元素开始和它前面有序区的元素进行比较，如果比前面的元素小，那么前面的元素向后移动，否则就将此元素插入到相应的位置。

// demo1
function insertSort(arr){
  console.log(arr)
  let i;
  let j;
  let len = arr.length;
  let tmp;

  for(i=1;i<len;i++){
    tmp = arr[i];
    j = i - 1;

    //console.log(j);
    //console.log(tmp);
    while (j>=0 && tmp < arr[j]){
      console.log(tmp, arr[j],arr[j+1]);
      arr[j+1] = arr[j];
      j--;
      //console.log(j)
    }
    arr[j+1] = tmp;
    //console.log(tmp)
  }
  return arr;
}


//// demo2
//function insertSort (arr) {
//  let len = arr.length;
//
//  if (len <= 1) {
//    return arr;
//  }
//
//  // 1~n-1趟排序
//  for (var i = 1; i < len; i++) {
//    let tmp = arr[i];
//    for (var j = i; j > 0 && arr[j - 1] > tmp; j--) {
//      console.log(j, arr[j - 1])
//      console.log(arr[j])
//      //console.log(arr[j])
//      //console.log(tmp);
//      arr[j] = arr[j - 1];
//    }
//    //console.log(arr[j])
//    arr[j] = tmp;
//  }
//
//  return arr;
//}

//console.log( insertSort([-10,99, 102,3,28,33,1,10]) );
console.log( insertSort([102, 99,3]) );


// 99 102 3
// 3 99 102

// 3 102 99
// 99 102 3
// 3 99 102










