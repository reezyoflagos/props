import React from 'react'
import Nav from './components/Nav'

const App = () => {
  let image1 ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/053149/1.jpg?1910'
  let image2 ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/053149/1.jpg?1910'
  let image3 ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/053149/1.jpg?1910'
  let image4 ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/053149/1.jpg?1910'
  let image5 ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/41/053149/1.jpg?1910'

  let title1 ='Mobile Phone'
  let title2 ='Fridge'
  let title3 ='Shop'
  let title4 ='Diamonds'
  let title5 ='Golds'
  

  let description1 ='Good VVs'

  let description2 ='Ice box'

  let description3 ='Cray-way'

  let description4 ='April fool'

  let description5 ='It is well'
  
  let price1 = '$20000'
  let price2 = '$20000000'
  let price3 = '$2000000'
  let price4 = '$200000000'
  let price5 = '$2000000000'
  return (
    <div className='d-flex justify-content-around'>
      <Nav pics={image1}title={title1} desc={description1} />
      <Nav pics={image2}title={title2} desc={description2}/>
      <Nav pics={image3}title={title3} desc={description3}/>
      <Nav pics={image4}title={title4} desc={description4}/>
      <Nav pics={image5}title={title5} desc={description5}/>
     
    </div>
  )
}

export default App
