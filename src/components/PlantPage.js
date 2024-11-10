import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm"; // Component for adding a new plant
import PlantList from "./PlantList"; // Component to display the list of plants
import Search from "./Search"; // Component for search functionality

function PlantPage() {
  // State to store the list of plants
  const [plants, setPlants] = useState([]);
  // State to store the current search query
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch the plant data from the server when the component mounts
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data)) // Set fetched plants to state
      .catch((error) => console.error("Failed to fetch plants:", error)); // Error handling
  }, []); // Empty dependency array ensures this runs only once when the component mounts
  // Function to add a new plant
  function addPlant(newPlant) {
    // Check if the new plant already exists in the plants array
    const plantExists = plants.some((plant) => plant.id === newPlant.id);
    
    if (plantExists) {
      // Show error if plant already exists
      alert("Error: Plant already exists.");
    } else {
      // Add new plant to the plants list and update the state
      setPlants([...plants, newPlant]);
      alert("Plant added successfully"); // Show success alert
    }
  }

  // Function to update an existing plant's details (e.g., price)
  function updatePlant(updatedPlant) {
    // Update plant in the list by checking if IDs match
    const updatedPlants = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    );

    // Check if the plant was updated successfully
    if (updatedPlants.every((plant) => plant.id !== updatedPlant.id)) {
      // Show error if the plant was not found or updated
      alert("Error: Plant  price update failed.");
    } else {
      // Update the plants state with the new plant list
      setPlants(updatedPlants);
      alert("Plant price updated successfully"); // Show success alert
    }
  }

  // Function to delete a plant
  function deletePlant(id) {
    // Confirm with the user before deleting the plant
    const isConfirmed = window.confirm("Are you sure you want to delete this plant?");
    
    if (isConfirmed) {
      // Filter out the plant with the given ID from the list
      const remainingPlants = plants.filter((plant) => plant.id !== id);
      
      // Check if any plant was removed (i.e., plant exists in the list)
      if (remainingPlants.length === plants.length) {
        alert("Error: Plant  delete failed."); // Show error alert if plant not found
      } else {
        // Update the state with the remaining plants after deletion
        setPlants(remainingPlants);
        alert("Plant deleted successfully"); // Show success alert
      }
    }
  }

  // Function to handle changes in the search input field
  const handleSearchChange = (query) => setSearchQuery(query);

  // Filter plants based on the search query (case-insensitive search)
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      {/* Render NewPlantForm to add new plants */}
      <NewPlantForm onAddPlant={addPlant} />
      {/* Render Search component to search plants by name */}
      <Search onSearchChange={handleSearchChange} />
      {/* Render PlantList to display filtered plants */}
      <PlantList
        plants={filteredPlants} // Pass the filtered plants as props
        onUpdatePlant={updatePlant} // Pass the update function as a prop
        onDeletePlant={deletePlant} // Pass the delete function as a prop
      />
    </main>
  );
}

export default PlantPage;
