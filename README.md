# Rick and Morty Characters Search

### "Rick and Morty Characters Search"

This project is a simple React application that leverages the [Rick and Morty API](https://rickandmortyapi.com/) to display a list of characters, allow users to search for characters by name, and view detailed information about each character on a separate page. The app is built using React and TypeScript and follows best practices in accessibility and responsive design.

---

## Deploy

* [https://massaracsh7.github.io/test-task-fuse8/](https://massaracsh7.github.io/test-task-fuse8/)

---

## About the Project

### Home Page

- **Search by Name:**
  - The search input is automatically focused when the page loads for improved usability.
  - When the user enters more than three characters (based on the first word), a request is sent to the API to search for characters by name (e.g., "rick").
  - The search supports only Latin letters (with spaces) and provides a visual error if other characters are entered.

- **Display Results:**
  - The search results are displayed as character cards.
  - Each card shows the character’s name, status (with color coding), and creation date.
  - Each card is clickable and navigates to the character’s detail page, using the URL provided in the API response.

### Character Detail Page

- **Detailed Information:**
  - When a character is selected, a dedicated page displays comprehensive information including the character’s image, name, status, gender, species, location, and origin.

- **Navigation:**
  - A back button allows the user to return to the main page.

### API

- The application uses the Rick and Morty API. For search, it leverages the `?name=<query>` parameter.
- If the search yields multiple pages, only the first page of results is displayed, as the design does not include pagination.

  > **Note:** In a full-scale project, pagination or infinite scrolling could be implemented to allow users to view all results.

### Responsive Design

- The application is fully responsive, with adaptive layouts ranging from **320px** to **1920px**, ensuring an optimal user experience on mobile devices, tablets, and desktop screens.

### Accessibility

- The search input is auto-focused on page load.
- ARIA labels are used on interactive elements (e.g., the search input and navigation buttons) to improve screen reader support.

---

## Stack

- **React**
- **TypeScript**
- **Vite**

---

## Setting Up

1. **Clone this repo:**
   ```bash
   git clone https://github.com/massaracsh7/test-task-fuse8.git

2. **Navigate to the project folder:**
   ```bash
   cd test-task-fuse8

3. **Install dependencies:**
   ```bash
   npm install

4. **Run the app in development mode:**
   ```bash
   npm run dev

5. **Open http://localhost:5173 in your browser.**

## Available Scripts

   *Builds the app for production to the build folder. Your app is ready to be deployed!*

      npm run build

   
   *Starts a local web server that serves the built solution for previewing.*

      npm run preview


