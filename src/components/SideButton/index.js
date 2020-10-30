import React from 'react'
import styled from "styled-components"

const SideButton = styled.button`
  width: 80px;
  height: 65px;
  background-color: #222222;
  color: white;
  font-size: 10px;
  &:hover {
    color: red;
    
  }
  &:focus {
  background: black;
  color: red;
}
  &:active {
    background-color: #222222;
    color: orangered;
  }
`
export default SideButton


