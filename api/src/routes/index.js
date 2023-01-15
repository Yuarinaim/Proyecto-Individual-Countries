const { Router } = require("express");

const {
  getAllCountriesAPI,
  createCountries,
  findCountriesMatches,
  getCountries,
} = require("../controllers/controllers");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
getAllCountriesAPI();

router.get("/countries", async (req, res) => {
  try {
    res.status(200).json(await getCountries());
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

/* router.get("/countries/{idPais}:", async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {}
}); */

/* router.get("/countries", async (req, res) => {
  const { name } = req.query;
  try {
    const allMatches = findCountriesMatches(name);
    res.status(200).json(allMatches);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}); */

module.exports = router;

/* 
GET https://restcountries.com/v3/all
GET https://restcountries.com/v3/name/{name}
GET https://restcountries.com/v3/alpha/{code} */
