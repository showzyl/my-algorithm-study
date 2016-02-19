/**
 * Created by showzyl on 16/2/19.
 */

'use strict';

// curl -4 wttr.in/Beijing


function quickSort(arr){
  if(arr.length<=1) return arr;

  // chose middle
  let mid = Math.floor(arr.length / 2);
  //console.log(mid);
  let pivot = arr.splice(mid, 1)[0];
  var left = [];
  var right = [];
  //console.log(pivot);

  for(var i = 0, len = arr.length; i<len;i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat( [ pivot ],quickSort(right) );
}


console.log( quickSort([99,1,11,25,28,33]) );














