// http://scriptoj.mangojuice.top/problems/52

"use strict"


const app = {
  callback (ctx) {
    console.log(ctx)
  },

  use (fn) {

  },

  go (ctx) {

  }
}

app.use((ctx, next) => {
  ctx.name = 'Lucy'
  next()
})

app.use((ctx, next) => {
  ctx.age = 12
  next()
})

app.use((ctx, next) => {
  console.log(`${ctx.name} is ${ctx.age} years old.`) // => Lucy is 12 years old.
  next()
})

// ... 任意调用 use 插入中间件

app.go({}) // => 启动执行，最后会调用 callback 打印 => { name: 'Lucy', age: 12  }
