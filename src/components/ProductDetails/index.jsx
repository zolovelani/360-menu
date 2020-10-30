import React, {useContext, useState} from 'react'
import ApplicationContext from '../../context/Application'
import styled from "styled-components"

const ProductImg = styled.img`
width: 50%;
height: auto;
`
const ImgDiv = styled.div`
padding-left: 25%;
`
const Xbtn = styled.button`
background-color:black;
color: white;
border: none;
`
const Ordersbtn = styled.button`
background-color:Red;
color: white;
border: none;
position: fixed;
bottom:0;
right:45px;
width: 399px;
height: 70px;
`

const ProductDetails = () => {
  const [selectedOption, setSelectedOption] = useState({})
  const {activeProduct, setActiveProduct, activeCategory, addToOrders,
  } = useContext(ApplicationContext)

  if (!activeProduct?.name) {
    return null
  }
  return(

  <div>
    <Xbtn type="button" onClick={() => setActiveProduct({})}>
      X
    </Xbtn>
   {activeProduct?.images?.[0]?.thumbnails.large.url ?(
     <ImgDiv>
      <ProductImg 
     src={activeProduct?.images?.[0]?.thumbnails.large.url}
     alt={activeProduct.name} 
     />
     </ImgDiv>

   ) : ( <div>should show placeholder using{activeCategory.icon}</div>
   )}
    <br />
    <h2>{activeProduct.name}</h2>
    <br />
    {activeProduct.description}

    {activeProduct.options ? (
      <div>
         <p>options</p>
        {activeProduct.options.map(({ option, price }) => (
          <label htmlFor={option}>
            <input 
            onChange={()=> setSelectedOption({option, price})}
            type="radio" 
            key={option} 
            name="options" 
            class="radio-input"
            id={option} 
            value={{option,price}}/>
            {option} {price}
          </label>
        ))}
       
        </div>
   ) : null}
    <br />
    <br />
    <form>
        <p>special instructions</p>
        <input
          type="text"
          placeholder="Add a note"
          class="form"
        />
      </form>
    <Ordersbtn
    type="button"
    onClick={() => {
      addToOrders({ ...activeProduct, selectedOption})
      setActiveProduct({})
    }}>
     ADD TO ORDERS
    </Ordersbtn>
  </div>
  )
}

export default ProductDetails
