// http://scriptoj.mangojuice.top/problems/94


// const injectSections = (items, sections) => {
//   // 倒序排列
//   sections.sort((a,b) => b.index - a.index)
//   console.log(`sections: `, sections)
//   // 插入
//   sections.forEach((m)=>{
//     items.splice(m.index, 0, m.content)
//   })
//   return items
// }

const injectSections = (items, sections) => {
  for (let i = 0; i < sections.length; i++) {
    items[sections[i].index] = [sections[i].content, items[sections[i].index]]
  }
  return [].concat(...items)
}


const a1 = ['item1', 'item2', 'item3', 'item4', 'item5']
const a2 = [
  {content: 'section1', index: 0},
  {content: 'section2', index: 2}
]

// => ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']
console.log(`res: `, injectSections(a1, a2))




