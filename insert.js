/**
 * Created by showzyl on 16/2/21.
 */

'use strict';


// 从无序区的第一个元素开始和它前面有序区的元素进行比较，如果比前面的元素小，那么前面的元素向后移动，否则就将此元素插入到相应的位置。

// demo1
function insertSort(arr){
  let i;
  let j;
  let len = arr.length;
  let tmp;

  for(i=1;i<len;i++){
    tmp = arr[i];
    j = i - 1;
    while (j >= 0 && tmp < arr[j]){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = tmp;
  }
  return arr;
}

console.log( insertSort([99,1,11,25,28,33]) );














