import {Menu} from "antd";
import "antd/dist/antd.css"
import React from 'react'
import './sideMenu.css'

function Menubar() {

  return (  
    <div>
<Menu mode="vertical" className="menu">
        <Menu.Item key="home"><a href="./../"> Home</a></Menu.Item>
        <Menu.Item key="phone1"><a href="./../Productdescriptions"></a>Products</Menu.Item>
        <Menu.Item key="Settings"><a href="..layout/Settings"> Settings</a></Menu.Item> 
</Menu>
    </div> );
}

export default Menubar;
