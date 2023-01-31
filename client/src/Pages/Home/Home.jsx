import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountry } from "../../Redux/actions";
import Pagination from "../../components/Pagination/Pagination";
import s from "./Home.module.css";
import SideBar from "../../components/SideBar/SideBar";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountry());
  }, []);

  return (
    <div className={`${s.contenedor}`}>
      <div className={`${s.sideBar}`}>
        <SideBar />
      </div>
      <div className={`${s.pagination}`}>
        <Pagination />
      </div>
    </div>
  );
}
