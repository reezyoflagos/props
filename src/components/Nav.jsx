import React from 'react'
import { BsStarFill} from "react-icons/bs";
const Nav = ({pics,title,desc,price}) => {
  return (
    <div className='p-3'>
      <div class="card shadow" style={{width: "15rem"}}>
    <img src={pics} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{desc}</p>


  <p>
{price}

<a href="#" class="btn btn-danger w-100" >Add to cart</a>
  </p>





  </div>
  <div className='d-flex justify-content-around mb-3'>
  <BsStarFill/>
  <BsStarFill/>
  <BsStarFill/>
  <BsStarFill/>
  <BsStarFill/>
  </div>
</div>
    </div>
  )
}

export default Nav
