const axios = require("axios");
const { Country } = require("../db");

const createCountries = ({
  id,
  name,
  image,
  continent,
  capital,
  subregion,
  area,
  poblation,
}) => {
  console.log(id, name, image, continent, capital);
  if (id && name && image && continent && capital)
    return Country.create({
      id,
      name,
      image,
      continent,
      capital,
      subregion,
      area,
      poblation,
    });
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
  const listCountries = await Country.findAll();
  return listCountries;
};

const findCountriesMatches = async (name) => {
  const allmatches = await Country.findAll({ where: { name: name } });
  return allmatches;
};

module.exports = {
  getAllCountriesAPI,
  createCountries,
  findCountriesMatches,
  getCountries,
};
/* 
GET https://restcountries.com/v3/all
GET https://restcountries.com/v3/name/{name}
GET https://restcountries.com/v3/alpha/{code} */
