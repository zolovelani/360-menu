import React, {useContext} from 'react'
import ApplicationContext from '../../context/Application'
import OrderSummery from "../../components/OrderSummery"

const Orders = () => {
  const {orders, addToOrders, removeOrderAtIndex, setActiveProduct, total } = useContext(ApplicationContext)
  let totalCost = 0

  orders.forEach(order => {
    totalCost = totalCost + order.unitCost
  });

  return (

  <div>
    
    <OrderSummery/>
    {orders.map((order, index) => (
    <div key={`order_${order.id}`}>
     
      {order.name} ${order.unitCost} &bull; {order.selectedOption?.option}
    <button type="button" onClick={() => removeOrderAtIndex(index)}>🗑</button>
    <button type="button" onClick={() => addToOrders(order)}>🔁</button>
    <button type="button" onClick={() => setActiveProduct(order)}>✏️</button>
    
  </div>
  
    ))}
    <div className="total">
      <h3>
        Total: ${totalCost}
      
      </h3>
    </div>
  </div> 
  )
}


export default Orders
