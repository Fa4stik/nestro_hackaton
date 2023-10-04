import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Suspense fallback={<div className="h-screen w-screen flex bg-enterprise text-xl text-mainWhite
        items-center justify-center">
            Loading...</div>}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Suspense>
    </React.StrictMode>
);
