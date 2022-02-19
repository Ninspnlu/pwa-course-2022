import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Details from "./Details";
import Profile from "./Profile";

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> } /> 
                <Route path="/profile" element={ <Profile/> } />
                <Route path="/details" element={ <Details/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;