import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer.js"


const App = () => {

    return (
        <>
            <NavBar/>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </>
    )
}

export default App;

