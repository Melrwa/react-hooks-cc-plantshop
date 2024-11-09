import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]=useState([]); // State for storing the list of plants
  const [searchQuery, setSearchQuery] = useState("");  // State for search query
  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((data)=>setPlants(data));
  }, []);
  // Handle adding a new plant
  const addPlant = (newPlant) => {
    // Update the plants list by adding the new plant
    setPlants([...plants, newPlant]);

    // Persist the new plant to the backend
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(newPlant),
    });
  };
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <main>
   <NewPlantForm onAddPlant={addPlant} />  {/* Pass addPlant as a prop */}
      <Search onSearchChange={handleSearchChange} />  {/* Pass handleSearchChange as a prop */}
      <PlantList plants={filteredPlants} />  {/* Pass the filtered plants to PlantList */}
    </main>
  );
}

export default PlantPage;
