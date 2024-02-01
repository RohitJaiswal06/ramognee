import React,{useEffect, useState} from 'react'
import Card from './Card';
import { FaCartShopping } from "react-icons/fa6";
import "./App.css"

function Displaycard() {
  const [items,setitems]=useState(0);
  const [data,setdata]=useState([]);
useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setdata(data);
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
},[])

 function add(){
  setitems(items+1)
 }
function Remove(){
  if(items>0){
    setitems(items-1);
  }
}

  return (
    <>
    <div style={{display:"flex",justifyContent:"flex-end",marginRight:"10%"}}><FaCartShopping style={{fontSize:"40px"}} /> <span style={{position:"absolute",color:"yellow",fontSize:"14px",fontWeight:"900",borderRadius:"60%",height:"17px",width:"19px",textAlign:"center"}}> {items} </span></div>
    < div className='parent'>
       {
        data.map((index) => (
          <Card img={index.image} price={index.price} description={index.description} title={index.title} rating={index.rating.rate} add={add} Remove={Remove}></Card>
        ))
       }
    </div>
    </>
  )
}

export default Displaycard