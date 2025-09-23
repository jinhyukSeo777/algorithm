function solution(food_times, k) {
  const total = food_times.reduce((a, c) => a + c, 0);
  if (total <= k) return -1;

  const foods = food_times.map((t, i) => [t, i]);
  foods.sort((a, b) => a[0] - b[0]);

  let prev = 0;
  let i = 0;
  const n = foods.length;

  while (i < n) {
    const cur = foods[i][0];
    const diff = cur - prev;
    if (diff > 0) {
      const remain = n - i;
      const cost = diff * remain;

      if (k < cost) {
        const step = Math.floor(k / remain);
        const timeLevel = prev + step;
        const rest = k % remain;

        const alive = [];
        for (let j = i; j < n; j++) {
          if (foods[j][0] > timeLevel) alive.push(foods[j][1]);
        }
        alive.sort((a, b) => a - b);

        return alive[rest] + 1;
      }

      k -= cost;
      prev = cur;

    }
    i++;
  }
}
