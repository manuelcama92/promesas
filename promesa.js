const fs = require("fs"),
  file = "juegos.txt",
  newFile = "./juegos_PROMISES.txt",
  promise = new Promise((resolve, reject) => {
    fs.access(file, fs.F_OK, err => {
      return err ? reject(new Error("archivo inexistente")) : resolve(true);
    });
  })
    .then(dataPromise => {
      console.log("el archivo existente");
      return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
          return err
            ? reject(new Error("problemas al leer el archivo"))
            : resolve(data);
        });
      });
    })
    .then(dataPromise => {
      console.log("lectura exitosa archivo");
      return new Promise((resolve, reject) => {
        fs.writeFile(newFile, dataPromise, err => {
          return err
            ? reject(new Error("no fue posible copiar el archivo"))
            : resolve("se ha copiado el archivo exitosamente el archivo");
        });
      });
    })
    .then(dataPromise => {
      console.log(dataPromise);
    })
    .catch(err => {
      console.log(err.message);
    });
