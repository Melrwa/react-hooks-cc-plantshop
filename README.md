

# Plantsy
## Overview

This is a simple admin side  plant management application built with React that allows users to:
- Add a new plant
- Update the price of an existing plant
- Delete a plant
- Search through the plant list

The app communicates with a server running locally at `http://localhost:6001` and provides interactive alerts to notify users about the success or failure of each operation.

## Features

- **Add Plant**: Add a new plant to the list.
- **Update Plant**: Update the price of an existing plant.
- **Delete Plant**: Delete a plant after confirming the action.
- **Search**: Search for plants by name.
- **Error Handling**: Alerts are displayed if a plant is not found or a failed operation occurs.

## Getting Started

To get started with this project locally, follow the instructions below.

### Prerequisites

Make sure you have `Node.js` and `npm` installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project folder:

   ```bash
   cd <project-folder>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

1. Start the server (assuming you have a backend running on `localhost:6001`):

   ```bash
   npm start
   ```

2. Open the app in your browser at:

   ```
   http://localhost:3000
   ```

   The app will now be running on port `3000`, while the server runs on `localhost:6001`.

## Live Link

Once deployed, you can view the live version of the app at the following URL:

[Plantsy](<https://react-hooks-cc-plantshop-sigma.vercel.app/>)

*Note: Modify this section with the actual link once the app is live.*

## Functions

### `addPlant(newPlant)`
- **Description**: Adds a new plant to the list if it does not already exist.
- **Alert**: "Plant added successfully" or "Error: Plant already exists."

### `updatePlant(updatedPlant)`
- **Description**: Updates the price of an existing plant.
- **Alert**: "Plant price updated successfully" or "Error: Plant not found or price update failed."

### `deletePlant(id)`
- **Description**: Deletes a plant after confirming the action with the user.
- **Alert**: "Plant deleted successfully" or "Error: Plant not found or delete failed."

### `handleSearchChange(query)`
- **Description**: Filters plants by name based on the search query entered by the user.

## Contributing

Feel free to fork the project and create a pull request if you would like to contribute. Any improvements or suggestions are welcome!

## License

This project is open-source and available under the MIT License.

---
