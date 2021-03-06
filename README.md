### my_algorithm_study

[实现文章内容](http://www.jianshu.com/p/7e6589306a27)

[掘金文章](https://juejin.im/post/594dfe795188250d725a220a)

### 数据结构

* 栈：先入后出
* 队列：先入先出
* 字典：Object
* 链表：存储有序的元素结构，类似数组，在内存不连续放置;
* 集合：由一组无序且唯一的项组成;
* 散列：根据(key/value)直接进行访问的数据结构;他通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度；这个映射函数叫散列函数，存放记录的数组叫散列表;
* 树：由n(n>=1)个有限节点组成有层次关系的集合;
```
二叉树中的节点最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点。
`二叉搜索树(BST)`：只允许你在左侧节点存储（比父节点）小的值， 在右侧节点存储（比父节点）大（或者等于）的值。
中序遍历：从最小到最大的顺序访问所有节点
先序遍历：以优先于后代节点的顺序访问每个节点的。（打印一个结构化的文档）
后序遍历：先访问节点的后代节点，再访问节点本身。（计算一个目录和它的子目录中所有文件所占空间的大小）
AVL树/红黑树
```
* 图：图是网络结构的抽象模型，任何二元关系都可以用图表示; 道路图、关系图; 呈多对多关系;

```
深度优先搜索(dfs)：「桟」，通过将顶点存入桟中，顶点是沿着路径被探索的，存在新的相邻顶点就去访问
  循环中做的是 push => pop => push => pop
广度优先搜索(bfs)：「队列」，通过将顶点存入队列中，最先入队列的顶点先被探索
  循环中做的是push => shift => push => shift
```

### 算法

- 冒泡排序 O(n²)

```
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 1; j < i; j++) {
      if(arr[j - 1] > arr[j]){
        swap(arr, j - 1, j)
      }
    }
  }
  return arr
}

function swap(arr, i, j){
  let tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}
```

- 选择排序 
> 思路是找到最小的放第一位，第二小的第二位，依次类推

```
function selectSort(arr) {
  let minIndex
  for(let i=0;i<arr.length-1;i++){
    minIndex = i
    for(let j=i;j<arr.length;j++){
      if(arr[minIndex] > arr[j]){
        minIndex = j
      }
    }
    if(i !== minIndex){
      let tmp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = tmp
    }
  }
}
```

- 插入排序
> 
```
function insert(arr) {
  let j
  let temp
  for (let i = 1; i < arr.length; i++) {
    j = i
    temp = arr[i]
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    } 
    arr[j] = temp
  }
  return arr
}
```

- 归并排序 O(nlog^n)
> 递归把数组分为两个子数组，一直递归到数组中只有一个元素，然后调用函数把两个子数组排序，最后两数组合并

- 快速排序

> 



### 递归如何处理问题
```
if(问题足够简单){
  直接解决
}else{
  将问题拆解成和原问题有相同结构的更小问题
  解决每个这样的更小问题
  将这些最小问题的解合并
  返回整个结果
}
```

### 决策树

```
`枚举问题`可以转化为`决策问题`
if(所有决策都完成){
    返回结果
}
根据当前状态算出所有可能的决策
递归调用这些决策
收集递归的结果，返回
```

### 回溯算法
``` 
function backTracking() {
   if(到达终点) 返回路径
   找到所有没有走过的选择
   递归前往每个选择
}
```

### 指数级循环

```
// 2^0  2^1  2^2  2^3
for (let i = 1; i < 10; i+=i) {
  console.log(`i: `, i)
}
```


```

// 二分查找
// 冒泡排序
// 插入排序

// 快速排序
// 合并排序
// 桶排序
// 基数排序
// 计数排序

// 斐波那契数列

// 枚举子集
// 全排列（递归版本 & 交换版）
// 组合

// 回溯
// 搜索问题（8皇后）
// 深度优先搜索
// 广度优先搜索

// 堆排序

```




