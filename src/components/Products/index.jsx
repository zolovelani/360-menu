import React, { useContext } from "react"
import ApplicationContext from "../../context/Application"
import { Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row, Button } from 'reactstrap'

import styled from 'styled-components'

const Clamp = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;

`
const ProductDiv = styled.div`
background-color: white;
color: black;
padding: 30px;

`




const Products = () => {
  const { activeCategory, products, setActiveProduct } = useContext(
    ApplicationContext
  )
  return (
    <>
    <ProductDiv>
      <h4 style={{color: "red"}}>Table 19</h4>
    <h1>{activeCategory.name} Menu</h1>
    <Row>
      
        {products
          .filter(product => product.category.includes(activeCategory.id))
          .map(product => (
            <Col xs="6" sm="6" style={{ padding: 3, }} key={products.id}>
            <Card style={{ margin: "0 10px", display: 'flex', flexDirection: 'row'}} 
            onClick={() => setActiveProduct(product)} key={product.id}>
              {product?.images?.[0]?.thumbnails.large.url ?(
                  <CardImg 
                        top ={true}
                        style={{height:170, width:170}}
                        src={product?.images?.[0]?.thumbnails.large.url}
                        alt={product.name}
                        />
                      ) : ( <div> placeholder image {activeCategory.icon}</div>
                      )}
                            <CardBody style={{ fontSize: "12px",}}  >
                            <CardTitle><h6>{product.name}</h6></CardTitle>
                          <CardText>
                          <Clamp> {product.description}</Clamp>
                        <h6>R{product.unitCost}</h6>
                      <Button style={{ background:"red",  }}>+</Button>
                  </CardText>
                </CardBody>   
              </Card>
           </Col> 
          ))} 
      </Row>
    </ProductDiv>
    </>
  )
}
export default Products