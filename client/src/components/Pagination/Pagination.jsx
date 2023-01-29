import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Sort from "../Sort/Sort";
import FilterCont from "../Filtros/FilterCont";
import FilterAct from "../Filtros/FilterAct";

const Pagination = () => {
  const allCountry = useSelector((state) => state.allCountry);
  const count = 10;
  const [page, setPage] = useState(1);

  const countryPage =
    Array.isArray(allCountry) && Math.ceil(allCountry.length / count); //  Se define la cantidad de paginas con los country que tendra
  const paginate = allCountry?.slice((page - 1) * count, page * count); // Define el corte por el cual va a arrancar la siguiente paginacion

  const handleClick = (e) => {
    if (e.target.value === "prev") {
      setPage(page - 1);
    } else {
      // TODO: necesito agregar un condicional para page con numeros
      setPage(page + 1);
    }
  };

  /**
   * TODO: ESTO ES POR SI QUIERO MOSTRAR CON NUMEROS
   * const pageNumbers = []; 
  for (let i = 1; i < countryPage; i++) {
    pageNumbers.push(i);
  } */

  return (
    <div>
      <div>
        <span>
          Página {page} de {countryPage}
        </span>
        <hr />
        {/* prettier-ignore */}
        <button disabled={page === 1} onClick={handleClick} value="prev">
          {`<`}
        </button>
        {/* prettier-ignore */}
        <button disabled={page === countryPage} onClick={handleClick} value="next">
          {`>`}
        </button>
        <hr />
        <FilterCont />
        <FilterAct />
        <hr />
        <Sort />
      </div>
      <div>
        {paginate?.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              image={e.image}
              name={e.name}
              continent={e.continent}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
