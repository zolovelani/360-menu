import React, {useContext} from 'react'
import ApplicationContext from '../../context/Application'
import SideButton from '../SideButton'
import CategoryIcon from './CategoryIcon'
import SvgLogo from '../Icons/logo'
import SvgWaiter from '../Icons/waiter'
import styled from 'styled-components'

const LogoDiv = styled.div`
  width: 80px;
  height: 70px;
  background-color: #222222;
  color: white;
  font-size: 10px;
  padding-top: 10px;
  padding-left: 19px;
  &:hover {
    color: red;
    
  }
  &:focus {
  background: black;
  color: red;
}
  &:active {
    background-color: red;
    color: orangered;
  }
`

const WaiterButton = styled.button`
  width: 80px;
  height: 65px;
  background-color: red;
  color: white;
  font-size: 10px;
  &:hover {
    color:white;
    
  }
  &:focus {
  background: red;
  color: white;
}
  &:active {
    background-color: red;
    color: orangered;
  }
`

const Categories = () => {
  const { categories, setActiveCategory, activeCategory } = useContext(ApplicationContext)
  return ( 

  <div>
    <div>
      <LogoDiv>
        <SvgLogo/>
      </LogoDiv> 
    </div> 
    {categories.map(category => (
      
        <SideButton type="button" key={category.id} 
        onClick={() => setActiveCategory(category)} 
        disabled={!category.Products} 
        style={{border: `1px solid ${category.id === 
        activeCategory.id ? 'hotpink' : 'transparent' }`}}>
          
          <CategoryIcon name={category.icon} />
          {category.name} 
          </SideButton>
           
      ))}
      <WaiterButton>
        <SvgWaiter/>
        <br/>
        Waiter
      </WaiterButton> 
  </div>  
  )   
}

export default Categories
