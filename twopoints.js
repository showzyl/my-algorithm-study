/**
 * Created by showzyl on 16/2/22.
 */
'use strict';


function twopoints(arr){
  var len = arr.length,
    i, j, tmp, low, high, mid;

  for(i=1; i<len; i++){
    tmp = arr[i];
    low = 0;
    high = i - 1;
    while(low <= high){
      mid = (low+high)/2;
      if(tmp < arr[mid]) high = mid - 1;
      else low = mid + 1;
    }
    for(j=i-1; j>=high+1; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = tmp;
  }

  return arr;
}

console.log( twopoints([99,1,11,25,28,33]) );