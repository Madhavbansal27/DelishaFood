import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
    
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Discover Our Dishes</h1>

      <p className='explore-menu-text'>Take a look at our menu and discover a variety of delicious dishes. From familiar favorites to exciting new flavors, there's something to satisfy every craving.</p>

      <div className="explore-menu-list">
        { menu_list.map((item,index)=>{
            return (
                
                <div key={index} onClick={()=>setCategory(prev => prev===item.menu_name?"All":item.menu_name)} className='explore-menu-list-item'>
                    <img className={category===item.menu_name? "active": ""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })
        }
      </div>
      <hr />
    </div>
  )

}

export default ExploreMenu;
