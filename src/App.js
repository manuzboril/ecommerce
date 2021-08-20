import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
    return (
        <>
            <NavBar/>
            <ItemListContainer producto="Avena" categoria="Granel"/>
        </>
    )
}

export default App

