/**
 * https://leetcode-cn.com/explore/interview/card/top-interview-questions-easy/5/strings/32/
 */


// function merge(A, l, m, r) {
//   const A1 = A.slice(l, m) // left
//   const A2 = A.slice(m, r) // right
//   A1.push(Number.MAX_SAFE_INTEGER)
//   A2.push(Number.MAX_SAFE_INTEGER)
//   for (let k = l, i = 0, j = 0; k < r; k++) {
//     if (A1[i] < A2[j]) {
//       A[k] = A1[i++]
//     } else {
//       A[k] = A2[j++]
//     }
//   }
//   return A
// }

// function merge2(nums1, m, nums2, n) {
//   console.log(`nums1: `, nums1);
//   let l = 0, r = m + n;
//   const A1 = nums1.slice(l, m) // left
//   const A2 = nums2.slice(l, n) // right
//
//   // A1.push(Number.MAX_SAFE_INTEGER)
//   // A2.push(Number.MAX_SAFE_INTEGER)
//   for (let k = l, i = 0, j = 0; k < r; k++) {
//     if (A1[i] < A2[j]) {
//       nums1[k] = A1[i++]
//     } else {
//       nums1[k] = A2[j++]
//     }
//   }
//   console.log(`nums1: `, nums1)
//   return nums1
// }

// function merge3(nums1, m, nums2, n) {
//   let p = m-- + n-- - 1;
//   while (m >= 0 && n >= 0) {
//     nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
//   }
//
//   while (n >= 0) {
//     nums1[p--] = nums2[n--];
//   }
//   console.log(`nums1: `, nums1)
// }

// let nums1 = [1, 2, 3, 0, 0, 0], m = 3
// let nums2 = [2, 5, 6], n = 3
//
// console.log(`rest: `, merge2(nums1, m, nums2, n))

// function a(x) {
//   let resultArr = [];
//   let intToStr = x.toString();
//   for (let i = intToStr.length - 1; i > 0; i--) {
//     resultArr.push(intToStr[i]);
//   }
//   if (intToStr[0] === '-') {
//     resultArr.unshift("-");
//   }
//   resultArr.push(intToStr[0]);
//   let resultNum = parseInt(resultArr.join(""));
//   if (resultNum <= Math.pow(-2, 31) || resultNum >= Math.pow(2, 31) - 1) {
//     return 0;
//   }
//   return resultNum;
// }
//
// let x = 123;
// console.log(`all: `, a(x))

// 输入: haystack = "hello", needle = "ll"
// 输出: 2

// let haystack = 'hello', needle = 'll';


// let s = 4
// 返回 0.

// let s = "loveleetcode"
// 返回 2.


// const countAndSay = function (n) {
//     if (n === 1) return '1';
//     let intstr = '11';
//     let count = 1;
//     let s_temp = '';
//     for (let i = 2; i < n; i++) {
//       console.log(`i: `, i)
//       for (let j = 1; j < intstr.length; j++) {
//         if (intstr[j] === intstr[j - 1]) {
//           count++;
//         } else {
//           s_temp = s_temp + count + intstr[j - 1];
//           console.log(`in s_temp: `, s_temp)
//           count = 1;
//         }
//         if (j === intstr.length - 1) {
//           s_temp = s_temp + count + intstr[j];
//           console.log(`s_temp: `, s_temp)
//         }
//       }
//       count = 1;
//       intstr = s_temp;
//       s_temp = '';
//     }
//     return intstr;
//
//   }
//
//
// let s = 4
// console.log(`res: `, countAndSay(s))


// 如何在一个有序数组中插入一个新值
// let arr = [1, 2, 5, 8, 10, 11, 15, 20, 100]
// let arr = [20, 5, 100, 15, 10, 0, 6]
// let x = 3
//
// const Linkedlist = require('./linkedlist')
// // console.log(`linkedlist: `, Linkedlist)
//
// let l1 = new Linkedlist()
// l1.append(1)
// l1.append(2)
// l1.append(4)
//
// let l2 = new Linkedlist()
// l2.append(1)
// l2.append(3)
// l2.append(4)
//
// console.log(`l1: `, l1)
// console.log(`l2: `, l2)
// // let a1 = [2, 10, 20]
// // let a2 = [1, 3, 9, 11, 21]
//
// // let a = a1.concat(a2)
// // let a = [10, 2, 5]
//
// function merge(a, l, m, r) {
//
// }
//
// function mergeSort(a, l, r) {
//
// }

// console.log(`a: `, a.length)
// console.log(`res: `, mergeSort(a, 0, a.length - 1))
//
// console.log(`res: `, merge(a, 0, 3, 8))
// console.log(`res: `, merge(a, 0, 1, 3))


//
// let pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // reject(1)
//     reject(22222222222)
//   }, 1000)
// })
//
//
// pr.then((result) => {
//   console.log(`result1: `, result)
// }).then((result) =>{
//   console.log(`result2: `, result)
// }).catch((err) => {
//   console.log(`err: `, err)
// })


// // Async / Await
// const asyncGreeting = async () => 'Greetings1';
//
// // Promise
// const promiseGreeting = () => new Promise(((resolve) => {
//   resolve('Greetings2');
// }));
// asyncGreeting().then(result => console.log(`result1： `, result));
// promiseGreeting().then(result => console.log(`result2： `,result));
//
//

// let myGenerator1 = generator(`boom`)
// console.log(`res1: `, myGenerator1.next()) // b
// console.log(`res2: `, myGenerator1.next()) // o


// function generator(str) {
//   let i = 0
//   return {
//     next: function () {
//       return str[i++]
//     }
//   }
// }

// let mathLib = {
//     pi: 3.14,
//     area(r) {
//       console.log(`this: `, this)
//       return this.pi * r
//     },
//     circumference() {
//       return 2 * this.pi * r
//     }
//   }
//
//   let mathLibInstance = mathLib
//
// mathLibInstance = {
//   pi: 3.1415926,
//   area(r){
//     console.log(`this.pi * r: `, this.pi * r)
//     return (this.pi * r).toFixed(5)
//   }
// }
// console.log(`mathLib: `, mathLib)
// let res = mathLibInstance.area(2)

// let res = mathLib.area.call({
//   pi: 3.1415926,
//   area(r){
//     console.log(`this.pi * r: `, this.pi * r)
//     return (this.pi * r).toFixed(5)
//   }
// }, 2)

// console.log(`res: `, res)

// let mathLibInstance = Object.assign({}, mathLib, {
//   pi: 3.14159,
//   area(r) {
//     return (this.pi * r).toFixed(5)
//   },
// })
// console.log(`mathLib: `, mathLib)
// console.log(`res: `, mathLibInstance.area(2))
//


// const a = [1,2,3,4,5]
// Array.prototype.multiply = function () {
//   // let res = this.concat(this.map(item => item * item))
//   // this.map(item => item * item)
//   // console.log(`res: `, res)
//   // console.log(`this: `, this)
//   // this.map(item => item * item)
//   return this.push(...this.map(v => v * v))
// }
// a.multiply()
// console.log(a)


// let a1 = [1, 3, 5, 10]
// let a2 = [2, 4, 6]
// let a1 = [2, 4]
// let a2 = [1, 3, 5]
//
// let a = a1.concat(a2)
// let a4 = [3, 27, 38, 43, 9, 10, 82]
// let a5 = [20, -10, 100, 5, 2, 8]
//
// function mergeSort(a, l, r) {
//   if (r - l < 2) return
//   let m = Math.ceil((l + r) / 2)
//   console.log(`m: `, m)
//   mergeSort(a, l, m)
//   mergeSort(a, m, r)
//   merge(a, l, m, r)
//   console.log(`a: `, a)
// }
//
//
// console.log(`res: `, mergeSort(a5, 0, a5.length))
//
//


// function merge(A, l, m, r) {
//   const A1 = A.slice(l, m) // left
//   const A2 = A.slice(m, r) // right
//   A1.push(Number.MAX_SAFE_INTEGER)
//   A2.push(Number.MAX_SAFE_INTEGER)
//   for (let k = l, i = 0, j = 0; k < r; k++) {
//     if (A1[i] < A2[j]) {
//       A[k] = A1[i++]
//     } else {
//       A[k] = A2[j++]
//     }
//   }
//   console.log(`res: `, A)
// }

// const A = [1, 3, 5, 2, 4, 6]
// const B = [2, 4, 6, 1, 3, 5]
// const C = [2, 1]

// merge(A, 0, 3, 6)
// merge(B, 1, 3, 5) // [ 2, 1, 3, 4, 6, 5 ]
// merge(C, 0, 1, 2)


// class LinkedList {
//   constructor(val) {
//     this.head = null
//     this.length = 0
//   }
//
//   append(item) {
//     let node = new Node(item)
//     if (this.head === null) {
//       this.head = node
//     } else {
//       let current = this.head
//       while (current.next) {
//         current = current.next
//       }
//       current.next = node
//     }
//     this.length++
//     return this
//   }
//
//   findPos(index) {
//     let current = this.head
//     // console.log(`current: `, current)
//     if (current === null) {
//       throw new Error(`This LinkedList is empty!`)
//     } else {
//       let i = 0
//       while (current) {
//         if (i === index) {
//           return current.val
//         }
//         current = current.next
//         i++
//       }
//     }
//   }
//
//   // 在任意位置插入一个元素
//   insert(pos, val) {
//     // 处理边界
//     if (pos < 0 || pos > this.length) return false
//     let node = new Node(val)
//     let current = this.head
//     let index = 0
//
//     if (pos === 0) {
//       this.head = node
//       if (current) node.next = current
//     } else {
//       let pre
//       while (index++ < pos) {
//         pre = current
//         current = current.next
//       }
//       node.next = current
//       pre.next = node
//     }
//     this.length++
//     return true
//   }
//
// }
//
// class Node {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }
//
//
// let arr1 = [1, 2, 4];
// let arr2 = [1, 3, 4];
// let list1 = new LinkedList();
// let list2 = new LinkedList();
//
// arr1.forEach(function (key) {
//   list1.append(key);
// })
//
// arr2.forEach(function (key) {
//   list2.append(key);
// })
//
// // console.log(`list1: `, list1)
// // console.log(`list2: `, list2)
//
//
// function mergeTwoLists(l1, l2) {
//   let i = 0, j = 0, k = 0
//   let resLinkedList = new LinkedList()
//
//   while (i < l1.length && j < l2.length) {
//     if (l1.findPos(i) < l2.findPos(j)) {
//       resLinkedList.append(l1.findPos(i++))
//     } else {
//       resLinkedList.append(l2.findPos(j++))
//     }
//   }
//   while (i < l1.length) {
//     resLinkedList.append(l1.findPos(i++))
//   }
//   while (j < l2.length) {
//     resLinkedList.append(l2.findPos(j++))
//   }
//
//   console.log(`resLinkedList: `, JSON.stringify(resLinkedList))
//   return resLinkedList
// }
//
// class ListNode {
//   constructor(val) {
//     this.val = val
//     this.next = null
//   }
// }
//
// function mergeTwoLists(l1, l2) {
//   let newListNode = new ListNode(null);
//   let temp = newListNode;
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       temp.next = l1;
//       l1 = l1.next;
//     } else {
//       temp.next = l2;
//       l2 = l2.next;
//     }
//     temp = temp.next;
//   }
//   temp.next = l1 || l2;
//   console.log(`newListNode: `, JSON.stringify(newListNode))
//   return newListNode.next
// }
//
// console.log(`res: `, JSON.stringify(mergeTwoLists(list1, list2)))
// console.log(`list1: `, JSON.stringify(list1))
// console.log(`list2: `, JSON.stringify(list2))


// 有时候我们需要访问一个对象较深的层次，但是如果这个对象某个属性不存在的话就会报错，例如：
//
// var data = { a: { b: { c: 'ScriptOJ' } } }
// data.a.b.c // => scriptoj
// data.a.b.c.d // => 报错，代码停止执行
// console.log('ScriptOJ') // => 不会被执行
// 请你完成一个 safeGet 函数，可以安全的获取无限多层次的数据，一旦数据不存在不会报错，会返回 undefined，例如：
//
// var data = { a: { b: { c: 'ScriptOJ' } } }
// safeGet(data, 'a.b.c') // => scriptoj
// safeGet(data, 'a.b.c.d') // => 返回 undefined
// safeGet(data, 'a.b.c.d.e.f.g') // => 返回 undefined
// console.log('ScriptOJ') // => 打印 ScriptOJ


// const safeGet = (data, path) => {
//   let aTmp = path.split('.')
//   console.log(`aTmp: `, aTmp)
//   return aTmp.reduce((acc, item) => {
//     console.log(`acc: `, acc)
//     return acc[item]
//   }, data)
// }


// // let data = {a: {b: {c: 'ScriptOJ'}}}
// let data = {"q":{"w":{"e":{"r":{"t":{"y":"ScriptOJ"}}}}}}
// safeGet(data, 'q.w.e.r.t.y.u.i.o.p.a.s') // => scriptoj


// const shuffle = (arr) => {
//   // let len = arr.length
//   // let randomIndex
//   //
//   // while (len) {
//   //   randomIndex = Math.floor(Math.random() * (len--))
//   //   swap(arr, len, randomIndex)
//   // }
//   // console.log(`arr: `, arr)
//   // return arr
//
//   let len = arr.length
//   for (let i = 0; i < len; i++) {
//     let randomIndex = Math.round(Math.random() * ( len - 1 - i)) + i
//     console.log(`randomIndex: `, randomIndex)
//     swap(arr, i, randomIndex)
//   }
//   return arr
// }
//
// function swap(arr, i, j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]]
// }
//
// let x = [1, 2, 3, 4, 5]
// console.log(shuffle(x))


// let a1 = [1, 10, 20, 50]
// let a2 = [10, 100, 200]
//
// function findArr(a1, a2) {
//   let aRes = []
//   // for (let i = 0; i < a1.length; i++) {
//   //   for (let j = 0; j < a2.length; j++) {
//   //     if(a1[i] === a2[j]) aRes.push(a1[i])
//   //   }
//   // }
//   for (let i = 1; i < a1.length; i++) {
//     let p = i - 1
//     while (1) {
//
//     }
//   }
// }
//
//
// findArr(a1, a2)


// 完成一个函数 partition3way，它接受一个数组作为参数。它会搬动数组中的元素，使得所有小于第一个项的元素都搬动到它的左边，所有大于第一个项的元素都搬动到右边，等于它的都放在中间。例如：
//
// const arr = [3, 1, 3, 6, 2, 3, 4, 5]
// partition3way(arr)
// console.log(arr) // => [2, 1, 3, 3, 3, 6, 4, 5] or [1, 2, 3, 3, 3, 4, 5, 6]


// function debounce(fn,delay){
//
//   let timer = null //借助闭包
//
//   return function() {
//
//     if(timer){
//
//       clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时
//
//       timer = setTimeOut(fn,delay)
//
//     }else{
//
//       timer = setTimeOut(fn,delay) // 进入该分支说明当前并没有在计时，那么就开始一个计时
//
//     }
//
//   }
//
// }


// let o = {
//   name: 123
// }
//
// // let fun = function a() {
// //   console.log(`name: `, this.name)
// // }.bind(o)
// //
// // fun()
//
// Function.prototype._bind = function (arg) {
//   const ctx = this
//   return function () {
//     ctx.call(arg)
//   }
// }
//
// let fun = function a() {
//   console.log(`name: `, this.name)
// }._bind(o)
//
// fun()


// 现在有一个数组存放字符串数据：
//
// ['item1', 'item2', 'item3', 'item4', 'item5']
// 有另外一个数组存放一组对象：
//
// [
//   { content: 'section1', index: 0 },
//   { content: 'section2', index: 2 }
// ]
// 它每个对象表示的是会往原来的数组的 index 坐标插入 content 数据（index 不会重复）：
//
//        0      1      2      3      4
// item1  itme2  item3  item4  item5
// ^             ^
// |             |
// section1     section2
//
// 最后结果是：['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']
// 请你完成 injectSections 函数，可以达到上述的功能：
//
// injectSections(
//   ['item1', 'item2', 'item3', 'item4', 'item5'],
//   [
//     { content: 'section1', index: 0 },
//     { content: 'section2', index: 2 }
//   ]
// ) // => ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']

// const injectSections = (items, sections) => {
//   // console.log(`items: `, items)
//   // console.log(`sections: `, sections)
//   if(!sections.length) return items
//   sections.map(item => {
//     let index = item.index
//     let content = item.content
//     for (let i = 0; i < items.length; i++) {
//       if(i === index){
//         let tmp = items.slice(index)
//         console.log(`tmp: `, tmp)
//         items.length = i + 1
//         items[i] = content
//         console.log(`items: `, items)
//         items = items.concat(tmp)
//       }
//     }
//     console.log(`items: `, items)
//   })
// }
//
// // injectSections(
// //   ['item1', 'item2', 'item3', 'item4', 'item5'],
// //   [
// //     { content: 'section1', index: 0 },
// //     { content: 'section2', index: 2 }
// //   ]
// // ) // => ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']
//
// // ["item1","item2","item3","item4"]
//
//
// // ["item1","item2"]
//   //
//   // []
//
// injectSections(
//   ["item1","item2","item3","item4"] ,
//   [
//     { content: 'section1', index: 0 }
//   ]
// )


// const toCamelCaseVar = (variable) => /* TODO */
// {
//   return variable.replace(/_+[a-zA-Z]/g,(m, i) => {
//     if(i) return (m.match(/[a-zA-Z]/)[0].toUpperCase());
//     else return m;
//   })
// }


// console.log(`res: `, toCamelCaseVar('_this__is_my__name_'))
// console.log(`res: `, toCamelCaseVar('this_is_my_name'))
// console.log(`res: `, toCamelCaseVar('this__is_my__name'))
// console.log(`res: `, toCamelCaseVar('__thisIs_myName'))


  // const reg = /?<!^)(?<!\d+)\d+(?!\d+)(?!$/g


// const toCamelCaseVar = (variable) => /* TODO */ {
//     return variable.replace(/_+[a-zA-Z]/g, (m, i) => {
//       console.log(`m: `, m)
//       console.log(`i: `, i)
//       if (i) {
//         return (m.match(/[a-zA-Z]/)[0].toUpperCase())
//       } else {
//         return m
//       }
//     })
//   }

// class A {
//
// }
//
// const singletonify = fn => {
//   const one = new fn()
//   console.log(`fn: `, fn)
//   console.log(`one: `, one)
//   return new Proxy(fn, {
//     construct(target, argumentsList, newTarget) {
//       return one
//     }
//   })
// }
//
// const SingleA = singletonify(A)
//
// let a = new SingleA()
// let b = new SingleA()
// console.log(`a === b: `, a === b)






















