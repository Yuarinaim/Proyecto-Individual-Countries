import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import s from "./Pagination.module.css";

const Pagination = () => {
  const allCountry = useSelector((state) => state.allCountry);
  const count = 10;
  const [page, setPage] = useState(1);

  const countryPage = Math.ceil(allCountry.length / count);
  const paginate = allCountry?.slice((page - 1) * count, page * count);

  const handleClick = (e) => {
    if (e.target.value === "next") {
      if (page === countryPage) {
        setPage(1);
      } else {
        setPage(page + 1);
      }
    } else if (e.target.value === "prev") {
      if (page === 1) {
        setPage(countryPage);
      } else {
        setPage(page - 1);
      }
    } else {
      setPage(parseInt(e.target.value));
    }
  };

  /* const setNumberPage = (e) => {
    setPage(e.target.value);
  }; */

  const pageNumbers = [];
  for (let i = 1; i < countryPage + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className={`${s.contenedor_pagination}`}>
        <div>
          <span className={`${s.text}`}>
            Página {page} de {countryPage}
          </span>
        </div>
        {/* prettier-ignore */}
        <div className={`${s.centrado_texto}`}>
          <button className={`${s.button}`} onClick={handleClick} value="prev">
            {`<`}
          </button>
          {pageNumbers.map((b) => (
            <button className={`${s.button}`} onClick={handleClick}value={b} key={b}>{b}</button> //!!!!!!!!!!!!!!
          ))}
          {/* prettier-ignore */}
          <button className={`${s.button}`} onClick={handleClick} value="next">
            {`>`}
          </button>
        </div>
      </div>
      <div className={`${s.cards_container}`}>
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
    </>
  );
};

export default Pagination;
