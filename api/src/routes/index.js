const { Router } = require("express");

const {
  getAllCountriesAPI,
  findCountriesMatches,
  getCountries,
  countryId,
  createActivity,
} = require("../controllers/controllers");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
getAllCountriesAPI();

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) return res.status(200).json(await findCountriesMatches(name));
    res.status(200).json(await getCountries());
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  try {
    const allMatches = findCountriesMatches(name);
    res.status(200).json(allMatches);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.post("/activities", async (req, res) => {
  const { name, dificulty, duration, season } = req.body;
  try {
    const newActivity = await createActivity(name, dificulty, duration, season);
    res.status(200).json({
      state: "Activity created",
      activity: newActivity,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/countries/:id", async (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).json(await countryId(id));
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;

/* 
GET https://restcountries.com/v3/all
GET https://restcountries.com/v3/name/{name}
GET https://restcountries.com/v3/alpha/{code} */
