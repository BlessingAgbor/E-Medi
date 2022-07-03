import React from 'react';
import Categorys from './Body/Categorys';
import Products from './Body/Products';
import Hero from './Hero/Hero';
import Purpular from './Body/Purpular';

const Display = () => {
    return (
        <div>
            <Hero />
            <Products />
            <Categorys />
            <Purpular />
        </div>
    );
};

export default Display;