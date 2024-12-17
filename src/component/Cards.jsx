import React, { Component } from "react";

class Cards extends Component{
    constructor(props){
        super(props)
    }
    render()
    {
        return(

            <>
            <div className="cards">
                <div className="cardimg">
                    <img src={this.props.imgSrc} />
                
                    <div className="cardcontent">
                        <br />
                        <h2>{this.props.head}</h2>
                        <br />
                        <p>{this.props.description}</p>
                        <p>{this.props.content}</p>
                        <button>{this.props.buttontext}</button>
                    </div>
               
                </div>
            </div>
            </>
        )
    }
}
export default Cards;