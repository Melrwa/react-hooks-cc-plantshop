import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant, onDeletePlant }) {
  return (
    <ul className="cards">
      {/* Iterate over the plants array and render a PlantCard for each plant */}
      {plants.map((plant) => (
        <PlantCard
          key={plant.id} // Use plant's id as the key to ensure unique identification for each component
          plant={plant} // Pass the plant data to the PlantCard component
          onUpdatePlant={onUpdatePlant} // Pass the update function to handle price updates
          onDeletePlant={onDeletePlant} // Pass the delete function to handle plant deletion
        />
      ))}
    </ul>
  );
}

export default PlantList;
