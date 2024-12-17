import React, { Component } from "react";


export default class Background extends Component{
    render()
    {
        return(
            <div className="bg">
                <div id="bg1">
                <h1>Start your BK<sup>®</sup>order.</h1>
                <button className="button1"><i className="fa-solid fa-bag-shopping" id="head"></i>Order Pickup</button>
                <button className="button2"><i className="fa-solid fa-motorcycle" id="bike"></i>Order Delivery</button>
                </div>
                <div id="burger">
                    <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/992ab9282f7352ad6d92ce74d86446c8ad758336-800x450.png?w=1350&q=90&fit=max&auto=format" alt="" />
                </div>
            </div>
        )
    }
}