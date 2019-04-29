// http://scriptoj.mangojuice.top/problems/36

"use strict"


class EventEmitter {
  constructor() {
    this.listener = {
      // name: [cb(), cb()]
    }
  }

  on(fnName, cb) {
    this.listener[fnName] = this.listener[fnName] || []
    this.listener[fnName].push(cb)
  }

  emit(...arg) {
    let [fnName, ...prams] = arg
    if (this.listener[fnName]) {
      this.listener[fnName].forEach(cb => {
        cb(...prams)
      })
    }
  }

  off(...arg) {
    let [fnName, cbName] = arg
    // if(this.listener[fnName]){
    //   this.listener[fnName] = this.listener[fnName].filter(fn => fn.name !== cbName.name)
    // }
    const callbacks = this.listener[fnName]
    const index = callbacks.indexOf(cbName)
    if (index !== -1) callbacks.splice(index, 1)
  }

}


const emitter = new EventEmitter()
// console.log(`emitter: `, JSON.stringify(emitter))
const sayHi = (name) => console.log(`Hello ${name}`)
const sayHi2 = (name) => console.log(`Good night, ${name}`)

emitter.on('hi', sayHi)
emitter.on('hi', sayHi2)
// console.log(`emitter: `, emitter)
emitter.emit('hi', 'ScriptOJ')
// => Hello ScriptOJ
// => Good night, ScriptOJ

emitter.off('hi', sayHi)
emitter.emit('hi', 'ScriptOJ')
// => Good night, ScriptOJ
//
const emitter2 = new EventEmitter()
emitter2.on('hi', (name, age) => {
  console.log(`I am ${name}, and I am ${age} years old`)
})
emitter2.emit('hi', 'Jerry', 12)
// // => I am Jerry, and I am 12 years old

