import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import ItemListContainer from "./components/ItemListContainer";
import TopNav from "./components/TopNav";
import ItemCount from "./components/ItemCount";

const App = () => {

    return (
        <>
            <TopNav/>
            <NavBar/>
            <ItemListContainer producto="Avena" categoria="Granel"/>
            <ItemCount stock={15} onAdd={()=>{}} initial={0}/>
        </>
    )
}

export default App;

