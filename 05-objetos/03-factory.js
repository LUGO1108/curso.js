function crearUsuario(name, email, id) {
  return {
    id,
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log("recuperando clave ...");
    },
  };
}

let user1 = crearUsuario("jose", "jose@tu.io", 1);
let user2 = crearUsuario("marlon", "marlon@tu.io", 2);

console.log(user1, user2);
