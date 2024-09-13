import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodCard from './FoodCard'
import { StoreContext } from '../../context/storeContext'
import { assets } from '../../assets/assets'
const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h1>Top Dishes Near You</h1>
        <ul className="cards">
      {
        food_list.map((item, index)=> {
            

            return (( category=== "All" || item.category === category )&& (
              <li key={index}>
                <FoodCard
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  img={item.image}
                  id={item._id}
                />
              </li>
            ))}
          )
      }
      </ul>
    </div>
  )
}

export default FoodDisplay
