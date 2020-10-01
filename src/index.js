// 5,2,4,6
exports.min = function min(array) {
  let temp;
  if (array === undefined || array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array[0];
}

exports.max = function max(array) {
  let temp;
  if (array === undefined || array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array[array.length - 1];
}

exports.avg = function avg(array) {
  if (array === undefined || array.length === 0) {
    return 0;
  }
  let temp = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    temp += array[i];
    count++;
  }
  return temp / count;
}
