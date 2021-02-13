const items = [
  { name: "Ronaldo", ransom: 1000 },
  { name: "Rooney", ransom: 900 },
  { name: " Gerrard", ransom: 50 },
  { name: "JisungPark", ransom: 10 },
  { name: "Zlatan", ransom: 2 },
  { name: "Hart", ransom: 100000 },
  { name: "Col", ransom: 400 },
];

const filteredItems = items.filter((item) => {
  return item.ransom <= 300;
});

console.log(filteredItems);

console.log(items);

const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames);

items.forEach((item) => {
  console.log(item.ransom);
});
