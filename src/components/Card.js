import React from 'react'
import "./App.css"
function Card(props) {

  return (
    <div className="product-card">
      <img src={props.img} alt={""} />
      <h3>{props.title}</h3>
      <h5>Price: ${props.price}</h5>
      <p>rating={props.rating}</p>
      <div style={{display:"flex",justifyContent:"center" ,gap:"2%"}}>
      <button onClick={props.add} style={{backgroundColor:"black",}}>Add to Cart</button>
      <button onClick={props.Remove} style={{border:"1px solid black",backgroundColor:"white",color:"black"}}>Remove</button>
      </div>
    </div>
  )
}

export default Card