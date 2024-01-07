const user = { id: 1 };
user.name = "loco";
user.guardar = function () {
  console.log("guardado", user.name);
};

user.guardar();
