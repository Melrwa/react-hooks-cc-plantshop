import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleSoldOutClick = () => {
    setIsSoldOut((prevIsSoldOut) => !prevIsSoldOut);
  };

  return (
    <div className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price.toFixed(2)}</p>
      <button className={isSoldOut ? "sold-out-button" : "primary-button"} onClick={handleSoldOutClick}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </div>
  );
}

export default PlantCard;


