const fs = require('fs')
const path = require('path')


function gen(N) {
  const wstream = fs.createWriteStream(path.resolve(__dirname, './raw'))

  const items = []
  const Size = 1024 * 1024
  const buffer = Buffer.alloc(4 * Size)

  for (let i = 0; i <= N; i++) {
    if(i !== N){
      const v = Math.floor(Math.random() * 0xffff)
      buffer.writeUInt32BE(
        v,
        (i % Size) * 4
      )
    }

    if(i !== 0 && i % Size === 0){
      console.log(`write ${i}/${N}`)
      wstream.write(buffer)
    }
  }

  wstream.end()
}



gen(1024 * 1024 * 1024)












