const axios = require("axios");
const { Op } = require("sequelize");
const { Country } = require("../db");
const { Activities } = require("../db");

// prettier-ignore
const createCountries = ({id, name, image, continent, capital, subregion, area, poblation}) => {
  if (id && name && image && continent && capital)
    return Country.create({ id, name, image, continent, capital, subregion, area, poblation });
};

const getAllCountriesAPI = async () => {
  const { data } = await axios.get("https://restcountries.com/v3/all");

  data.map((c) => {
    createCountries({
      id: c.cca3,
      name: c.name?.common,
      image: c.flags[0],
      continent: c.continents[0],
      capital: c.capital?.[0],
      subregion: c.subregion,
      area: c.area,
      poblation: c.population,
    });
  });
};

const getCountries = async () => {
  const listCountries = await Country.findAll({
    attributes: ["id", "name", "continent", "image", "poblation"],
    include: [
      {
        model: Activities,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return listCountries;
};

const findCountriesMatches = async (name) => {
  const allmatches = await Country.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  if (allmatches.length) return allmatches;
  throw Error("No se encontraron coincidencias");
};

const countryId = async (id) => {
  const findId = await Country.findOne({
    where: { id: id },
    include: [
      {
        model: Activities,
        attributes: ["name", "dificulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return findId;
};

// prettier-ignore
const createActivity = async ( {idCountry, name, dificulty, duration, season,}) => {
  const createAct = await Activities.create({ name, dificulty, duration, season })
  createAct.setCountries(idCountry)
  return createAct;
};

const getNamesActivities = async () => {
  const nameActivities = await Activities.findAll({
    attributes: ["name"],
  });
  return nameActivities;
};

module.exports = {
  getAllCountriesAPI,
  findCountriesMatches,
  getCountries,
  countryId,
  createActivity,
  getNamesActivities,
};
