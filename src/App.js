import Sidebar from "./Components/Sidebar";
import Route from "./Components/Route";
import AccordionPage from "./Pages/AccordionPage"
import DropdownPage from "./Pages/DropdownPage"
import ButtonPage from "./Pages/ButtonPage"
import ModalPage from "./Pages/ModalPage";
import TablePage from "./Pages/TablePage";
import CounterPage from "./Pages/CounterPage";

function App(){
    return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4" >
        <Sidebar />
        <div className="col-span-5" >
            <Route path="/dropdown">
                <DropdownPage />
            </Route>
            <Route path="/accordion">
                <AccordionPage />
            </Route>
            <Route path = "/button">
                <ButtonPage />
            </Route>
            <Route path = "/modal">
                <ModalPage />
            </Route>
            <Route path = "/table">
                <TablePage />
            </Route>
            <Route path = "/counter">
                <CounterPage initialCount={10}/>
            </Route>
        </div>
    </div>
}

export default App;