let pares = [
  [1, { name: "didier" }],
  [2, { name: "carlos" }],
  [3, { name: "chanchito" }],
];

let array = [
  {
    id: 1,
    name: "didier",
  },
  {
    id: 2,
    name: "carlos",
  },
  {
    id: 2,
    name: "chanchito",
  },
];

function toCollection(arr) {
  let collection = [];
  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }
  return collection;
}

let resultado = toCollection(pares);
console.log(resultado);
