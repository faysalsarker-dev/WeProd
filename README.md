# Weprod

## Live Link
Visit the live website: [Weprod](https://weprod-87efb.web.app)

## About
Weprod is a Fullstack functionality-based Single Page Application (SPA) that provides users with the ability to search, filter, categorize, and sort products. This project is designed to offer a seamless and efficient browsing experience, allowing users to quickly find products that meet their needs. The application is equipped with pagination, search functionality, categorization, sorting, and authentication features.

## Features

### 1. Pagination
- **Backend Implementation:** Efficiently loads products in pages.
- **Frontend Display:** Page numbers are shown along with navigation buttons (Next, Previous) to help users navigate through different pages.

### 2. Searching
- Users can search for products based on the product name.
- The search feature is integrated into the backend to ensure accurate and fast search results.

### 3. Categorization
- Products are categorized into different categories, such as:
  - **Brand Name**
  - **Category Name**
  - **Price Range**
- Users can filter products using one or more of these categories simultaneously.

### 4. Sorting
- Users can sort products by:
  - **Price: Low to High**
  - **Price: High to Low**
  
### 5. Authentication
- **Google Authentication:** Implemented using Firebase.
- **Email and Password Authentication:** Implemented using Firebase.

## Getting Started

### Prerequisites
- Node.js and npm installed on your local machine.
- Firebase account setup for authentication.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/faysalsarker-dev/WeProd.git
    cd WeProd
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Set up the Firebase authentication:
   - Create a Firebase project and enable Google and Email/Password authentication.
   - Add your Firebase configuration to the project.

4. Run the server:
    ```bash
    npm start
    ```

### Running the Project Locally

1. Ensure that the backend server is running.
2. Navigate to the frontend directory:
    ```bash
    cd path/to/frontend
    ```

3. Install frontend dependencies:
    ```bash
    npm install
    ```

4. Start the frontend application:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Backend Repository
The server-side code can be found in this repository: [Weprod Backend](https://github.com/faysalsarker-dev/Weprod-backend).

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License.
