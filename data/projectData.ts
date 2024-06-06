const projectList = [
  {
    title: "Next.js Todo App",
    technology: "Next.js",
    date: "Friday, December 1, 2023",
    introduction: `In the realm of creative development, where each line of code serves as a brushstroke on the canvas of digital artistry, I embarked on a journey to explore the potential of Next.js. The canvas for my latest endeavor? A CRUD (Create, Read, Update, Delete) note-taking application that not only serves as a practical tool but also stands as a testament to the boundless creativity web development can offer.`,
    sections: [
      {
        heading: "The Birth of an Idea",
        content: `In the mind of a creative developer, ideas flow like colors on a palette. The spark for this project ignited from a desire to showcase the magic of Next.js. I envisioned a note-taking app that would transcend the mundane, leveraging Next.js's features to create a vibrant user experience.`,
      },
      {
        heading: "Objectives for the Journey",
        content: `With a clear vision in mind, I set sail on this creative endeavor, each line of code carrying the promise of discovery. My objectives were meticulously crafted:`,
        list: [
          "Mastery of Next.js: I aimed to immerse myself in the world of Next.js, exploring its potential as a canvas for creativity and innovation.",
          "Pushing the Boundaries: My mission was to push the boundaries of what a note-taking app could be, infusing it with design, animation, and interactivity to delight users.",
          "Sharing the Artistry: As a Creative Developer, I wanted to document my journey and share the artistry behind web development with the global community.",
          "Elevating UI/UX: Elevating user interface (UI) and user experience (UX) to the level of art was at the heart of this project. My goal was to craft an interface that would captivate and engage users.",
        ],
      },
      {
        heading: "The Creative Palette",
        content: `To bring my vision to life, I selected tools and technologies that would become my creative palette:`,
        list: [
          "Next.js and React: Next.js, with its focus on server-side rendering and routing, provided a sturdy canvas upon which I could paint my masterpiece. React, the core of Next.js, served as my brush, allowing me to create dynamic components.",
          "Aesthetic Design: Understanding that aesthetics play a pivotal role, I carefully designed the user interface. Drawing inspiration from modern design principles, I employed Tailwind CSS to add a touch of elegance and responsiveness to the app.",
          "Interaction with Mongoose and MongoDB: Mongoose and MongoDB became my easel for managing the data of the note-taking app. These tools allowed me to seamlessly handle CRUD operations, ensuring smooth and efficient interactions.",
          "Authentication with Security: To ensure that users could securely manage their notes, I integrated robust user authentication, adding a practical and secure dimension to the artistic creation.",
          "Responsive Design: With a focus on creating a design that shines on all devices, I utilized responsive design principles, making the app visually appealing on both desktop and mobile screens.",
        ],
      },
      {
        heading: "The Creative Challenges",
        content: `In the world of creative development, challenges are not obstacles but opportunities to innovate:`,
        list: [
          "The Art of Server-Side Rendering: Implementing server-side rendering required a deep dive into the mechanics of Next.js to ensure the app's performance and user experience were top-notch.",
          "Crafting Responsiveness: Creating a design that would look stunning on all devices demanded a profound understanding of responsive design principles. Every brushstroke of CSS was carefully considered.",
          "Organizing the Code Gallery: Maintaining an organized and clean codebase was paramount. I meticulously refactored and structured the code to ensure it was functional and aesthetically pleasing.",
        ],
      },
      {
        heading: "Sharing the Creative Process",
        content: `Throughout the creative journey, I documented each step with the intention of sharing my artistry with the community. I created blog posts, video tutorials, and code examples that reflected the essence of creative development. As a Creative Developer, my aim was to inspire others by teaching with a dash of artistic flair, making the learning process enjoyable and accessible.`,
      },
      {
        heading: "The Beauty of Completion",
        content: `After weeks of dedicated work and continuous learning, the Next.js CRUD Note App stood as a testament to creative development. It boasted a user interface that blended aesthetics with functionality, server-side rendering for performance, and an intuitive user experience. Users could effortlessly add, edit, and delete notes while their data remained securely stored in MongoDB, thanks to Mongoose.`,
      },
      {
        heading: "The Impact and Lessons of Creativity",
        content: `This project left an indelible mark on the canvas of my creative developer profile:`,
        list: [
          "A Canvas of Next.js Mastery: The project deepened my understanding of Next.js, showcasing its potential as a canvas for innovation and creativity.",
          "Artistic Educational Content: The journey enabled me to create content that celebrated the artistry of web development, emphasizing the importance of making learning enjoyable and accessible.",
          "The Palette of Continuous Improvement: The challenges encountered reinforced the value of persistence and continuous improvement, enriching my skills and knowledge.",
          "The Gallery of Community Engagement: The project fostered a sense of community among creative developers and enthusiasts, becoming a platform for discussions, questions, and collaborations.",
        ],
      },
      {
        heading: "Conclusion: The Ever-Evolving Canvas",
        content: `Building the Next.js CRUD Note App as a Creative Developer was a journey of exploration, innovation, and artistic expression. It illuminated the limitless possibilities that web development offers to those who dare to be creative. As the canvas of creative development continues to evolve, I eagerly await the next artistic endeavor, ready to blend code and creativity into a masterpiece yet to be imagined.`,
      },
      {
        heading: "Getting Started",
        content: `Clone the Repository: Start by cloning the repository to your local machine using the following command:`,
        codeBlock: "git clone https://github.com/lomsadze123/First-NextJs.git",
      },
      {
        heading: "Install Dependencies",
        content: `Install the project dependencies using npm:`,
        codeBlock: "npm install",
      },
      {
        heading: "Configure the Database",
        content: `Set up your MongoDB database and update the connection string in config/database.ts with your MongoDB URI. Create a .env file in the root directory and add your MongoDB URI:`,
        codeBlock: "MONGODB_URL=your-mongodb-uri",
      },
      {
        heading: "Start the Application",
        content: `Run the development server to see the application in action:`,
        codeBlock: "npm run dev",
      },
    ],
  },

  {
    title: "Graphql React App",
    technology: "GraphQL, React",
    date: "Thursday, June 6, 2024",
    introduction: `The Supernova GraphQL React App is a sophisticated web application that leverages GraphQL for efficient data fetching and Apollo Client for robust state management. This project encompasses various features such as user authentication, a dynamic dashboard, comprehensive error handling, and token expiration management. Designed with modern web development techniques like lazy loading, context usage, and live streaming through subscriptions and WebSockets, the Supernova GraphQL React App offers an immersive and responsive user experience.`,
    sections: [
      {
        heading: "Overview",
        content: `GraphQL React App is a React-based web application that utilizes GraphQL for data fetching and Apollo Client for state management. The application includes authentication features, a dashboard, and error handling. It is designed with lazy loading, context usage, and token expiration management. The live demo includes a sign-in feature to demonstrate the authentication process. Additionally, this app tracks user sign-ins globally and privately through live streaming with subscriptions and WebSockets.`,
      },
      {
        heading: "Features",
        content: `The application boasts a variety of features designed to enhance user experience and functionality:`,
        list: [
          "User Authentication (Login/Logout)",
          "Home Page",
          "Dashboard with user-specific data",
          "Error Handling for undefined routes",
          "Token expiration management",
          "Responsive UI",
        ],
      },
      {
        heading: "Tech Stack",
        content: `The tech stack for this project includes both frontend and backend technologies, as well as tools for real-time functionality and validation:`,
        list: [
          "Frontend: React, React Router, React Context, Tailwind CSS, Custom Hook",
          "Backend: GraphQL, Apollo Client, Express",
          "WebSockets: Apollo WebSocket Link for subscriptions",
          "Validation: Zod",
          "Notifications: React Toastify",
        ],
      },
      {
        heading: "Installation",
        content: `Follow these steps to set up the project locally:`,
        subSections: [
          {
            subHeading: "Clone the repository:",
            codeBlock:
              "git clone https://github.com/lomsadze123/supernova-graphql-react-app.git\ncd supernova-graphql-react-app",
          },
          {
            subHeading: "Install the dependencies:",
            codeBlock: "npm install",
          },
          {
            subHeading: "Create a .env file:",
            content: `In the root of the project, create a .env file and add your environment variables:`,
            codeBlock:
              "PORT=your_port\nSECRET_KEY=your_secret_key\nDATABASE_URL=your_db_url",
          },
          {
            subHeading: "Start the development server:",
            codeBlock: "npm run dev",
            content: `Open your browser and navigate to http://localhost:5173.`,
          },
        ],
      },
      {
        heading: "Project Structure",
        content: `The project is organized into various directories and files for better maintainability and scalability:`,
        list: [
          "src/components: Reusable UI components",
          "Header.tsx: Header component",
          "Dashboard.tsx: Dashboard component",
          "src/context: React context for user state management",
          "UserContext.tsx: User context provider",
          "src/pages: Page-level components",
          "Home.tsx: Home page component",
          "Auth.tsx: Auth page component",
          "ErrorPage.tsx: Custom error page component",
          "src/utils: Utility functions (e.g., token management, validation)",
          "token.tsx: Token management utilities",
          "validation.tsx: Validation utilities",
          "src/App.tsx: Main application component",
          "src/apolloClient.tsx: Apollo Client setup",
        ],
      },
      {
        heading: "Usage",
        content: `Key functionalities of the application include:`,
        list: [
          "Authentication: Users can log in with their credentials. If the token is expired, they will be logged out automatically.",
          "Home: The home page is accessible after login.",
          "Dashboard: Displays user-specific information and is only accessible to authenticated users.",
          "Error Handling: Redirects to a custom error page for undefined routes.",
        ],
      },
      {
        heading: "Acknowledgments",
        content: `This project utilizes various technologies and tools that significantly contributed to its development:`,
        list: [
          "React",
          "GraphQL",
          "Apollo Client",
          "React Router",
          "Tailwind CSS",
          "React Toastify",
          "Prisma",
          "SQLite3",
        ],
      },
      {
        heading: "Getting Started",
        content: `Clone the Repository: Start by cloning the repository to your local machine using the following command:`,
        codeBlock:
          "git clone https://github.com/lomsadze123/supernova-graphql-react-app.git",
      },
      {
        heading: "Install Dependencies",
        content: `Install the project dependencies using npm:`,
        codeBlock: "npm install",
      },
      {
        heading: "Configure the Environment",
        content: `Set up your environment variables. Create a .env file in the root directory and add your variables:`,
        codeBlock:
          "PORT=your_port\nSECRET_KEY=your_secret_key\nDATABASE_URL=your_db_url",
      },
      {
        heading: "Start the Application",
        content: `Run the development server to see the application in action:`,
        codeBlock: "npm run dev",
      },
    ],
  },

  {
    title: "Audiophile Ecommerce Website",
    technology: "React",
    introduction: `Welcome to the Audiophile E-commerce Website! This project is a fully-functional e-commerce platform designed for selling premium audio products.`,
    technologies: [
      "React (with React Router)",
      "Tailwind CSS",
      "React Hook Form (with YUP)",
      "Axios",
      "Framer Motion",
    ],
    sections: [
      {
        heading: "Technologies Used",
        content: `The Audiophile E-commerce Website utilizes the following technologies:`,
        list: [
          "React (with React Router)",
          "Tailwind CSS",
          "React Hook Form (with YUP)",
          "Axios",
          "Framer Motion",
        ],
      },
      {
        heading: "Clone the Repository",
        content: `Start by cloning the repository to your local machine using the following command:`,
        codeBlock:
          "git clone https://github.com/lomsadze123/audiophile-ecommerce-website.git",
      },
      {
        heading: "Install Dependencies",
        content: `Install the project dependencies using npm:`,
        codeBlock: "npm install",
      },
      {
        heading: "Start the Application",
        content: `Run the development server to see the application in action:`,
        codeBlock: "npm run dev",
      },
    ],
  },

  {
    title: "Link Sharing App",
    technology: "React / Firebase",
    introduction: `This is a link-sharing application that allows users to add, edit, and manage their social media and other links. Users can also customize their profile details and share their profiles with others.`,
    sections: [
      {
        heading: "Features",
        content: `The Link Sharing App offers the following features:`,
        list: [
          "Add, Edit, Remove Links: Users can add new links, edit existing ones, and remove them as needed.",
          "Profile Customization: Users can add their personal details including profile picture, first name, last name, and email.",
          "Share Profile: Users can share their customized profiles with a single link.",
          "Responsive Design: The application is responsive and works on various screen sizes.",
          "User Authentication: Secure authentication using Firebase.",
          "Data Persistence: All user data is saved in Firebase Firestore.",
        ],
      },
    ],
    technologies: [
      "React: JavaScript library for building user interfaces.",
      "Firebase: Backend-as-a-Service (BaaS) for authentication and Firestore for data storage.",
      "Tailwind CSS: Utility-first CSS framework for styling.",
      "React Router: For routing and navigation.",
      "React Toastify: For showing notifications.",
      "TypeScript: Superset of JavaScript for type safety.",
      "Vite: Next-generation front-end tooling for faster development.",
    ],
    gettingStarted: [
      {
        heading: "Getting Started",
        content: `To get started with the Link Sharing App, follow these steps:`,
      },
      {
        heading: "Prerequisites",
        content: `Make sure you have Node.js and npm installed on your machine.`,
      },
      {
        heading: "Installation",
        content: `Clone the repository to your local machine:`,
        codeBlock:
          "git clone https://github.com/lomsadze123/fullstack-link-sharing-app.git",
      },
      {
        heading: "Install Dependencies",
        content: `Install the project dependencies using npm:`,
        codeBlock: "npm install",
      },
      {
        heading: "Firebase Configuration",
        content: `Create a .env file in the root of the project and add your Firebase configuration:`,
        subSections: [
          {
            subHeading: "Example .env File",
            codeBlock: `
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  VITE_FIREBASE_APP_ID=your_app_id
  VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
            `,
          },
        ],
      },
      {
        heading: "Start the Development Server",
        content: `Run the development server to see the application in action:`,
        codeBlock: "npm run dev",
      },
    ],
    projectStructure: [
      {
        heading: "Project Structure",
        content: `The project structure of the Link Sharing App is organized as follows:`,
      },
      {
        heading: "src/components",
        content: `Contains all the reusable components like Header, SaveButton, UploadImage, etc.`,
      },
      {
        heading: "src/context",
        content: `Context API setup for managing global state.`,
      },
      {
        heading: "src/hooks",
        content: `Custom hooks used in the application.`,
      },
      {
        heading: "src/pages",
        content: `Different pages of the application (Auth, AddLinks, Profile, Preview).`,
      },
      {
        heading: "src/assets",
        content: `Contains images and other static assets.`,
      },
      {
        heading: "src/firebase",
        content: `Firebase configuration and initialization.`,
      },
      {
        heading: "src/types",
        content: `TypeScript type definitions.`,
      },
    ],
  },

  {
    title: "Chat App",
    technology: "React / socket.io",
    introduction: `This is a simple real-time chat application built using React for the frontend and Socket.io for the backend. It allows users to join chat rooms, send messages, and see messages from other users in real-time.`,
    sections: [
      {
        heading: "Features",
        content: `The Real-Time Chat App offers the following features:`,
        list: [
          "Real-Time Messaging: Messages are delivered instantly to all users in the same chat room.",
          "Multiple Chat Rooms: Users can join different chat rooms to have separate conversations.",
          "Simple Interface: The interface is minimalistic and easy to use.",
        ],
      },
    ],
    technologies: [
      "React: Frontend framework for building user interfaces.",
      "Socket.io: JavaScript library for real-time web applications. It enables real-time bidirectional event-based communication.",
      "Node.js: JavaScript runtime for the backend server.",
      "Express.js: Web application framework for Node.js used to build the server.",
      "Tailwind CSS: Utility-first CSS framework used for styling components.",
    ],
  },
];

export default projectList;
