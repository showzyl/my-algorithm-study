function getUrlParams(str) {
  return str.split('&').reduce((o, kv) => {
    const [key, value] = kv.split('=')
    if (!value) return o
    // o[key] = value
    deepSet(o, key.split(/[\[\]]/g).filter(x => x), value)
    return o
  }, {})
}

function deepSet(o, path, value) {
  let i = 0
  for (; i < path.length - 1; i++) {
    if (o[path[i]] === undefined) {
      // o[path[i]] = {}
      if (path[i + 1].match(/^\d+$/)) {
        o[path[i]] = []
      } else {
        o[path[i]] = {}
      }
    }
    o = o[path[i]]
  }
  o[path[i]] = decodeURIComponent(value)
}


console.log(`re1: `, parse('a=1&b=&c=5&f=hello'))
console.log(`re2: `, parse('a&b&c'))
console.log(`re3: `, parse('a[name]=fox&a[company]=tecent&b=why'))
console.log(`re4: `, parse('color=Deep%20Blue'))
console.log(`re5: `, parse('a[0]=1&a[1]=2'))

console.log(`re6: `, parse(window.location.hash.split('?')[1]))
console.log(`re7: `, parse( window.location.hash.substr(location.hash.indexOf('?'))) )

