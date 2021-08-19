import React, { useState } from 'react'
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './navbar';

const unique = [...new Set(Menu.map((curElem) => {
return curElem.category;
})
),"All"
];
 console.log(unique)

const Restaurant = () => {
    const [MenuData, setMenuData] = useState(Menu);
    const [menuList ] = useState(unique);

    const filterItem = (category) => {

        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updateList = Menu.filter((curElem) => {
            return curElem.category ===category;    
        });
        setMenuData(updateList);
    };

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard MenuData={MenuData} />
        </>
    )
}

export default Restaurant
