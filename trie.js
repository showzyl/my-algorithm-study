/**
 * Created by showzyl on 2017/8/17.
 *
 * https://github.com/LeuisKen/leuisken.github.io/issues/2
 *
 * trie树
 *
 */

'use strict'


let aResData = [{
	val: '浙江',
	children: [{
		val: '杭州',
		children: [{
			val: '西湖'
		}]
	}]
}, {
	val: '四川',
	children: [{
		val: '成都',
		children: [{
			val: '锦里'
		}, {
			val: '方所'
		}]
	}]
}]


let data = [{
	pro: '浙江',
	city: '杭州',
	name: '西湖'
}, {
	pro: '四川',
	city: '成都',
	name: '方所'
}, {
	pro: '四川',
	city: '成都',
	name: '锦里'
}]

let keys = ['pro', 'city', 'name']

let transObject = function(tableData, keys) {
	let hashTable = {}, res = []
	for (let i = 0; i < tableData.length; i++) {
		let arr = res, cur = hashTable
		for (let j = 0; j < keys.length; j++) {
			let key = keys[j], filed = tableData[i][key]
			if (!cur[filed]) {
				let pusher = {
					value: filed
				}, tmp
				if (j !== (keys.length - 1)) {
					tmp = []
					pusher.children = tmp
				}
				cur[filed] = { $$pos: arr.push(pusher) - 1 }
				cur = cur[filed]
				arr = tmp
			} else {
				cur = cur[filed]
				arr = arr[cur.$$pos].children
			}
		}
	}
	return res
}

console.log('test: ', transObject(data, keys))




