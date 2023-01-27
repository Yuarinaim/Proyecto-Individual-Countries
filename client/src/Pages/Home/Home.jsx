import SearchBar from "../../components/SearchBar/SearchBar";
import Pagination from "../../components/Pagination/Pagination";

export default function Home() {
  return (
    <div className="contenedor">
      <div>
        <SearchBar />
        <Pagination />
      </div>
    </div>
  );
}
