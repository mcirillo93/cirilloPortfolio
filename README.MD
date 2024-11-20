React Developer Portfolio

A responsive single-page portfolio application built with React, featuring sections for About, Projects, and Contact. The project demonstrates the use of React Router for multi-page navigation, and it incorporates a professional design inspired by the Florida Panthers' color scheme.

Features

About Page: Serves as the home page with details about your background and expertise.
Projects Page: Showcases your projects with room for descriptions and links.
Contact Page: Includes a functional contact form for users to reach out.
Responsive Design: Fully responsive layout for seamless use across devices.
Dynamic Navigation: Persistent navbar for navigating between pages using React Router.
Technologies Used
React: Front-end library for building user interfaces.
React Router: Library for navigation between multiple pages.
CSS: Custom styling for a clean and professional design.

Installation and Setup


Prerequisites
Node.js installed on your machine.
A package manager like npm or yarn.
Steps
Clone the repository:
bash
Copy code
git clone https://github.com/mcirillo/cirilloPortfolio.git
cd cirilloPortfolio
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Open the app in your browser:
arduino
Copy code
http://localhost:3000
Folder Structure
graphql
Copy code
src/
│
├── App.js              # Main application component with React Router setup
├── components/
│   ├── Navbar.js       # Navigation bar component
│   ├── About.js        # Home page content
│   ├── Projects.js     # Projects page content
│   ├── Contact.js      # Contact page with form
│   └── styles.css      # CSS file for styling
└── index.js            # Entry point for the React app


Customization
About Section: Update your personal details in About.js.
Projects Page: Add your projects to Projects.js with descriptions and links.
Contact Form: Modify the submission logic in Contact.js to integrate with a backend or email service like EmailJS.
Styling: Adjust colors and layout in styles.css to further personalize the design.


Deployment
Deploy to GitHub Pages
Install the gh-pages package:
bash
Copy code
npm install gh-pages --save-dev
Add the following to your package.json:
json
Copy code
"homepage": "https://mcirillo93.github.io/cirilloPortfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Deploy the app:
bash
Copy code
npm run deploy
Credits
Florida Panthers' color inspiration: Florida Panthers Branding.
React documentation: React Official Docs.
License
This project is licensed under the MIT License.

Feel free to use and modify this portfolio template for your personal or professional projects. Contributions are welcome!