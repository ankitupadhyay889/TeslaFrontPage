import React from 'react';
import "./App.css";
import Header from './component/Header';
import Item from './component/Item';

import Accessories from "./image/Desktop-Accessories.jpg"
import ModelS from "./image/Desktop-ModelS.jpeg"
import Model3 from "./image/Desktop-Model3.jpeg"
import ModelX from "./image/Desktop-ModelX.jpeg"
import ModelY from "./image/Desktop-ModelY.jpeg"
import SolarPanels from "./image/Desktop-SolarPanels.jpeg"
import SolarRoof from "./image/Desktop-SolarRoof.jpeg"

const Main = () => {
    return (
        <div>
            <Header />
            <div className="itcon">
                <Item 
                    title="Model 3"
                    desc="Black"
                    backgroundImg={Model3}
                    textr="Learn More"
                    textl="Custom Order"
                />
                <Item 
                    title="Model X"
                    desc="Black"
                    textl="Custom Order"
                    backgroundImg={ModelX}
                    textr="Learn More"
                />
                <Item 
                    title="Model S"
                    desc="Black"
                    textl="Custom Order"
                    textr="Learn More"
                    backgroundImg={ModelS}
                />
                <Item 
                    title="Model Y"
                    desc="Black"
                    textl="Custom Order"
                    textr="Learn More"
                    backgroundImg={ModelY}
                />
                <Item 
                    title="SolarPanels"
                    desc="Black"
                    textl="Custom Order"
                    textr="Learn More"
                    backgroundImg={SolarPanels}
                />
                <Item 
                    title="SolarRoof"
                    desc="Black"
                    textl="Custom Order"
                    textr="Learn More"
                    backgroundImg={SolarRoof}
                />
                <Item 
                    title="Acessories"
                    textr="Learn More"
                    desc="Black"
                    textl="Custom Order"
                    backgroundImg={Accessories}
                />
            </div>
        </div>
    );
};

export default Main;