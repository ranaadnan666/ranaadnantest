import React,{useState} from 'react'
import initialFruits from './Data'
const Fruits = () => {
    const [fruits, setFruits] = useState(initialFruits);
    const handleSort = () => {
        const sortedFruits = [...fruits].sort();
        setFruits(sortedFruits);
      };
  return (
    <div>
         <h1>Fruit List</h1>
    <button onClick={handleSort}>Sort Fruits</button>
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
    </div>
  )
}

export default Fruits
