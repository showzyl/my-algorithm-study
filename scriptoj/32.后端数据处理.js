// http://scriptoj.mangojuice.top/problems/32

// 把以下数据处理成这样
// [
//   { name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01" },
//   { name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21" },
// ]

let data = {
  rows: [
    ["Lisa", 16, "Female", "2000-12-01"],
    ["Bob", 22, "Male", "1996-01-21"]
  ],
  metaData: [
    {name: "name", note: ''},
    {name: "age", note: ''},
    {name: "gender", note: ''},
    {name: "birthday", note: ''}
  ]
}

const parseData = (data) => {
  let res = []
  data.rows.forEach((item, i) => {
    res[i] = {}
    item.forEach((val, j) => {
      res[i][data.metaData[j].name] = val
    })
  })
  return res
}

// const parseData = (data) => {
//   data.rows.map((row) => row.reduce((rowData, value, i) => {
//     rowData[data.metaData[i].name] = value
//     return rowData
//   }, {}))
// }


console.log(`res: `, parseData(data))
