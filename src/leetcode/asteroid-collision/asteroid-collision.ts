function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  const peek = () => stack[stack.length - 1];
  stack.push(asteroids.shift()!);

  for (let i = 0; i < asteroids.length; i++) {
    const incomingAsteroid = asteroids[i];

    if (incomingAsteroid > 0) {
      stack.push(incomingAsteroid);
      continue;
    }

    while (peek() > 0 && peek() < -incomingAsteroid) {
      stack.pop();
    }
    if (peek() > 0 && peek() === -incomingAsteroid) {
      stack.pop();
      continue;
    }
    if (peek() > 0 && peek() > -incomingAsteroid) {
      continue;
    }

    stack.push(incomingAsteroid);
  }

  return stack;
}
