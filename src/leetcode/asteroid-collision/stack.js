/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const asteroidsLeft = [];

  for (let i = 0; i < asteroids.length; i++) {
    let a = asteroids[i];

    while (asteroidsLeft.length > 0 && a < 0 && asteroidsLeft.at(-1) > 0) {
      if (Math.abs(a) > Math.abs(asteroidsLeft.at(-1))) {
        asteroidsLeft.pop();
      } else if (Math.abs(a) < Math.abs(asteroidsLeft.at(-1))) {
        a = 0;
      } else {
        a = 0;
        asteroidsLeft.pop();
      }
    }

    if (a) {
      asteroidsLeft.push(a);
    }
  }

  return asteroidsLeft;
};
