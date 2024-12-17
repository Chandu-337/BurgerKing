import React, { Component } from "react";

export default class Copyright extends Component{
    render()
    {
        return(

            <>
            <div className="copyright">

            <p>TM & Copyright 2024 Burger King Company LLC. All Rights Reserved. |<u>  Do Not Sell Or Share My Personal Information</u></p>
            </div>
            <div className="foot">
            <div id="home">
            <i className="fa-solid fa-house"></i>
            <br />
            Home
            </div>
            <div id="menu">
            <i className="fa-solid fa-burger"></i><br />
            Menu
            </div>
            <div id="tag">
            <i className="fa-solid fa-tag"></i><br />
            Offers
            </div>
            <div id="rewards">
            <i className="fa-solid fa-crown"></i>
            <br />
            Rewards
            </div>
            
            
        </div>
            </>
        )
    }
}