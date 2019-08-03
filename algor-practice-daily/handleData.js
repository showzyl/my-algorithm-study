// 把 ary => newAry

const ary = [
  {
    type: 1,
    name: 'Ryan'
  },
  {
    type: 1,
    name: 'Center'
  },
  {
    type: 2,
    name: 'Lily'
  }
]

const newAry = [
  {
    list: [{
      type: 1,
      name: 'Ryan'
    }, {
      type: 1,
      name: 'Center'
    }]
  },{
    list: [{
      type: 2,
      name: 'Lily'
    }]
  }
]




//
//
// const map = ary.reduce((acc, item) => {
//   acc[item.type] = acc[item.type] || []
//   acc[item.type].push(item)
//   return acc
// }, Object.create(null))
//
// console.log(`map: `, map)
//
// const result = Object.entries(map).map(([key, value]) => {
//   return {list: value}
// })
// console.log(JSON.stringify(result, null, 2))
//
//
//
// // let resArr = []
// // let keysArr = []
// //
// // ary.forEach(item => {
// //   // console.log(`type: `, item.type)
// //   if(!keysArr.includes(item.type)) keysArr.push(item.type)
// // })
// //
// // console.log(`keysArr: `, keysArr)
// //
// // keysArr.forEach((key, i) => {
// //   resArr[i] = {}
// //   resArr[i].list = []
// //   ary.forEach(item => {
// //     if(item.type === key) resArr[i].list.push(item)
// //   })
// // })
// // ary.map(item => {
// //
// // })
//
// // console.log(`res: `, JSON.stringify(resArr))
