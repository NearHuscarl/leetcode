/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const visit = new Set();
  let perim = 0;

  const dfs = (row, col) => {
    if (
      row >= grid.length ||
      col >= grid[0].length ||
      row < 0 ||
      col < 0 ||
      grid[row][col] === 0
    ) {
      perim++;
      return;
    }
    const key = `${row},${col}`;
    if (visit.has(key)) {
      return;
    }
    visit.add(key);

    dfs(row, col + 1);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row - 1, col);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        dfs(i, j);
        return perim;
      }
    }
  }
};
