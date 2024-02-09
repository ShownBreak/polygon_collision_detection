/**
 * 这里列举了一些图形的枚举。
 * dot，line，triangle 表示在平面中的单纯形
 * round，convex，concave 表示更加广泛的形状
 * 目前不会考虑复杂的曲线
 * 目前也不会考虑凹多边形（后续会支持凹面）
 *
 * 我列举出了这些枚举，用于将问题进行区分，然后将数据交给不同的方法处理
 * 在实际开发过程中，我们可能更加关注两个凸多边形之间的碰撞，当然这个也是比较复杂的。
 */
export const enum GRAPH_TYPE {
  dot = 1, // 点
  line, // 线
  triangle, // 三角形
  round, // 圆
  convex, // 任意凸多边形
  concave, // 任意凹多边形， 该类型暂时不考虑
}
