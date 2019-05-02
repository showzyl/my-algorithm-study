// http://scriptoj.mangojuice.top/problems/38

"use strict"


const MissLi = (callback) => {
  setTimeout(() => {
    callback('MissLi')
  }, 10) // 上车时间不一定
}

const MrWang = (callback) => {
  setTimeout(() => {
    callback('MrWang')
  }, 3) // 上车时间不一定
}

function driveCustomers(...arg) {

}

driveCustomers(MissLi, MrWang)


drive(['MrWang', 'MissLi'])






