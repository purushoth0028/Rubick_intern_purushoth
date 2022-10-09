import React from "react";
import Header from "./layout/header";
import Menu from './sideMenu';
import './HomePage.css';
import { useEffect } from "react";

function Home() {
  
return (
    <div className="home">
       <Header />
       
      <div className="style"> 
      <Menu />   
      <div>
        <br/>
      <div > <h1  className="headcolor">Welcome to Rubick.ai</h1></div>
      <br/> 
        <div>
        <p className="text1">It is the one that allows you to buy and sell products over the internet
         rather than at a brick-and-mortar location.</p></div>
          <br/><br/>
        </div>
    </div>
    </div>
  )
}
export default Home;