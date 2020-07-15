export type Color = number;

export type Grid = {
  width: number;
  height: number;
  data: (Color | null)[];
};

export const getIndex = (grid: Grid, x: number, y: number) =>
  x * grid.height + y;

export const isInside = (grid: Grid, x: number, y: number) =>
  x >= 0 && y >= 0 && x < grid.width && y < grid.height;

export const getColor = (grid: Grid, x: number, y: number) =>
  grid.data[getIndex(grid, x, y)];

export const setColor = (
  grid: Grid,
  x: number,
  y: number,
  color: Color | null
) => {
  grid.data[getIndex(grid, x, y)] = color;
};