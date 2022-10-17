import React,{useState} from "react";
import {Switch} from 'antd';
import '../layout/Formjs1.css';
import '../layout/header';
import '../layout/header.css';
import { Header } from "antd/lib/layout/layout";
import Menu from '../sideMenu';
function Formjs(){
    const [code,setCode]=useState('');
    const [username,setUsername]=useState('');
    const [qty,setQty]=useState('');
    const [price,setPrice]=useState('');
    const [status,setStatus]=useState(false);
    const [dateAdded,SetDateAdded]=useState(new Date());
    const [formErrors,setFormErrors]=useState({});

    const toggler=()=>{
        status?setStatus("Inactive"):setStatus("Active");
    }
    const validate=(code,username,qty,price,status,dateAdded)=>{
        const errors={};
        const regex=/^[0-9]+/i;
        if(!code)
        {
            errors.code="Code is Required";
        }else if(!regex.test(code))
        {
            errors.code="Code requires only Numbers";
        }
        if(!username)
        {
            errors.username="product Name is Required";
        }
        if(!qty)
        {
            errors.qty="Qty is Required";
        }else if(!regex.test(qty))
        {
            errors.qty="Quantity requiresonly Numbers";
        }
    
        if(!regex.test(price))
        {
            errors.price="Price requires only Numbers";
        }else if(price.length>6)
        {
            errors.price="Price < 6 digits";
        }

        return errors;
    };

    const createProduct=(e)=>{
        SetDateAdded(new Date("MMM DD YYYY"));
        setFormErrors(validate(code,username,qty,price,status,dateAdded));
        console.log(formErrors);
        if(Object.keys(formErrors).length===0)
        {
            console.log("runing");
            {
            alert("fill the fields");
            }
        }
        e.preventDefault();
    };

    const clearForm=()=>{
        setCode('');
        setUsername('');
        setQty('');
        setPrice('');
        setStatus(false);
    };

    return(
       <div className="container">
       <Header />
       <Menu />     
    <div >
        <br/><br/>
            <header id="FormHeader">New Product</header>
            <form>
                <div>
                <label className="field">Product code<i>*</i></label><br/>
                <input type="text" value={code} onChange={(e)=>{setCode(e.target.value)}} style={{width:"300px"}}/>
                <p class="ErrorTag">{formErrors.code}</p>
                </div>
                <div>
                <label className="field">Name<i>*</i></label><br/>
                <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} style={{width:"300px"}}/>
                <p class="ErrorTag">{formErrors.username}</p>
                </div>
                <div>
                <label className="field">Quantity<i>*</i></label><br/>
                <input type="text" value={qty} onChange={(e)=>{setQty(e.target.value)}} style={{width:"300px"}}/>
                <p class="ErrorTag">{formErrors.qty}</p>
                </div>
                <div>
                <label className="field">Price</label><br/>
                <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} style={{width:"300px"}}/>
                <p class="ErrorTag">{formErrors.price}</p>
                </div>
                <div>
                    <label className="field">Status</label>
                    &nbsp;&nbsp;&nbsp;&nbsp;<Switch onClick={toggler} style={{width:"45px"}}/>
                </div>
                <div>
                    <button id="cancel" onClick={clearForm}>Cancel</button>
                    <button id="submit" onClick={createProduct}>Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
}
export default Formjs;