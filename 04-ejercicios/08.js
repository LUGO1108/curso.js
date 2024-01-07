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
let pares = [
  [1, { id: 1, name: "didier" }],
  [2, { id: 2, name: "carlos" }],
  [3, { id: 3, name: "chanchito" }],
];

function toPares(arr) {
  let pares = [];
  for (idx in arr) {
    let elemento = arr[idx];
    pares[idx] = [elemento.id, elemento];
  }
  return pares;
}
let resultado = toPares(array);
console.log(resultado);
