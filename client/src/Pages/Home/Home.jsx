import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountry } from "../../Redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountry());
  }, []);

  return (
    <div className="contenedor">
      <div>
        <SearchBar />
        <Pagination />
      </div>
    </div>
  );
}
