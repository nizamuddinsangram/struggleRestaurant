import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Restaurants |  Menu</title>
            </Helmet>
            <Cover></Cover>
            
        </div>
    );
};

export default Menu;