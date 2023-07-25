import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import desserts from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert')
    const pizza=menu.filter(item=>item.category==='pizza')
    const salad=menu.filter(item=>item.category==='salad')
    const soup=menu.filter(item=>item.category==='soup')
    const offered=menu.filter(item=>item.category==='offered')
    return (
        <div>
            <Helmet>
                <title>Restaurants |  Menu</title>
            </Helmet>
            <Cover img={menuImg} title="OUR MENU"></Cover>
            <SectionTitle
            subHeading='Don"t Miss '
            heading='Todays offered'
            ></SectionTitle>
            <MenuCategory items={offered} ></MenuCategory>
            {/* desserts  */}
            <MenuCategory items={dessert} title='desserts' img={desserts}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizza} title='pizza' img={pizzaImg}></MenuCategory>
            {/* slaad */}
            <MenuCategory items={salad} title='salad' img={saladImg}></MenuCategory>
            <MenuCategory items={soup} title='soup' img={soupImg}></MenuCategory>

        </div>
    );
};

export default Menu;