import React, { useState } from "react";

export const ContextData = React.createContext();

function ContextFunction({ children }) {
    // sidebar info
    const [sidebar, setSidebar] = useState([
        {
            img: '../../img/offers.png',
            title: 'Ichimliklar',
        },
        {
            img: '../../img/misc.png',
            title: 'Yevro-taomlar',
        },
        {
            img: '../../img/pasta.png',
            title: 'Milliy taomlar',
        },
        {
            img: '../../img/lasagna.png',
            title: 'Shirinlik & desert',
        },
        {
            img: '../../img/misc.png',
            title: 'Shashlik',
        },
        {
            img: '../../img/misc.png',
            title: 'Choyxona',
        },
        {
            img: '../../img/misc.png',
            title: 'Salatlar',
        },
        {
            img: '../../img/misc.png',
            title: 'Yana nimadir',
        },
    ])

    // All information data
    const [allInfo, setAllInfo] = useState([
        {
            img: '../../img/Image.png',
            title: 'Steak sapi bakar',
            price: '25.12',
        },
        {
            img: '../../img/Image1.png',
            title: 'Ayam kentang',
            price: '15.40',
        },
        {
            img: '../../img/Image2.png',
            title: 'Ikan santan',
            price: '10.40',
        },
        {
            img: '../../img/Image3.png',
            title: 'Mie kuah pedas',
            price: '11.21',
        },
        {
            img: '../../img/Image4.png',
            title: 'Kuah santan',
            price: '5.50',
        },
        {
            img: '../../img/Image5.png',
            title: 'Mie gepeng telor',
            price: '12.63',
        },
        {
            img: '../../img/Image6.png',
            title: 'Nasi steak ayam',
            price: '12.56',
        },
        {
            img: '../../img/Image7.png',
            title: 'Steak ikan santan',
            price: '11.51',
        },
        {
            img: '../../img/Image8.png',
            title: 'Nasi goreng putih',
            price: '8.50',
        },
        {
            img: '../../img/Image9.png',
            title: 'Nasi ayam salad',
            price: '9.53',
        },
        {
            img: '../../img/Image10.png',
            title: 'Mie putih ayam pedas',
            price: '10.11',
        },
        {
            img: '../../img/Image11.png',
            title: 'Cumi-cumi',
            price: '8.30',
        },
        {
            img: '../../img/Image.png',
            title: 'Steak sapi bakar',
            price: '25.12',
        },
        {
            img: '../../img/Image1.png',
            title: 'Ayam kentang',
            price: '15.40',
        },
        {
            img: '../../img/Image2.png',
            title: 'Ikan santan',
            price: '10.40',
        },
        {
            img: '../../img/Image3.png',
            title: 'Mie kuah pedas',
            price: '11.21',
        },
    ])

    return (
        <ContextData.Provider value={{
            sidebar,
            allInfo,
        }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunction;