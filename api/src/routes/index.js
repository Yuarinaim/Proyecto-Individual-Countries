const { Router } = require("express");

const {
  getAllCountriesAPI,
  findCountriesMatches,
  getCountries,
  countryId,
  createActivity,
  getNamesActivities,
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

/* router.get("/countries", async (req, res) => {
  const { name } = req.query;
  try {
    const allMatches = findCountriesMatches(name);
    res.status(200).json(allMatches);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}); */

router.post("/activities", async (req, res) => {
  const { name, dificulty, duration, season, idCountry } = req.body;
  try {
    // prettier-ignore
    const newActivity = await createActivity({name, dificulty, duration, season, idCountry});
    res.status(200).json({
      state: "Activity created",
      activity: newActivity,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/activities/names", async (req, res) => {
  try {
    const nameActivities = await getNamesActivities();
    res.status(200).json(nameActivities);
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
