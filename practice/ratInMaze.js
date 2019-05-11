

// function backTracking() {
//   if(到达终点) 返回路径
//   找到所有没有走过的选择
//   递归前往每个选择
// }

const maze = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 1],
  [2, 1, 0, 0, 0, 0]
]

/**
 * 老鼠在迷宫
 * @param maze 迷宫矩阵
 * @param pos 当前位置
 * @param path 路径
 * @param transverse 到过的地方记录
 * @returns {*}
 */
function ratInMaze(
  maze,
  pos = [0, 0],
  path = [[...pos]],
  transverse = []) {

  const [x, y] = pos
  // 基础条件
  if (maze[x][y] === 2) {
    console.log(`: `, )
    return path
  }
  // 记录走过当前位置
  transverse[x * maze.length + y] = 1
  console.log(`transverse: `, transverse)

  // 找到可能的选择
  const choices = [
    [x + 1, y], [x - 1, y],
    [x, y + 1], [x, y - 1]
  ].filter(([x, y]) => {
    return x >= 0 && y >= 0 && x < maze.length && y < maze[0].length
      && (maze[x][y] !== 1) && !transverse[x * maze.length + y]
  })

  // 对每个选择,继续递归,寻找路径
  for(let[x, y] of choices){
    const p = ratInMaze(maze, [x, y], path.concat([[x, y]]), transverse)
    if(p) return p
  }

}

console.log(`res: `, ratInMaze(maze))


