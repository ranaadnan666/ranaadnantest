import React from 'react'
import './style.css';
 import products from './Data';
const Table = () => {
  return (
    <div className='table-pro'>
      <table>
      <tr>
    <th>Product Name</th>
    <th>USA</th>
    <th>Canada</th>
    <th>UK</th>
    <th>Germany</th>
    <th>France</th>
    <th>total Quantity</th>
    <th>Product Price</th>
    <th>total Price</th>
  </tr>
  {products.map((row,i) => (
  <tr key={i}>
    <td>{row.name}</td>
    <td>{row.quantities.USA}</td>
    <td>{row.quantities.Canada}</td>
    <td>{row.quantities.Germany}</td>
    <td>{row.quantities.France}</td>
    <td>{row.quantities.France}</td>
    <td>{row.total_q}</td>
     <td>{row.price}</td>
    <td>{row.total_p}</td>
  </tr>
  ))}
</table>
    </div>
  )
}

export default Table
