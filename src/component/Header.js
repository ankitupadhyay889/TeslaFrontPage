import React from 'react';
import "../App.css";
import TeslaLogo from "../image/teslaLogoSmall.svg"
const Header = () => {
    return (
        <>
        <div className="repo">
        <div className="hed">
            <p>Read Tesla Impact Report</p>
        </div>
        </div>
        <div className="header">
            <div className="hed_log">
                <img src={TeslaLogo} alt="Logo"/>
            </div>
            <div className="head_cen">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model X</p>
                <p>Model Y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>
            <div className="head_ri">
                <p>Shop</p>
                <p>Account</p>
                <p>Menu</p>
            </div>
        </div>
        </>
    );
};

export default Header;