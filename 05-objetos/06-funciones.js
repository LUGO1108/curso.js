function Usuario(nombre) {
  this.nombre = nombre;
}
console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U("harel");

console.log(user);

function of(Fn, ard) {
  return new Fn(ard);
}

let user1 = of(Usuario, "jorgito");

console.log(user1);

function returned(){
    return function(){
        console.log('hola mundo')
    }
}

let saludo = returned();
saludo()
