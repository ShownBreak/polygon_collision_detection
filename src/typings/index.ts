export interface Vector2D {
  x: number;
  y: number;
}

/**
 * 零维单纯形
 */
export type PDot = Vector2D;

/**
 * 一维单纯形
 */
export type PLine = [Vector2D, Vector2D];

/**
 * 二维单纯形
 */
export type PTriangle = [Vector2D, Vector2D, Vector2D];

/**
 * 圆
 */
export type PRound = {
  center: Vector2D;
  length: number;
};

/**
 * 任意凸多边形
 */
export type PConvex = Array<Vector2D>;

/**
 * 传入图形类型
 */
export type Params = PDot | PLine | PTriangle | PRound | PConvex;
