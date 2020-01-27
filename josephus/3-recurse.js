function josephus(total, num) {
  function recurse(n, m) {
    if (n === 1) {
      return 1;
    }
    return (recurse(n - 1, m) + m - 1) % n + 1;
  }

  console.log(recurse(total, num));
}

josephus(41, 3);