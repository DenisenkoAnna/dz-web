const numbers = [5, 2, 9, 1, 5, 6];
const searchElement = 9;

for (let i = 0; i < numbers.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[j] < numbers[minIndex]) {
      minIndex = j;
    }
  }
  const temp = numbers[i];
  numbers[i] = numbers[minIndex];
  numbers[minIndex] = temp;
}

const searchIndex = numbers.indexOf(searchElement);

if (searchIndex === -1) {
  alert("элемент не найден");
} else {
  alert(searchIndex);
}
