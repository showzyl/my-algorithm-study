"use strict"

/**
 *
 * @param ctx
 * @param p 绘制开始位置
 * @param a 方向（和垂直屏幕线的夹角度数）
 * @param w 枝干的宽度
 * @param h 枝干的长度
 * @param L 递归深度
 */

function tree_plot(ctx, p, a, w, h, L) {
  if (L < 10) return
  const [x, y] = p
  // 绘制枝干
  ctx.translate(x, y)
  ctx.rotate(a * Math.PI / 180)
  ctx.moveTo(-w / 2, 0)
  ctx.lineTo(-w * 0.65 / 2, -h)
  ctx.lineTo(w * 0.65 / 2, -h)
  ctx.lineTo(w / 2, 0)
  ctx.strokeStyle = color(L)
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fill()

  const nextX = x + h * Math.sin(a * Math.PI / 180)
  const nextY = y - h * Math.sin(a * Math.PI / 180)

  tree_plot(ctx, [nextX, nextY], a + 15, w * 0.65, h * 0.9, L + 1)
  tree_plot(ctx, [nextX, nextY], a - 15, w * 0.65, h * 0.9, L + 1)
}
