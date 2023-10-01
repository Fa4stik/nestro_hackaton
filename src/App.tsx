import React from 'react';
import Lending from "./components/main/Lending";
import {Route, Routes} from "react-router-dom";
import EnterprisesList from "./components/enterprise/List/EnterprisesList";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Lending/>}/>
            <Route path='/enterprises' element={<EnterprisesList/>}/>
            <Route path='/enterprise' element={<div>enterprise</div>}/>
            <Route path='/*' element={<div>Don't found page!</div>}/>
        </Routes>
    );
}

export default App;
