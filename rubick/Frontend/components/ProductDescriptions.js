import Menu from './sideMenu';
import Header from './layout/header';
import { useState,useEffect } from 'react';
import moment from 'moment';
import './products.css';
import {Table,Tag,Select} from 'antd';
import{PlusCircleFilled,FilterFilled} from "@ant-design/icons/lib/icons";
import axios from 'axios';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import Formjs from './layout/Formjs';

function ProductDescriptions() {
  const [hdata,sethdata]= useState([]); 
  const getProducts = async()=>{
try{
const data =await axios.get("http://localhost:5000/get-todo");
let tempdata=[...data.data]
console.log([...tempdata])
tempdata["Date"]=moment(tempdata["Date"]).format("MMM Do YY")
sethdata(tempdata)
console.log(data);
    }
    catch(e){
      console.log(e);
    }
  }
console.log("hdata",hdata);
 useEffect(()=>{
  getProducts();
 },[]); 

 const months= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const columns=[
    {
      key:'1',
      title:'Code',
      dataIndex:'Code'
    },
    {
      key:'2',
      title:'Name',
      dataIndex:'Name'
    },
    {
      key:'3',
      title:'Qty',
      dataIndex:'Qty'
    }, 
    {
      key:'4',
      title:'Price',
      dataIndex:'Price'
    },
    {
      key:'5',
      title:'Status',
      dataIndex:'Tags',  render: (_, { Tags }) => (
        <>
        {Tags?.map((tag) => {
          console.log("tags",tag)
          let color = tag && tag==="Inactive" ? 'volcano' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </Tag>
          );
        })}
        </>
      ),
    },
    {
      key:'6',
      title:'Date added',
      dataIndex:'Date'
    }
  ]
  return (
  <div className="styling">
    <Header />
  <Menu />     
    <div> <h3>Products   
    <Link to="/Formjs">
        <PlusCircleFilled type='primary' className='addbtn'/>
        </Link></h3>
        <Routes>
            <Route path="/Formjs" element={<Formjs/>}></Route>
          </Routes>
        <Select style={{float:"right",width:"200px"}} placeholder='Months' icon={<FilterFilled />}   className="months">
          {months.map((month,index)=>{
            return <Select.Option key={index} value={month}></Select.Option>
          })}

        </Select><br/>
        <Table 
        className='table' 
        columns={columns} 
        dataSource={hdata}
        pagination={{
          pageSize:5,
          /* total:totalPages, */
        }}>
          
        </Table>
        </div>
    </div>
  )
}

export default ProductDescriptions;