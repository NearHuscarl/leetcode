/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const visit = new Set();

  const dfs = (i, j) => {
    if (
      i >= grid.length ||
      j >= grid[0].length ||
      i < 0 ||
      j < 0 ||
      grid[i][j] === 0
    ) {
      return 1;
    }
    const key = `${i},${j}`;
    if (visit.has(key)) {
      return 0;
    }
    visit.add(key);

    let perim = dfs(i, j + 1);
    perim += dfs(i + 1, j);
    perim += dfs(i, j - 1);
    perim += dfs(i - 1, j);
    return perim;
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        return dfs(i, j);
      }
    }
  }
};
