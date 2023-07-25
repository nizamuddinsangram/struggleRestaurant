import React, { useState } from 'react';
import coverImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Order = () => {
    const [tanIndex,setTabIndex]=useState(0);
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert')
    const pizza=menu.filter(item=>item.category==='pizza')
    const salad=menu.filter(item=>item.category==='salad')
    const soup=menu.filter(item=>item.category==='soup')
    const offered=menu.filter(item=>item.category==='offered')
    return (
        <div>
            <Cover img={coverImg} title={'Order Food'}></Cover>
            <Tabs defaultIndex={tanIndex} onSelect={(index) => setTabIndex(index)}>
         <TabList className='text-center'>
           <Tab>Salad</Tab>
           <Tab>Pizza</Tab>
           <Tab>Soup</Tab>
           <Tab>Desserts</Tab>
           <Tab>Drinks</Tab>
         </TabList>
         <TabPanel></TabPanel>
         <TabPanel></TabPanel>
         <TabPanel></TabPanel>
         <TabPanel></TabPanel>
         <TabPanel></TabPanel>
       </Tabs>
        </div>
    );
};

export default Order;