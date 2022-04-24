import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../../pages';
import About from '../../pages/about';

const Routing = () => {
    return(
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about/' element={<About />} />
        </Routes>
    )
}


export default Routing;