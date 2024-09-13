import React from 'react';
import './CommitmentSection.css';
const CommitmentSection = () => {
  return (
    <div className="commitment-section">
      <img 
        src="https://images.immediate.co.uk/production/volatile/sites/30/2013/05/One-pan-spaghetti-f2aca14.jpg?quality=90&resize=556,505" 
        alt="Delisha Commitment" 
        className="commitment-image"
      />
      <div className="commitment-content">
        <h2>Delisha's Commitment to 100% Natural Ingredients</h2>
        <ul className="commitment-list">
          <li>We use fresh, locally sourced ingredients.</li>
          <li>No artificial flavors or preservatives.</li>
          <li>All our dishes are made with organic produce.</li>
          <li>Responsibly sourced, sustainable meats and seafood.</li>
          <li>Commitment to health and well-being in every meal.</li>
        </ul>
        <button onClick={()=>{
            const section=document.getElementById("food-display")
            section.scrollIntoView({ behavior: 'smooth' });
        }} className='ordernowButton'>Order Now</button>
      </div>
    </div>
  );
};

export default CommitmentSection;
