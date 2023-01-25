import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { getAllCountry } from "../../Redux/actions";
import Sort from "../Sort/Sort";

const Pagination = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountry());
  }, []);

  const allCountry = useSelector((state) => state.allCountry);
  const count = 9;
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
        {/* prettier-ignore */}
        <button disabled={page === 1} onClick={handleClick} value="prev">
          {`<`}
        </button>
        {/* prettier-ignore */}
        <button disabled={page === countryPage} onClick={handleClick} value="next">
          {`>`}
        </button>
        <Sort />
      </div>
      <div>
        {paginate?.map((e) => {
          return (
            <Card
              key={e.id}
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
/* import { useState } from 'react';
import { useSelector } from 'react-redux';

const Pagination = (itemsPerPage = 9) => {
  
  const [currentPage, setCurrentPage] = useState(1);
    
  const allCountry = useSelector(state => state.allCountry)
  
  
  const totalPages = Math.ceil(allCountry / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Anterior
      </button>
      <span>Página {currentPage} de {totalPages}</span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination; */
