const data = require("./localidad_bahra.json");

/* const mapeado = data.features.map((props) => {
  return {
    provincia: props.properties.nom_pcia,
    departamento: props.properties.nom_depto,
    localidad: props.properties.fna,
  };
}); */

fetch("https://apis.datos.gob.ar/georef/api/provincias")
  .then((res) => res.json())
  .then((res) => console.log(res));
