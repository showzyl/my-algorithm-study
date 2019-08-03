// class Component {
//   constructor() {
//
//   }
//
//   get isReactComponent() {
//     return true
//   }
//
// }
//
// let cm = new Component()
//
// console.log(`is: `, cm.isReactComponent)

// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
// 示例：
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：
// 给定的 n 保证是有效的。
// 进阶：
// 你能尝试使用一趟扫描实现吗？

"use strict"

// let errStr = `:  Error
//     at where (/Users/cengyuanli/Desktop/workspace/my_algorithm_study/scriptoj/46.谁在召唤我？.js:9:22)
//     at main (/Users/cengyuanli/Desktop/workspace/my_algorithm_study/scriptoj/46.谁在召唤我？.js:14:3)
//     at Object.<anonymous> (/Users/cengyuanli/Desktop/workspace/my_algorithm_study/scriptoj/46.谁在召唤我？.js:24:1)
//     at Module._compile (internal/modules/cjs/loader.js:689:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
//     at Module.load (internal/modules/cjs/loader.js:599:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:530:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
//     at startup (internal/bootstrap/node.js:283:19)`
//
// // console.log(`err: `, errStr)
// const reg = /at\s(\w+)\s\(/g
//
// console.log(`err: `, reg.exec(errStr)[1])


// function fn(str) {
//   const reg = /,(\s*\w\s*)+;/ig
//   let s1 = []
//   str.replace(reg, function (a, b) {
//     // console.log(`a: `, a)
//     // console.log(`b: `, b)
//     a = a.replace(/^,(\s*)(\w+)(\s*);$/ig, '$2')
//     console.log(a)
//     console.log(`a:`, a.length)
//     s1.push(`${a}`)
//   })
//   let resStr = s1.join(' ')
//   console.log(`ssssssssss:`, resStr)
// }
//
// console.log(`res: `, fn(' name,      value1 ;name2,  value2     ;'))

// 1, 1, 2, 3, 5, 8, 13, ....


// console.log(`res: `, fibonacci(6))

// function isPalindrome(str) {
//   let len = str.length
//   for (let i = 0; i < len; i++) {
//     if(str[i] !== str[len - i - 1]) return false
//   }
//   return true
// }


// function isPalindrome(str) {
//   return str === str.split('').reverse().join('')
// }
//
// let str = 'cabbac'
//
// console.log(`res: `, isPalindrome(str))
// console.log(`res: `, isPalindrome('adddddda'))
// console.log(`res: `, isPalindrome('addddda'))
// console.log(`res: `, isPalindrome('adddasd'))
//
//


// let commentList = [
//   '刚刚借了1000元，下款真心不错', '就给1000，逗我玩呢，啥都不够干',
//   '连拒10家，就这家给我下款了2000元，虽然不多，但也很感动了', '这么好用的软件怎么不早点开发粗来',
//   '很快，下款快，秒到账', '成功下款3000元', '不上征信，牛牛牛', '额度太低，建议增加高额，这一次几千块根本不够用',
//   '真是太好用了，审核快，放款快，利息也低', '当天申请，当天就下款了', '我用的很舒服，贷款成功了',
//   '手机借钱应急方便贷款额度还好', '不管别人，反正我下款了', '手头紧，到账3000元，当天就放款了',
//   '非常棒的贷款软件，用手机就下款了', '永远支持这个平台，两次借款都通过了', '额度还好，利息挺低，比很多软件强多了',
//   '算是闪电速度了，很赞啊', '好用，不解释', '一款非常舒心的贷款平台', '借钱方便，贷款神速', '临时周转一下，很不错',
//   '而别好的一个小额借钱，贷款很方便', '鉴定完毕，下款3000元，真实的', '只能借到5000元，不过流程挺简单，还是不错的',
//   '希望平台能把额度调高一点，会更满足大众所需', '信用好，速度快，方便，大写的给力', '这软件行，办事妥妥的，1000元已到手',
//   '很方便，不麻烦，不错不错', '我用身份证借到了5000块钱，真的很不错', '就因为通过了，还不上征信，必须给个好评',
//   '不用授权授信，这个是我最看重的地方', '门槛挺低的，审核放款一切都很快', '拒绝套路贷，这款不套路，可以的',
//   'nice，真的事一款特别棒的借款神器，推荐给朋友了', '应急的时候很有帮助，利息挺低', '经常用网贷，很多不下款的，能下款2000已经是很良心了',
//   '信用贷款，有信用就有希望', '试了一下，居然成功了，不错的', '帮我解决了许多烦恼，再也不用担心没钱花了', '只下款1000元，这额度也太低了，够干啥的',
//   '借款额度不高，但是利息很低，可以考虑借', '一款全在线审批的软件，全程透明无瑕疵，挺好', '人终有缺钱的时刻，这个平台帮了我大忙了',
//   '少数真能下款的软件之一', '事实证明，不是骗资料，真的能下款', '爱不爱看结果，只要下款就是好平台', '太好了，这软件解决了生活中的一大难题',
//   '非常强大的借款神器，活动很多，服务也很人性化', '确实贷到了，效率很赞', '注册申请流程都挺简单的，到账也很快', '3000元的额度已拿到，会按时还款的',
//   '朋友推荐的app，安全可靠，审核快', '这下款也太迅速了，那边刚看到审核通过，这边钱就到账了', '真是简单，没想到一张身份证一张脸就搞定了我需要的钱',
//   '审核快，流程简单', '论坛上看到有推荐的，来试试', '手机借钱应急方便贷款额度还好', '贷款平台十分不错哦，再也不愁周转了',
//   '感谢给我下款5000元，真是有急用呀', '一站式服务哈，挺方便的', '放款慢了一会，真的赔偿给我红包了，没想到是真的活动', '喜欢这种纯线上申请的软件，很方便',
//   '帮我默默的度过难关，感谢', '1000元利息才几块钱，可以的', '就他不套路'
// ]
//
// function shuffle(arr) {
//   let len = arr.length - 1
//   while (len >= 0) {
//     let randomIndex = Math.floor((len + 1) * Math.random())
//     _exchange(arr, len, randomIndex)
//     len--
//   }
//   return arr
//
//   function _exchange(arr, i, j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]]
//   }
// }
//
// function TransformArr2Dimension(baseArr, n = 5) {
//   let len = baseArr.length
//   let lineNum = len % n === 0 ? len / n : Math.floor((len / n) + 1)
//   let resArr = []
//   let tempArr = []
//   for (let i = 0; i < lineNum; i++) {
//     tempArr = baseArr.slice(i * n, i * n + n)
//     resArr.push(tempArr)
//   }
//   return resArr
// }
//
// function initCommentUserData({min = 0, max = 48, limit = 5, pages = 3}) {
//   let maxArr = [...Array(max)].map((_, i) => i)
//   let commentArr = TransformArr2Dimension(shuffle(maxArr), limit)
//
//   let limitPages = pages > commentArr.length ? commentArr.length : pages
//   commentArr = commentArr.slice(0, limitPages).map((lists, i) => {
//     return lists.map(item => {
//       return {
//         index: item,
//         comment: `${commentList[item]}`,
//         // iconImg: require(`common/image/logindownload/user-icon/user-icon-${item}.png`),
//       }
//     })
//   })
//   return commentArr
// }
//
//
// // console.log(`res: `, t([1, 2, 3, 4, 5, 6, 7, 8]))
//
// console.log(`res: `, initCommentUserData({
//   max: 48,
//   limit: 5,
//   pages: 5
// }))
// console.log(`[1, 0, 1, 1].filter(x => x): `, [1, 0, 1, 1, false, ' '].filter(x => x && x !== ' '))


// console.log(`1111111111111: `)

// {"length":2,"head":{"val":1,"next":{"val":2,"next":null}}}


class Node {
  constructor(val) {
    // this.val = val
    // this.next = null
    Object.assign(this, {
      val,
      next: null
    })
  }
}

class LinkList {
  constructor() {
    this.length = 0
    this.head = null
  }

  insert(val) {
    let node = new Node(val)
    if (!this.head) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    ++this.length
    return this
  }

  remove(val) {
    let prev = this.head
    let current = this.head.next
    if (!prev) return this

    if(prev.val === val) {
      this.head = current
      --this.length
      return this
    }

    while (prev.next) {
      if (current.val === val) {
        prev.next = current.next
        --this.length
        return this
      }
      prev = current
      current = current.next
    }

    return this
  }

}

let ll = new LinkList()
console.log(`res1: `, JSON.stringify(ll.insert('lizi')))
console.log(`res2: `, JSON.stringify(ll.insert('he')))
console.log(`res3: `, JSON.stringify(ll.insert('yy')))
console.log(`res4: `, JSON.stringify(ll.remove('yy')))









































