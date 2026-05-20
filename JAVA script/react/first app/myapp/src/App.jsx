import React from "react";
import "./App.css"


function App(){
    
    return(
         <div className="container"> 
         <h1 className="title">Product Showcase</h1>
            <div className="product-row">
                <div className="card mouse">
                    <h2>Wireless Mouse</h2>
                    <p className="price">$799</p>
                    <p className="category">Electronics</p>
                </div>
                <div className="card shoes">
                    <h2>Running Shoes</h2>
                    <p className="price">$1299</p>
                    <p className="category">Footwear</p>
                </div>
            </div>
            <div className="product-row center">
                <div className="card watch">
                    <h2>Smart Watch</h2>
                    <p className="price">$1999</p>
                    <p className="category">Wearables</p>
                </div>
            
            </div>
         </div>




        

    )



}
export default App;
