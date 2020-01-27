function josephus(total, num) {
  const list = new Array(total);
  list.fill(true);
  let killedCount = 0;
  let index = 0;
  let countNum = 0;
  const personInOneRound = [];

  while (true) {
    if (list[index]) {
      countNum += 1;
      if (countNum === num) {
        list[index] = false;
        countNum = 0;
        killedCount += 1;
        personInOneRound.push(index + 1);
      }
    }
    if (killedCount === total) {
      console.log('success:', personInOneRound.join(','));
      break;
    }

    index = index + 1;
    if (index >= total) {
      index %= total;
      console.log(personInOneRound.join(','));
      personInOneRound.length = 0;
    }
  }
}

josephus(41, 3);