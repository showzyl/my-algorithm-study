// http://scriptoj.mangojuice.top/problems/43

"use strict"

const debounce = (fn, duration) => {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.call()
    }, duration)
  }
}

// window.addEventListener('resize', debounce(() => {
//   console.log('Hello')
// }, 1000))
