class MaxHeap {
  constructor(data, Max = 10000) {
    this.list = new Array(Max)
    for (let i = 0; i < data.length; i++) {
      this.list[i] = data[i]
    }
    this.heapSize = data.length
    this.build()
  }

  build() {
    let i = Math.floor(this.heapSize / 2) - 1
    while (i > 0) {
      this.max_heapify(i--)
    }
  }

  max_heapify() {

  }

  extract() {
    if (this.heapSize === 0) return null
    const item = this.list[0]
    swap(this.list, 0, this.heapSize - 1)
    this.heapSize--
    this.max_heapify(0)
    return item
  }


}

function swap(A, i, j) {
  [A[i], A[j]] = [A[j], A[i]]
}

const data = [
  {key: 12},
  {key: 15},
  {key: 2},
  {key: 4},
  {key: 3},
  {key: 8},
  {key: 7},
  {key: 6},
  {key: 5},
]




