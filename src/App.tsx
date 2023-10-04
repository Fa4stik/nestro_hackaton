import React, {lazy} from 'react';
import Lending from "./components/main/Lending";
import {Route, Routes} from "react-router-dom";
import Header from "./components/enterprise/Navbar/Header";

const EnterprisesList = lazy(() => import("./components/enterprise/List/EnterprisesList"))
const CurrentEnterprise = lazy(() => import("./components/enterprise/Current/CurrentEnterprise"))

function App() {
    return (
        <Routes>
            <Route path='/' element={<Lending/>}/>
            <Route path='/enterprises' element={<EnterprisesList/>}/>
            <Route path='/enterprise/:idEnterprise' element={<CurrentEnterprise/>}/>
            <Route path='/*' element={<div>Don't found page!</div>}/>
        </Routes>
    );
}

export default App;
