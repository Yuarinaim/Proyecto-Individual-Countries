import Cards from "../components/Cards"
import SearchBar from "../components/SearchBar"
import NavBar from '../components/NavBar'

export default function Home() {
    

    return(
        <div>
            <NavBar></NavBar>
            <div>
                <SearchBar/>
                <Cards/>
            </div>
        </div>
    )
}