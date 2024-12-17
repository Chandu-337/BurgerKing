import React, { Component } from "react";
import Navbar from "./Navbar";
import Background from "./Background";
import images from "../db";
import Cards from "./Cards";
import Footer from "./Footer";
import Copyright from "./Copyright";
import "../style.css";

export default class App extends Component{

    render()
    {
        return (
            <>
                <Navbar/>
                <Background/>
                <div className="main-card" style={{display:"flex", flexWrap:"wrap"}} >
                {images.map(image=>
                    <Cards key={image.imgSrc}
                    imgSrc = {image.imgSrc}
                    head = {image.head}
                    description = {image.description}
                    content = {image.content}
                    buttontext = {image.buttontext}
                    />
                )}
                </div>
                <Footer/>
                <Copyright/>
            </>
        )
    }
}