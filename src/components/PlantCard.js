import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant, onDeletePlant }) {
  // Local state to manage the plant's price and stock status
  const [price, setPrice] = useState(plant.price);
  const [isSoldOut, setIsSoldOut] = useState(false);

  // Handle price change in the input field
  const handlePriceChange = (e) => setPrice(e.target.value);

  // Update the price of the plant in the backend
  const handleUpdatePrice = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH", // Specify PATCH method for updating data
      headers: { "Content-Type": "application/json" }, // Set headers to indicate we're sending JSON
      body: JSON.stringify({ price: parseFloat(price) }) // Send the updated price
    })
    .then((r) => {
      if (!r.ok) {
        throw new Error("Failed to update plant price. Please try again.");
      }
      return r.json();
    })
    .then((updatedPlant) => onUpdatePlant(updatedPlant)) // Update the plant in the parent state
    .catch((error) => alert(error.message)); // Show an error alert if update fails
};

  // Handle plant deletion
  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE" // Specify DELETE method for removing the plant
    })
    .then((r) => {
      if (!r.ok) {
        throw new Error("Failed to delete plant. Please try again.");
      }
      onDeletePlant(plant.id); // Call onDeletePlant to remove the plant from the list
    })
    .catch((error) => alert(error.message)); // Show an error alert if delete fails
};

  return (
    <div className="card">
      {/* Display plant's image */}
      <img src={plant.image} alt={plant.name} />

      {/* Display plant's name */}
      <h4>{plant.name}</h4>

      {/* Display and update plant's price */}
      <p>Price: ${price}</p>
      <input
        type="number"
        value={price} // Bind price input field to state
        onChange={handlePriceChange} // Update the price in state when input changes
      />
      
      {/* Button to trigger price update */}
      <button onClick={handleUpdatePrice} style={{ backgroundColor: "black", color:"white" }}>
        Update Price
      </button>

      {/* Button to toggle plant stock status */}
      <button className={isSoldOut ? "sold-out-button" : "primary-button"} onClick={() => setIsSoldOut(!isSoldOut)}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>

      {/* Button to delete the plant */}
      <button onClick={handleDeleteClick} style={{ backgroundColor: '#8B5E3C' }}>
        Delete
      </button>
    </div>
  );
}

export default PlantCard;
