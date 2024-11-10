import React, { useState } from "react";

// NewPlantForm component for adding a new plant
function NewPlantForm({ onAddPlant }) {
  // Local state to manage the form fields
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  // Handle form submission to create a new plant
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    // Check if all fields are filled
  if (!name || !image || !price) {
    alert("All fields are required!");
    return; // Prevent form submission if any field is empty
  }
    // Create a new plant object from the form values
    const newPlant = { name, image, price: parseFloat(price) };

    // Send the new plant data to the server via a POST request
    fetch("http://localhost:6001/plants", {
      method: "POST", // Specify POST method for adding data
      headers: {
        "Content-Type": "application/json", // Inform the server we're sending JSON
      },
      body: JSON.stringify(newPlant), // Send the new plant data in JSON format
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add plant. Please try again.");
      }
      return response.json();
    })
    .then((data) => onAddPlant(data)) // Call onAddPlant to update parent state
    .catch((error) => alert(error.message)); // Display error if API request fails

    // Reset form fields after submission
    setName("");
    setImage("");
    setPrice("");
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* Form for adding a new plant */}
      <form onSubmit={handleSubmit}>
        {/* Input for the plant name */}
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state on change
        />
        {/* Input for the image URL */}
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)} // Update image state on change
        />
        {/* Input for the plant price */}
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)} // Update price state on change
        />
        {/* Submit button to add the new plant */}
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
