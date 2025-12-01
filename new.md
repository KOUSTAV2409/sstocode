1. get started with react
* What is react and why to use it ?
* Whats with version of react and react docs
* We need a bundler - Vite
* Your first react app in browser
* React in online code editors
* Understand every file in react
* Pick your path for react course
* Build command in react
* Take your react application to production

What is react and why to use it ?
This introductory session establishes why React is the dominant and highly relevant technology for modern front-end development. React is defined as a JavaScript library—not a framework—used primarily for building User Interfaces (UIs), meaning it handles the front-end display for applications on the web, mobile (React Native), and even VR.

React revolutionized development by introducing the Component-Based Architecture paradigm. Developers can now build small, reusable pieces (components) that can be easily modified and combined to create larger, complex applications.

The key problem React solves is the cumbersome, manual updating of the Document Object Model (DOM) using vanilla JavaScript, which was slow and error-prone. React streamlines this, allowing a complex UI update that once took ten lines of code to be done in just one. Its success stems from offering a smoother developer experience, providing speed and high performance.

Key features include:

JSX: Allows writing HTML-like code within JavaScript for generating UIs.

Huge Ecosystem: Supported by a massive community, libraries, and resources.

Cross-Platform Potential: Skills are transferable to various environments (mobile, VR).

The course will proceed practically, covering the transfer from legacy methods (CDNs, class-based components) to modern approaches, including using meta-frameworks like Next.js and Remix.

08:33
Whats with version of react and react docs
This session addresses common concerns about React versioning and outlines the practical, code-first approach of the course.

The instructor assures learners that while React is constantly updated (currently version $\mathbf{19.2}$), the foundational concepts remain rock-solid. New versions primarily add features without breaking core functionality. Therefore, students shouldn't panic over version changes, as the course will cover the core principles (like nesting components, conditional rendering, and adding styles) that are always constant.

Crucially, the session highlights the current recommendation from the official $\mathbf{React.dev}$ documentation: for professional development, it is recommended to start using React through a meta-framework like Next.js, Remix, or Expo (for mobile), rather than starting with raw React setup (like Create React App, which is rarely mentioned now). This is because meta-frameworks provide essential structure and tools needed for production.

However, the course itself will prioritize learning pure React fundamentals first to understand the core library before moving on to these meta-frameworks. The teaching style is emphasized as practical, hands-on, and code-first, avoiding excessive theoretical depth, particularly around tools like Vite or building tools from scratch. The next video will guide students through creating their very first React application.

05:10
We need a bundler - Vite
This session explains the essential role of a bundler like Vite in modern React development and guides students through the necessary tool installation.

The Role of the Bundler (Vite)

The fundamental challenge is that while developers write complex React code across many files (JSX, TSX), web browsers only understand raw HTML, CSS, and JavaScript (ideally from a single file). The bundler (Vite is used here as the modern, fast option, replacing older tools like Create React App) solves this by:

Combining all modular code files into a single, optimized output file.

Transpiling high-level or newer JavaScript syntax into code compatible with older browsers.

Performing optimizations, such as removing unused variables, to enhance developer experience and performance.



Essential Tool Setup

To begin building the React application, students must ensure the following are installed:

Code Editor: VS Code (or any editor like Vim).

Browser: Chrome (preferred for its developer tools).

Runtime: Node.js (version 20+ recommended) and its package manager, npm.

Project Initialization: The command npm  create vite@latest will be used in the next video to generate the React application boilerplate.



07:08
Your first react app in browser
The primary goal of this session is to successfully create and run the first React application using the Vite bundler.

Creating and Running the React App

The process starts in VS Code's built-in terminal, where the standard command is executed: npm create vite@latest. To ensure the project files are created directly within the current directory, the input provided at the project naming prompt is a single dot (.).

During the setup, the following choices are made:

Framework: React is selected.

Variant: The vanilla JavaScript variant is chosen to keep the initial setup simple.

Once the project boilerplate is generated, the application is launched by running the command npm run dev. This command executes the 'dev' script defined in the package.json file, which starts the local development server. The running application is accessible on a local port (e.g., localhost:5173), which, as the instructor points out, cryptically spells 'VITE' in Roman numerals, reflecting the bundler's name.

The resulting boilerplate features the Vite and React logos and a functional counter component, confirming the setup is complete. Students are shown how to stop the server (Control + C) and restart it using the npm run dev script. The next videos will analyze the generated file structure and begin modifying the code.

07:26
React in online code editors
This session provides options for developers who prefer or need to use online code editors instead of a local environment for writing React code. While the best practice for professional development and understanding the ecosystem is to code in a local system (using tools like VS Code), online alternatives offer convenience.

The session highlights platforms like Stack Blitz and Code Sandbox, which provide fully functional, browser-based development environments. These platforms offer a quick way to launch new React projects (often built on Vite) with instant, runnable environments, complete with a file structure, terminal access, and output preview, mirroring the VS Code experience.

The instructor emphasizes that the primary goal is consistent code writing, regardless of the platform. Although the course focuses on local development, these online editors are excellent resources for experimentation, rapid prototyping, or for those temporarily unable to set up a local environment. The next video will proceed by diving into the file structure of the newly created local React application.

03:02
Understand every file in react
In this lesson, the instructor demonstrates how to build and integrate a new React functional component called QDisplay to manage and present queue data efficiently. The video covers using ES7 React/Redux snippets (like rfce) in VS Code to speed up component creation, passing props, and handling function references such as onUpdateStatus and onRemove between components. A key concept explained is conditional rendering, where the UI changes dynamically based on the queue’s length—showing “No customer data” when empty or rendering the actual data otherwise. The instructor also introduces a helper JavaScript function, getStatusColor, which uses a switch-case to return colors based on status values. Throughout the walkthrough, the focus remains on writing clean JSX, separating JavaScript logic, and simplifying data flow between components compared to traditional JavaScript approaches. This tutorial highlights how React components, props, and conditional rendering create a smoother, more scalable development experience.

09:49
Pick your path for react course
n this video, the instructor emphasizes that React is essentially a more expressive way of writing JavaScript, and mastering JavaScript fundamentals is crucial before diving deep into the React ecosystem. While JSX may look fancy, it still compiles down to pure JavaScript, making core concepts like loops, map, foreach, imports, and exports essential for building real-world React applications. The instructor encourages learners to strengthen their JavaScript and Git skills, providing curated resources for both, including a free Git guide. Understanding Git and having a GitHub (or GitLab) account is important, especially when hosting projects on platforms like Vercel or Netlify. Learners are advised to choose their own learning path—either revisiting the JavaScript section or continuing directly with React based on their comfort level. The next video will demonstrate how to deploy the current React project to production, helping learners gain confidence in real deployment workflows.

03:55
Build command in react
In this video, the instructor explains how simple and beginner-friendly React deployment really is, encouraging developers to overcome the fear of hosting their first project. He introduces two major managed hosting services—Vercel and Netlify—both offering generous free tiers for deploying React and Next.js applications. The lesson also covers the difference between managed hosting and self-managed deployment using servers like virtual machines or EC2 instances. A key highlight is understanding the build process using the npm run build command powered by Vite, which converts JSX and component-based code into browser-ready HTML, CSS, and JavaScript. This generated output lives in the dist folder, which is what hosting platforms use to serve the production version of your application. By understanding how bundlers, build scripts, and deployment pipelines work, learners gain confidence to publish their React apps to production effortlessly.

06:08
Take your react application to production
In this video, the instructor demonstrates how easy it is to deploy a React application to production using Git, GitHub, and managed hosting platforms like Vercel and Netlify. After creating a new GitHub repository, the codebase is pushed using essential Git commands such as git init, git add, git commit, and git push. Once the repository is connected to Vercel, the platform automatically detects the Vite configuration, runs the npm run build script, and serves the optimized HTML, CSS, and JavaScript files from the dist folder. The process also enables seamless CI/CD pipelines, allowing automatic redeployment whenever changes are pushed to the main branch. The instructor also shows how to attach a custom domain, manage environment variables, and monitor deployments. This practical walkthrough reinforces how simple modern web deployment has become, empowering developers to confidently ship real-world React applications.





2. Component ecosystem of react

* Configure tailwind in react application
* Building card with tailwind
* What are props in react
* Building your first component
* Custom components with props
* Building faster with tailwind components
* Overview of Shadcn components and setup
* Project ahead - Get ready

Configure tailwind in react application
In this video, the instructor introduces an unplanned yet highly practical section of building with React and Tailwind CSS, focusing on helping beginners gain confidence in the React ecosystem. He explains that React development is very similar to working with traditional HTML, CSS, and JavaScript, but the component-based workflow may feel unfamiliar at first. To simplify styling, he demonstrates how Tailwind CSS provides clean, utility-based classes like text-blue-500, border-2, rounded-xl, and p-4, making UI creation faster and more intuitive. The session walks through creating a fresh Vite + React project, installing Tailwind using npm, updating the vite.config.js, importing Tailwind directives into the CSS file, and verifying the setup with live changes. This foundational setup prepares learners for building reusable React components with modern styling practices. The goal of this section is to build comfort, encourage experimentation, and show how simple it is to integrate powerful tools like React and Tailwind in real-world projects.

10:05
Building card with tailwind
In this video, the instructor explains the fundamentals of building your first React component by demonstrating how modern websites are structured using repeatable UI elements like cards. He shows how a simple card layout—containing an image, title, paragraph, and button—can be created inside a React app and styled using Tailwind CSS classes such as bg-white, rounded-2xl, shadow, p-4, and text-gray-800. The lesson covers key React concepts like using className instead of class, organizing markup with reusable div blocks, and progressively enhancing design with Tailwind utilities like hover effects, flexbox, and object-cover for images. The instructor emphasizes how components allow you to reuse identical structures with different data, making development more efficient and scalable. By the end, viewers understand how to design a clean, responsive card UI and prepare it to be converted into a fully reusable React component in the next lesson.

10:13
What are props in react
In this lesson, the instructor explains how to convert a styled card into a reusable React component, introducing key concepts like components, props, and properties. He clarifies that a component is any repeatable UI element—such as a button, hero section, or complete card—that can display different information each time it’s used. Using a visual breakdown, he shows how a card’s image, title, and paragraph become its “properties,” which React developers call props. By passing different props, the same component can generate multiple unique cards without rewriting code. The instructor also demonstrates structuring multiple cards using a parent container styled with Tailwind CSS classes like flex and gap-4, making layout control effortless. The goal is to establish a centralized component file and dynamically feed it props to render reusable UI blocks. This session builds a strong foundation for understanding how data flows inside components and prepares viewers to implement full componentization in the next video.

06:00
Building your first component
In this video, the instructor demonstrates how to organize and build reusable React components by creating a dedicated Components folder and defining a structured Card.jsx file. He explains best practices like naming components with capital letters and using JSX, a powerful blend of HTML and JavaScript, to render UI elements. The lesson walks through creating a simple Card function, exporting it, and importing it into App.jsx to reuse it just like an HTML tag. By moving the entire card layout into this component, developers can generate multiple cards with a single line of code, leading to cleaner and more scalable UI development. The instructor also highlights the importance of maintaining a centralized repository of components and preparing to pass dynamic props—such as image, title, and text—to make each card unique. This session reinforces core React concepts, efficient folder structuring, and component reusability, setting the stage for dynamic props implementation in the upcoming lesson.

05:58
Custom components with props
In this lesson, the instructor demonstrates how to make React components fully dynamic using props, allowing each card to have unique titles, button text, images, and other customizable data. He explains how props work as an object passed from the parent (App.jsx) into the child component (Card.jsx) and how to access them using destructuring for cleaner syntax. The video covers switching between JSX’s text mode and JavaScript mode using curly braces, setting default values for missing props, and updating multiple UI elements like text, links, and images through prop-driven customization. The instructor also shows how to convert the button inside the card into its own reusable Button component, further reinforcing the power of component-based architecture. By the end, learners understand how to control card content dynamically, reuse components efficiently, and build scalable, maintainable UI structures using React, JSX, and props.



11:11
Building faster with tailwind components
In this lesson, the instructor expands on building reusable React components by introducing pre-built UI elements from modern libraries like Tailwind CSS, showcasing how developers can speed up workflow instead of creating every component manually. He demonstrates how to integrate ready-made header, hero, and navigation components by copying their React code, customizing text, images, and styling, and fixing minor issues caused by existing CSS. The tutorial highlights how component-based architecture, combined with props and JSX, allows developers to rapidly build scalable interfaces. The instructor also explains why companies rely on premium UI component libraries and how startups save development time using pre-designed blocks. By importing, modifying, and rendering these components in App.jsx, learners see how powerful and flexible the modern React ecosystem is. The video concludes by teasing more advanced UI libraries that offer even richer, production-ready components for faster development.

11:00
Overview of Shadcn components and setup
n this lesson, the instructor introduces shadcn, a modern design system widely used in the React and Tailwind CSS ecosystem. Unlike typical component libraries, shadcn acts as a component delivery mechanism, allowing developers to import fully customizable UI components directly into their codebase using commands like npx shadcn. The video walks through setting up shadcn with Vite, configuring tsconfig, installing dependencies, and fixing common import path issues. The instructor demonstrates how shadcn automatically generates TypeScript-based components such as Button, Navigation Menu, and advanced UI blocks, which can be modified freely inside the project. He also explains why shadcn works more seamlessly with Next.js, though it can still be used with Vite with minor adjustments. The session highlights the power of reusable React components, Tailwind utilities, and third-party UI blocks, enabling developers to build beautiful, production-ready interfaces faster.

19:20
Project ahead - Get ready
In this summary lesson, the instructor highlights the transition from learning React fundamentals to building real, practical React projects. Instead of focusing heavily on theory—like children props, reactivity, or internal component behavior—the course now shifts toward hands-on development to strengthen confidence and develop real-world problem-solving skills. The instructor emphasizes that the ultimate goal of mastering React and Next.js is to build functional web applications, not just memorize concepts. Upcoming sections will follow a project-based approach where each project introduces a new challenge, teaches debugging, and reinforces key concepts through experience. Students will encounter genuine errors, learn troubleshooting, and gradually work toward advanced topics like APIs, AI integration, and more. This practical learning path accelerates understanding, improves fluency with React components, and prepares learners for real-world development. The instructor encourages staying consistent, taking notes, and enjoying the journey as the next section begins with the first project.

3. Your first react project with state
Introduction to counter project with forms
Javascript run time - Node and Bun for react
Writing HTML elements and forms in react
Behind the scene of react state
What are hooks in react
Going in depth of useState hook
Handling form in react


Introduction to counter project with forms
In this video, the instructor introduces the first hands-on React project, a simple yet foundational React counter application built using Vite. Although the interface looks basic, it covers essential concepts like state management, reactivity, event handling, and form control. The project demonstrates how to display and update dynamic values, manage initial state (e.g., starting the counter at 0, 5, or 63), and trigger UI changes through onClick events. Users learn how React’s reactivity ensures changes propagate instantly across the UI—whether increasing, decreasing, or resetting the count. The lesson also covers real-time input handling, where modifying a form field immediately updates displayed values. These core concepts apply to practical scenarios like login forms, API inputs, and interactive UIs. This project-based approach ensures learners naturally absorb key React fundamentals while building something meaningful. The next video begins with creating a fresh Vite React setup to start building the counter step-by-step.

03:00
Javascript run time - Node and Bun for react
In this video, the instructor explains the fundamentals of JavaScript runtimes and how they power modern React development. The lesson begins by breaking down the role of JS runtime engines like Chrome’s V8, which interprets JavaScript code so it can execute on a machine. The instructor then explains how V8, combined with additional libraries, evolves into Node.js, enabling JavaScript to run outside the browser. Newer runtimes like Deno and Bun are introduced, highlighting Bun’s impressive speed and its ability to serve as a drop-in replacement for Node. The video then demonstrates creating a new Vite project using Bun, showing its fast installation and seamless compatibility. Inside the fresh setup, the instructor cleans the default boilerplate and builds a simple React component from scratch. This overview helps learners understand runtimes, package managers (npm, yarn, pnpm), and how they influence React workflows, setting the stage for building the upcoming project efficiently.

08:50
Writing HTML elements and forms in react
In this video, the instructor focuses on setting up all necessary HTML elements inside a React component before adding functionality. The lesson explains how global CSS (via index.css) and component-level CSS (via app.css) work together in the React ecosystem, and demonstrates styling both with classes and inline styles using double curly braces. The instructor structures the UI by adding a counter display, multiple buttons (Increase, Decrease, Reset), and an input field with properties like value, onChange, margin, padding, and border. The video also highlights how to use className, how Tailwind or custom CSS can be integrated, and how reusable styles can be managed. While the UI is not functional yet, this step builds a solid understanding of JSX and component structure. The next video will cover adding React functionality and event handling to bring the counter application to life.

08:37
Behind the scene of react state
In this video, the instructor explains the core concept of state management in the React ecosystem, comparing how traditional JavaScript updates UI elements versus how React state works. In normal JavaScript, developers manually update each DOM element using references like document.getElementById, which becomes inefficient when multiple UI components depend on the same data. React solves this by providing a special way of declaring variables—known as state—which automatically updates every place where that state is used. Instead of manually modifying the DOM, developers simply update the state variable, and React handles the UI updates across the entire component tree. This ensures cleaner, more maintainable code and seamless updates triggered by events like clicks, form changes, or page load. The instructor emphasizes understanding this mental model before implementing it. In the next video, viewers will learn how to declare this “magical” state variable using React’s built-in tools like useState.

07:39
What are hooks in react
In this video, the instructor explains how React state works using the useState hook, which provides a special way to declare and update variables in the React ecosystem. Unlike normal JavaScript variables, React state variables automatically trigger UI updates across the DOM wherever they are used. The lesson shows how to import useState from React, set a default value, and understand the two returned elements: the state variable and the state updater function. The instructor emphasizes best practices, such as naming patterns like count and setCount, and clarifies that you should never modify state directly using expressions like count = count + 1. Instead, updates must always be performed using the setter function. The video also demonstrates how different default values—numbers, strings, objects, or functions—can be initialized using useState. This foundational understanding prepares developers for properly managing reactivity and building dynamic components in React.

08:37
Going in depth of useState hook
In this video, the instructor dives deep into how React state updates work using the useState hook and its setter function. The lesson explains that while the setter, such as setCount, may look simple, it actually contains an internal callback mechanism that receives the previous state value. This is crucial when performing multiple or sequential updates, as directly modifying state like count + 1 can lead to incorrect results. Instead, React recommends using the functional update pattern: setCount(prev => prev + 1), which ensures accuracy during re-renders. The instructor also demonstrates how event handlers, callback functions, and passing arguments affect state updates, and why certain syntaxes fail unless functions are explicitly invoked. Through debugging and real examples, the video highlights the difference between shorthand updates and proper functional state updates, ensuring consistent behavior. This comprehensive explanation helps viewers understand the behind-the-scenes logic of React’s reactivity model.

12:52
Handling form in react
In this video, the instructor completes the first React project by demonstrating how to manage interactive UI elements using React state, useState hooks, and event handling. The lesson covers implementing increment, decrement, and reset buttons using the state updater function, ensuring values never drop below zero with Math.max. It then introduces handling form inputs by creating a second state variable to capture and display user-entered values. The instructor explains how onChange events, event objects, and e.target.value work together to keep form data in sync with the UI. Using controlled components, the input value updates instantly, and clicking the “Set” button applies the form value to the main counter while resetting the input field. The session also reinforces best practices like avoiding direct state mutation and using callbacks inside set functions. This video provides a complete, beginner-friendly guide to React state management, form handling, and building dynamic, interactive components.

4. Queue management system project
Queue Management project walkthrough
Planning the application workflow
Learn the data flow in components in react
Handle form and pass data to parent
A little trip to map and filter in javascript
Understand Conditional rendering in react
Debugging in multi components

Queue Management project walkthrough
In this video, the instructor introduces a new real-world React project: a Queue Management System built using React components, state, and props. Unlike beginner exercises, this project mirrors actual corporate applications used in hospitals, restaurants, and support centers. The app is split into two major components—a form component for adding customers and a data display component for managing the queue. Users can enter their name, choose a service type, and add themselves to the queue. Each entry displays buttons like Serve, Complete, and Remove, dynamically updating the UI using React state management. The instructor explains how the system handles form validation, conditional rendering, component communication, and dynamic status updates such as “waiting,” “serving,” and “completed.” As users interact with the application, multiple states change simultaneously, demonstrating real-world complexity. This project strengthens understanding of React props, event handling, data flow, and building fully interactive interfaces.

05:36
Planning the application workflow
In this video, the instructor begins building the Queue Management System by outlining a clear plan of action and setting up a fresh Vite React project. He explains that the application will rely on two main React components: a Form Component to generate user data and a Display Component to show and manage the queue. After initializing the project with npm, he removes the default boilerplate and sets up a clean App.jsx structure with a header. The instructor then adds prewritten CSS, introduces CSS variables, and begins styling the layout. He also installs react-icons to handle UI icons used later in the project. The video emphasizes planning before coding and choosing a component-first approach. In the next steps, the form will be built, state will be managed using React state hooks, and data will be passed from the form to the display using props, enabling fully dynamic queue interaction.

06:59
Learn the data flow in components in react
In this video, the instructor refines the project structure for the Queue Management System by fixing CSS imports and establishing a clear React component architecture. After organizing the layout with a dedicated components folder, he demonstrates how the App component will serve as the parent container, holding key React state using useState and essential methods like addToQueue, updateStatus, and removeFromQueue. These functions will manage and manipulate queue data dynamically. The instructor then creates the QForm component, sets up its export structure, and explains how to pass functions from parent to child using props, enabling the form to trigger actions such as adding new customers to the queue. By passing function references like onAdd, he highlights how data and behavior flow in React applications. This foundational setup ensures clean component communication, state management, and a scalable structure before building full functionality in upcoming videos.

11:24
Handle form and pass data to parent
In this video, the instructor builds the full functionality of the QForm component in a React-based Queue Management System, demonstrating real-world concepts like state management, form handling, validation, and prop-based communication. He creates two independent useState variables—name and service—to manage form inputs, and implements a handleSubmit function that prevents default form behavior, validates fields using trim(), and then triggers the onAdd callback passed from the parent component. The form UI is constructed using JSX with controlled inputs, a dynamic select dropdown, and a submit button enhanced with React Icons. After submission, the form resets state values and passes data back to the parent, where the addToQueue method updates the queue state using the spread operator, adds a unique ID via Date.now(), and sets an initial status of “waiting.” This video reinforces essential React data flow, preparing the structure for upcoming dynamic queue updates.

13:43
A little trip to map and filter in javascript
In this video, the instructor completes key functionality for the Queue Management System by implementing updateStatus and removeFromQueue using core JavaScript and React state management. He demonstrates how to modify queue entries by looping through the queue array with map to match a customer’s id and update their status, spreading existing properties to maintain immutability. For deletions, he uses filter to return a new array that excludes the matched ID, showcasing efficient state updates through setQueue. These operations reinforce how React relies on pure functions and immutable updates to manage UI changes. With addToQueue, updateStatus, and removeFromQueue all functional, the application logic is now fully capable of handling real-time queue interactions. The instructor emphasizes that these techniques are fundamental JavaScript 101, not React-specific, making them essential for scalable component behavior. In the next video, the focus shifts to building the Display component and passing queue data for rendering.

03:52
Understand Conditional rendering in react
In this video, the instructor begins building the QDisplay component for the React Queue Management System, demonstrating how to structure components, pass props, and implement conditional rendering. He creates a new JSX component, explains the use of snippet tools like RFCE, and integrates QDisplay into App.jsx. The lesson focuses on passing essential data and function references—such as queue, onUpdateStatus, and onRemove—from the parent component to handle actions like updating and removing queue entries. The instructor also introduces a helper function, getStatusColor, which uses a switch case to return dynamic UI colors based on status values. Inside the return statement, he demonstrates how to check whether the queue has items using JavaScript expressions like queue.length === 0 and render different UI outputs accordingly. This covers the foundational concept of conditional rendering in React, which is essential for building dynamic interfaces such as login systems, dashboards, and data-driven components.

09:49
Debugging in multi components
In this final video, the instructor completes the QDisplay component of the React Queue Management System, demonstrating how to loop through the queue array, render dynamic UI, and implement full conditional rendering using both ternary checks and the logical AND operator. He adds structure, styling classes, and displays customer details such as name, service, and status, using the getStatusColor function for dynamic styling. The video covers generating action buttons—Serve, Complete, and Remove—and wiring them to onUpdateStatus and onRemove via props. A real-world debugging session highlights a common mistake: forgetting the return statement inside map, which caused undefined values. By adding proper returns or parentheses for implicit returns, the issue is resolved and state updates work correctly. The project now supports serving customers, completing tasks, and removing entries. This video provides practical insights into React state management, component communication, event handling, and real-world debugging—essential skills for building production-ready React applications.

5. Advance props and components

Different types of props and Context
Setting up vite app for props in react
Design button variations with props
Children props in react
Complex prop with complex data in react
useRef and forwardRef in react
Context API and prop drilling
Create your first context api provider
Create your first custom hook
Using context in multiple components

Different types of props and Context
In this introductory video of the new React section, the instructor sets the stage for mastering React props, state management, and context API through a foundational yet powerful project. He highlights how discomfort during learning is normal and encourages active practice, rewatches, and focused coding. The section will cover essential concepts such as building reusable React components, handling basic props, working with refs, implementing children props, and managing complex nested props. A major part of the module focuses on global state management using React Context, preparing learners for advanced tools like Zustand and Redux Toolkit. The project demonstrates component communication, theme toggling, and dynamic UI updates, all styled with Tailwind CSS. Although the UI is simple, the section is packed with practical insights that build strong fundamentals for both React and Next.js development. This is a comprehensive, hands-on learning path ideal for aspiring frontend developers.

06:18
Setting up vite app for props in react
In this video, the instructor walks through setting up a complete React project using Vite and Bun, focusing on creating and organizing custom components. He cleans the default boilerplate, integrates Tailwind CSS, and structures the project with a dedicated components folder containing files for basic props, children props, complex props, ref props, and a theme toggler. The instructor then builds a reusable navigation bar using React components, Tailwind classes, icons, and map() for dynamic rendering. He also explains how multiple functions can exist inside a single component file, with only one being the default export. A separate AppContent component is created to display structured sections that load each custom component. Throughout the setup, the focus is on understanding component architecture, clean UI structure, state preparation, and reusable layouts—laying the foundation for learning React props, state management, and custom hooks in upcoming videos.

27:38
Design button variations with props
n this video, the instructor demonstrates how to build a fully customizable React button component using basic props, destructuring, and Tailwind CSS. He explains how to accept essential props such as text, color, size, onClick, and disabled, then dynamically generate styles using template literals and conditional classes. Viewers learn how to create reusable UI elements by handling multiple variations like primary, secondary, danger, and success buttons, along with small and large size options. The instructor also showcases how to integrate React state using useState to track click counts and how props control component behavior. Additional techniques include passing functions as props, applying conditional logic for button states, and using default values to prevent errors. By the end, learners understand how to design scalable, reusable components—similar to Bootstrap-style buttons—making this a practical lesson in React props, component design, and UI customization.

15:26
Children props in react
In this video, the instructor explains the concept of the children prop in React, highlighting that children is a special reserved prop used to pass any kind of JSX or UI element into a component. He demonstrates how reusable components like Card and Container can accept children, along with additional props such as title, color, or layout, using default values and conditional rendering. The lesson covers building dynamic UI structures, using Tailwind CSS for styling, and injecting content like paragraphs, headings, and even buttons inside reusable components. By showcasing practical examples—including nested components, layout variations, and customizable card designs—the video helps learners understand how children allows flexible content composition in React. This is especially useful in advanced setups like Next.js layouts, where persistent UI elements (e.g., navigation bars, scripts) remain consistent across pages. Overall, this tutorial strengthens core React skills in component composition, reusability, and UI structuring.

18:22
Complex prop with complex data in react
In this video, the instructor explains how to work with complex props in React, focusing on handling large and deeply nested JavaScript objects. He demonstrates how to pass structured data—such as user, theme, and actions—into a reusable UserProfileCard component using the spread operator. The lesson emphasizes looping through complex datasets using map(), Object.entries(), and dynamic key–value extraction. The instructor highlights the importance of mastering core JavaScript skills like object manipulation, conditional rendering, dot notation, optional chaining, and handling inconsistent API data structures. He also showcases how to bind dynamic UI elements such as background color, text color, avatar, roles, and stats using template literals and Tailwind CSS classes. The video reinforces that managing complex props is essential for real-world development where APIs often deliver large JSON responses. By mastering loops, objects, and props structure, developers can confidently build scalable and dynamic React interfaces.

14:52
useRef and forwardRef in react
In this video, the instructor explains how to use React ref props by combining useRef and forwardRef to control and interact with DOM elements across components. He highlights why ref props still matter in real-world projects, especially older codebases. The tutorial demonstrates creating a reusable Custom Input component that accepts a ref, and shows how to pass this reference from a parent component to manage actions like focusing inputs, getting input values, and clearing fields without triggering re-renders. He also covers how refs differ from state, why they don’t cause component updates, and real use cases such as managing focus, text selection, media playback, and controlling UI behavior between components. The session includes step-by-step coding, Tailwind-based UI setup, debugging techniques, and best practices like assigning display names for easier devtools inspection. This video strengthens core React skills around refs, component communication, and DOM manipulation.

23:03
Context API and prop drilling
In this video, the instructor introduces the React Context API, explaining why it is essential for avoiding prop drilling and managing global state efficiently. Using clear diagrams and real-world examples, he demonstrates how deeply nested components struggle when sharing data through props, especially in complex applications with multiple UI layers like navigation bars, cards, and chat components. The Context API provides a single source of truth, allowing any component to read or update shared state using createContext, Provider, and useContext—without manually passing props down the tree. The instructor compares Context to popular state-management libraries like Redux, Redux Toolkit, and Zustand, emphasizing that Context is the simplest foundational form of global state management. By walking through how shared values update and re-render components automatically, he prepares viewers for building scalable React applications. This session lays the groundwork for implementing Context step-by-step in upcoming videos.

10:11
Create your first context api provider
In this video, the instructor explains the step-by-step process of implementing the React Context API by creating a Theme Context and a reusable Theme Provider component. He highlights that Context follows a specific workflow—first using createContext() to generate a global container, then building a Provider component that wraps child components using the children prop. Inside the provider, he sets up useState to manage the theme value and builds a toggleTheme() function to switch between light and dark modes. He also demonstrates how to expose multiple properties—such as state, functions, and computed values—through the provider’s value prop. Next, he shows how to wrap the entire application (or selected components) with the ThemeProvider in App.jsx, enabling global access to shared data. This video emphasizes the importance of understanding Context structure before moving on to creating custom hooks for seamless consumption of context values in upcoming lessons.

13:13
Create your first custom hook
In this video, the instructor explains how to build and use a custom React hook to simplify accessing data from the Context API. He breaks down the idea that a hook is simply a function that returns values—just like useState or useContext. After creating the ThemeContext and ThemeProvider, he introduces a custom hook named useTheme, which internally uses useContext to provide quick access to shared values like theme, toggleTheme, and isDark. He also shows how to add error handling to ensure the hook is only used inside the ThemeProvider. Then, he demonstrates how to consume this hook inside separate components such as a ThemeToggleButton and a ThemedCard, dynamically rendering UI based on theme values and triggering updates with toggleTheme(). Finally, he integrates the custom hook into App.jsx to control global styling. This lesson makes working with React Context, custom hooks, and state sharing intuitive and scalable.

11:38
Using context in multiple components
In this video, the instructor provides a complete demo of working with the React Context API, including creating a Context, building a Provider, and consuming values through a custom hook. He revisits the core steps: first creating the theme context, then wrapping the app with a ThemeProvider, and finally accessing shared values like isDark, theme, and toggleTheme using the custom useTheme hook. The demo highlights how multiple components—such as ThemeToggleButton, ThemedCard, and other UI elements—can all read and update global state without prop drilling. By updating the theme, all components instantly re-render based on the shared context, demonstrating real-time state management. The instructor also explains how wrapping specific parts of the component tree controls which components can access the context. This lesson reinforces how the Context API simplifies global state handling in React applications, making UI behavior consistent and scalable across the entire project.

6. Custom hooks
Setting up application for custom hooks
Designing components for shopping cart
useEffect hook for interviews
Sync across the tabs
Handling cart operations
Finish up with custom hook features
Debugging the application - Thought process

Setting up application for custom hooks
In this video, the instructor introduces a new section focused on building custom hooks in React, along with using localStorage for persistent state management. The lesson explains how custom hooks simplify logic reuse in large-scale applications and revisits essential concepts like useEffect, component structure, and JavaScript-based data handling. The demo application is a simple React cart system where product data is fetched from a products.js file and cart items persist even after refresh using localStorage. The instructor walks through setting up the project using Bun and Vite, organizing folders like components, data, and hooks, and creating files such as Cart.jsx, CartItem.jsx, ProductCard.jsx, and useCart.js. The video emphasizes React’s integration with JavaScript, demonstrating that browser APIs like localStorage work the same within React. This section lays the foundation for building reusable, scalable features using custom hooks and efficient state management practices.

09:24
Designing components for shopping cart
In this video, the instructor walks through building all major components of a React shopping cart application, including the ProductCard, Cart, and CartItem components. He explains how each component receives data through props, handles UI rendering, and triggers functionality through callback methods like onAddToCart, onUpdateQuantity, and onRemove. The ProductCard displays product details and uses a button click event to send product data upward. The Cart component loops through cart items, handles empty cart states, displays totals using map(), and formats values with toFixed(). The CartItem component manages controls for increment, decrement, and delete actions using icons from React Icons (Font Awesome). The instructor emphasizes how components remain “dumb” and rely on external logic, which will be handled later through custom React hooks. This video prepares viewers for the next section, where the core cart functionality and quantity management will be implemented using a reusable useCart custom hook.

21:42
useEffect hook for interviews
In this video, the instructor explains one of the most important concepts in React—how the useEffect and useState hooks work, especially in complex real-world scenarios. He highlights that useEffect acts as a replacement for the old React Class Lifecycle methods, handling tasks like mounting, updating, and cleanup. The hook includes two main parts: a callback function (setup) and a dependency array, which controls when the effect should re-run. He also emphasizes the crucial role of the cleanup function, handled through a return statement, widely asked in interviews. The instructor demonstrates the syntax, explains when effects trigger, and shows how multiple useEffect hooks can be used in one component or custom hook such as a useCart hook. Real-world examples, including a Cloudflare outage caused by incorrect dependency handling, reinforce the importance of mastering these hooks. This foundational knowledge prepares developers for building scalable, optimized React applications.

12:56
Sync across the tabs
In this video, the instructor demonstrates how to build a production-ready custom React hook called useCart using useState, useEffect, and localStorage. The lesson focuses on writing real-world, maintainable code instead of simple demo logic. He explains how to initialize state using a lazy state initializer, safely retrieve saved cart data with JSON.parse, and handle errors using try–catch. The hook automatically loads existing cart values from localStorage and persists updates whenever the cart state changes through a dependency-based useEffect. The instructor also covers advanced features like cross-tab synchronization, showing how to listen for the browser’s storage event using window.addEventListener, update the cart across multiple tabs, and implement cleanup logic via the useEffect return function. This video provides a complete, practical guide to building scalable, reusable React custom hooks with persistent storage and real-world event handling.

16:38
Handling cart operations
In this video, the instructor continues building the useCart custom React hook by implementing essential cart operations such as addToCart, removeFromCart, and updateQuantity. Using useState, useEffect, and pure JavaScript array methods like find, map, and filter, he demonstrates how to manage cart items efficiently. The addToCart function checks if a product already exists in the cart; if yes, it increments its quantity, otherwise it adds a new item with a default quantity of 1. The removeFromCart method filters out the selected product using its productId, while updateQuantity allows dynamic quantity adjustments with validation to prevent values below 1. These updates automatically trigger the useEffect that syncs the cart with localStorage. The instructor also hints at calculating the cart total and introduces an upcoming hook to be covered in the next video. This lesson strengthens real-world React state management skills for building scalable shopping cart logic.

10:00
Finish up with custom hook features
In this video, the instructor adds the final piece to the useCart custom React hook by calculating the total cart value using useMemo, reduce, and modern React optimization techniques. He explains that while useMemo helps memoize expensive calculations—preventing recalculations on every render—React 19 now auto-memoizes many values, making the hook optional but still important for legacy codebases using React 16, React 17, or React 18. The total is calculated using the classic Array.reduce method, multiplying each item's price and quantity, and formatting the result with toFixed(2). The instructor then returns all essential methods from the custom hook, including cart, addToCart, removeFromCart, updateQuantity, and total, making them easily accessible throughout the application. This lesson strengthens understanding of useMemo, useEffect, useState, and production-grade React custom hooks, preparing developers to implement the hook within components in the upcoming video.

05:18
Debugging the application - Thought process
In this final video of the section, the instructor demonstrates how to integrate the useCart custom React hook into the main App.jsx file and build a functional shopping cart interface. He shows how to extract values such as cart, addToCart, removeFromCart, updateQuantity, and total directly from the hook and use them inside the component. The lesson covers rendering product lists using map, importing data from products.js, and passing props into the ProductCard component. During setup, the instructor also encounters and fixes realistic bugs related to incorrect imports, missing props, and typos like itemID vs item.id, teaching real-world debugging practices. The localStorage behavior is tested to confirm persistent cart data. Finally, the Cart component is added, wired with proper handlers, and verified for correct functionality. Though the CSS layout needs refinement, the core logic works perfectly. This video wraps up building and using production-ready React custom hooks with practical debugging insights.

7. State management - Zustand

State Management libraries
Create your first store in Zustand
Subscribe only to what you need
One store with multiple slices
Async actions for API calls

State Management libraries
In this video, the instructor introduces state management in React and explains why libraries like Zustand have become popular for solving prop drilling and managing shared application state. He compares traditional solutions such as Context API, Redux, and Redux Toolkit, highlighting how Zustand offers a far simpler, lightweight, and more intuitive workflow. The video walks through setting up a new Vite + React project using Bun, installing Zustand with a single command, and reviewing its minimal documentation. The instructor emphasizes that Zustand is a tiny but powerful state management library that uses hooks, requires no context provider, and avoids complex patterns like reducers. He also explains Zustand’s backward compatibility and relevance in modern production apps. The upcoming lesson will cover creating your first Zustand store, following the simple two-step process: create a store and use the store. This introduction sets the foundation for mastering efficient, scalable React state handling.

05:49
Create your first store in Zustand
In this video, the instructor demonstrates how to build your first Zustand store and use it inside React components, showcasing the simplicity of this modern state management solution. He walks through creating a store folder, defining a counter store using the create function from Zustand, and exposing a custom hook like useCounterStore. The store includes a count state, along with actions such as increase, decrease, and reset, all powered by Zustand’s built-in set function. The instructor explains the intuitive syntax for updating state and highlights how Zustand eliminates the need for providers, reducers, or complex boilerplate. After creating the store, a Counter component is built to consume the store by importing the hook and accessing its state and methods. With simple onClick handlers, the UI updates seamlessly. This tutorial showcases why Zustand is loved for its lightweight, scalable, and easy-to-use state management in modern React applications.

11:52
Subscribe only to what you need
In this video, the instructor explains how to optimize Zustand usage by avoiding unnecessary re-renders through selective state extraction. After creating a basic counter store, he demonstrates that using the entire store inside a component can trigger full component re-renders whenever any state value changes. To make this more efficient, he shows how to build smart components like CounterValue and CounterButton, where each component extracts only the specific state or actions it needs using a selector callback such as useCounterStore(state ⇒ state.count). This ensures that the component re-renders only when its selected value updates, improving performance. The instructor highlights how this pattern scales when applications grow with multiple store values like theme, user data, or UI states. By leveraging state selectors, Zustand hooks, and clean component separation, React apps become faster, more organized, and more maintainable.

04:44
One store with multiple slices
In this video, the instructor explains how to organize state efficiently in Zustand using multiple slices within a single store, enabling better separation of concerns and scalable application structure. Instead of creating many individual stores, you can group related logic into slices such as an Auth Slice (handling user, login, and logout) and a UI Slice (managing theme and toggleTheme functionality). The tutorial demonstrates how to build an App Store using the create function, define multiple slices, and update state using set and state selectors. It also covers how to use these slices inside components like Navbar, where selective extraction of values such as user, theme, logout, and toggleTheme prevents unnecessary re-renders. This modular approach keeps your React + Zustand state management clean, scalable, and production-ready, making it easier to handle authentication, UI state, and other logic in modern JavaScript applications.

08:26
Async actions for API calls
In this video, the instructor demonstrates how to handle async API calls using Zustand, showcasing how flexible and lightweight this state management library is compared to others. Unlike complex libraries that enforce strict async workflows, Zustand allows actions to be sync or async without extra configuration. The instructor builds a dedicated Post Store using the create function, defining state values like posts, loading, and error, along with an async fetchPosts method that retrieves data from a public API using fetch, await, and try–catch for error handling. The fetched data is then stored using the set function. A Posts component is created to demonstrate how useEffect, along with Zustand’s selector pattern, triggers the API call on mount and conditionally renders loading, error, or a list of posts. This tutorial highlights how Zustand simplifies API integration, making it ideal for modern React applications needing clean, scalable, and minimal boilerplate state handling.

8. Git & github
Introduction to GIT series
Git init and hidden folder
Git commits and logs
Git internal working and configs
Git merge and git conflicts
Git Diff and stashing
Git rebase is not that scary
Insight of pushing code to github
How to make Pull Request and Open Source contribution

9. Javascript - Refresher

Javascript story - from console to v8 engine
How javascript executes the code - Behind the scene
Datatypes, variables and constants in Javascript
Operations in javascript
Primitives in javascript
Non Primitives in javascript
Five challenges on conditions in javascript
Facing ten challenges in Array and methods
Introduction to loops in javascript
Defeat 6 loop challenges in Javascript
Ten loop challenges to learn all kind of loops in javascript
Function, arrow function, THIS and context in javascript
Higher order function and nested functions in javascript
A masterclass on prototypes in javascript
Functional constructor and Errors
Classes Objects and inheritance in javascript
Encapsulation, Polymorphism, Abstraction and getters setters
DOM and BOM basics in javascript
Solving 5 challenges of DOM
DOM finale with 5 more challenges
Asynchronous Javascript with event loop
Closures in javascript
Promises and promise chaining
Prototypal Inheritance in javascript
THIS and binding context
Aync-await and Promise all
Iterator and generators in javascript
ES6 Modules and CommonJS
Demo of project 1 - Todo with local Storage
Add a task in array
Handling local storage and DOM event
Event bubbling and CRUD operations
Demo of API handling project
Handle any type of API in your code
Demo of Project 3 Ecommerce app
Building Ecommerce cart page
Project 3 assignment
Demo of project 4 Expense Tracker
Expense tracker with local storage and event deligation
Demo of project 5 - quiz application
Building a complete quiz app

10. Next js : getting started and fundamentals

Introduction to Next.js & Why Use Frameworks ?
What is Router in Next.js , App Router vs Page Router ( Which one to choose?)
Installation & Writing Your First Hello world in Next.js
Next.js vs Just React
Next.js Folder Structure Breakdown

Introduction to Next.js & Why Use Frameworks ?
In this introductory video, the instructor explains why mastering Next.js is essential for becoming a modern Full Stack Developer. He highlights that Next.js, a production-ready React framework built by Vercel, provides powerful features that plain React lacks. While React requires manual setup for routing, SEO optimization, code-splitting, server-side rendering (SSR), and API routes, Next.js offers all of these out of the box. The instructor also references the official React documentation, which recommends using frameworks like Next.js to build scalable, real-world applications. He outlines key Next.js advantages such as server-side rendering, file-based routing, built-in performance optimizations, and easy API endpoint creation, making it ideal for complex applications like e-commerce platforms. By eliminating the need for manual configuration of tools like React Router, Webpack, and custom backends, Next.js simplifies development and boosts productivity. This video sets the foundation for understanding why Next.js is the preferred framework for modern, high-performance web applications.

07:25
What is Router in Next.js , App Router vs Page Router ( Which one to choose?)
In this chapter, the instructor explains routing in Next.js, focusing on the two main routing systems: the Pages Router and the App Router. He defines a router as the mechanism that controls how users navigate between pages and highlights that Next.js uses file-based routing, where the folder structure automatically determines routes. The older Pages Router (used in Next.js 12 and earlier) relies on a /pages directory and is still supported, but not recommended for modern development. In contrast, the App Router, introduced in Next.js 13+, is the latest and most powerful approach, built on the /app directory. It supports advanced features like React Server Components, Server Actions, Streaming, and improved scalability, making it ideal for modern, large-scale applications. The instructor advises choosing the App Router for new projects requiring performance and modern features, while the Pages Router should only be used for maintaining older applications.

09:44
Installation & Writing Your First Hello world in Next.js
In this chapter, the instructor walks through the complete process of installing a Next.js application using the latest App Router setup. He begins by directing users to the official Next.js documentation and emphasizes ensuring system prerequisites such as Node.js, npm, npx, and a code editor like VS Code. After verifying Node version 18+ using node --version, he demonstrates how to generate a new project using the command npx create-next-app@latest, followed by essential configuration options like TypeScript, ESLint, Tailwind CSS, and enabling the App Router. Once installation is complete, the instructor runs the development server using npm run dev and explores the default folder structure. He then edits the app/page.tsx file to create a simple Hello World page styled with Tailwind CSS, showcasing features like hot reloading. By the end, learners successfully build and render their first Next.js page, marking the official start of hands-on development.

07:34
Next.js vs Just React
In this chapter, the instructor provides a clear comparison between React and Next.js, explaining how each tool serves different purposes in modern web development. React is described as a UI library focused on building components and managing state, requiring additional setups like React Router for routing and a separate backend for APIs. In contrast, Next.js is a complete framework built on top of React, offering powerful features for creating full-fledged applications. It includes built-in file-based routing, supports multiple rendering methods such as Client-Side Rendering (CSR), Server-Side Rendering (SSR), and Static Site Generation (SSG), and provides API Routes without needing a separate backend. Next.js also offers optimized performance, including image optimization and caching, and is production-ready out of the box, unlike plain React which needs extra configuration. The instructor concludes with a simple analogy: React is like loose Lego blocks, while Next.js is a complete Lego kit with instructions, making development faster and more efficient.

05:12
Next.js Folder Structure Breakdown
In this chapter, the instructor breaks down the complete folder structure of a Next.js application, explaining the purpose of each folder and file. The .next folder stores the build output and caching used for hot reloading. The most important section is the app folder, which contains the core application, including essential files like page.tsx and the crucial layout.tsx, which works like a global wrapper similar to React’s main component. The node_modules folder holds all project dependencies and devDependencies, while the public folder stores assets such as images, icons, and SVG files. Additional configuration files include .gitignore, eslint.config, next.config.ts, postcss.config, tsconfig.json, and globals.css, which is used for styling and loading Tailwind CSS. The chapter concludes by emphasizing that all development—components, routes, and UI elements—should be created inside the app folder, giving developers a clear understanding of how Next.js organizes project structure.

11. Project structure & file system routing :

Folder and Files Conventions in Next.js
Types of Folders & Files in Next.js
Nested Routing and Dynamic Routing
Mini Project – Project Overview & Header Setup
Mini-Project- Building Footer
Mini Project – Building a Responsive Home Page
Mini-Project - Making Responsive About Page
Mini-Project- Making Responsive Contact Page

Folder and Files Conventions in Next.js
In this chapter, the instructor explains the essential folder and file conventions in Next.js, preparing you for one of its most important concepts—routing. Next.js uses a file-based routing system, where each folder inside the app directory becomes a route, and every route must contain a page.tsx file that defines its UI. He demonstrates how creating folders like about or contact with a page.tsx automatically generates routes such as /about and /contact. The chapter also highlights the role of the layout.tsx file, which provides a shared UI structure (e.g., Navbar, Footer) for multiple pages. Additionally, the instructor introduces special Next.js files such as loading.tsx, error.tsx, not-found.tsx, and route.ts, each serving functions like handling loading states, errors, 404 pages, and API routes. By understanding these conventions, developers can efficiently structure and scale their applications while leveraging the full power of the Next.js App Router.

14:16
Types of Folders & Files in Next.js
In this chapter, the instructor introduces the different types of folders and routes in Next.js, laying the foundation for deeper routing concepts. He explains that Next.js supports multiple routing patterns, starting with static routes like /about and /contact, which map directly to folder names. Next, he covers dynamic routes, where parameters such as [userId] allow pages to render unique data for each user. The lesson also highlights catch-all routes (e.g., [...slug]), which handle multiple nested dynamic segments. The instructor then introduces advanced routing structures, including Route Groups, which help organize files without affecting the URL, as well as Parallel Routes and Intercepting Routes used for complex UI and navigation patterns. Alongside these, he reminds learners about key special files in the Next.js app directory—page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx, and route.ts. These conventions collectively structure how routing, UI rendering, and API handling work in Next.js App Router, ensuring scalable project organization.

04:24
Nested Routing and Dynamic Routing
In this chapter, the instructor explains nested routing and dynamic routing in Next.js, showing how routes are created using the file-based structure inside the app directory. He demonstrates that static routes like /courses or /about require creating a folder with a page.tsx file inside it. To build nested routes, such as /courses/subjects, you simply create another folder inside the parent route and add a page file. The lecture then moves to dynamic routing, which enables rendering unique content for each item—for example, /products/[id]. By creating a folder with [id] in square brackets and adding a page.tsx file, Next.js dynamically matches any ID passed in the URL. The instructor also shows how to access dynamic values through params and fetch data based on IDs. Both nested and dynamic routes make Next.js ideal for organizing large applications with structured, scalable routing.

07:53
Mini Project – Project Overview & Header Setup
In this mini-project chapter, the instructor guides you through building a multi-page website in Next.js using Tailwind CSS, focusing on revising core concepts like routing, dynamic routing, file colocation, the Link component, and shared layouts. The project includes creating a global header and footer, setting up a clean layout.js, and organizing components inside a dedicated components folder. The instructor demonstrates how file-based routing works by creating static routes such as /home, /about, and /contact, and explains why only page.js files are eligible to render routes. You also learn how to use the optimized Next.js Link component for smooth navigation and how to structure reusable UI through a shared layout. Additional styling techniques with Tailwind CSS are covered to build a responsive navbar with mobile and desktop views. This mini project helps solidify your understanding of Next.js App Router, reusable components, and practical UI building.

19:55
Mini-Project- Building Footer
In this continuation of the mini-project, the instructor focuses on refining the responsive navigation menu and building a polished footer using Next.js and Tailwind CSS. He begins by improving the mobile navigation layout by applying flex-column behavior and adjusting the border color for a more professional look. Next, the instructor updates the layout.js file to wrap page content inside a main tag, ensuring proper structure and spacing. The lesson then moves to creating a clean, modern footer component, styled with Tailwind CSS utilities like bg-gray, border-t, max-w-6xl, mx-auto, and px/p.y spacing classes. The footer displays copyright text, a customizable website name, and a “Built with Next.js and Tailwind CSS” label. By the end, the project has a fully functional header, navigation bar, and footer, enhancing both aesthetics and usability while reinforcing key concepts of component structure, responsive design, and Next.js layout patterns.

03:22
Mini Project – Building a Responsive Home Page
In this chapter, the instructor builds a complete Next.js homepage using Tailwind CSS, focusing on clean layout, responsive design, and reusable components. He starts by applying flex-grow for proper page structure, then designs a centered hero section with a bold headline, descriptive paragraph, and two styled buttons using utilities like bg-blue-600, rounded-lg, hover:bg-blue-700, and transition-colors. The lesson continues with a features section built using a CSS grid (grid-cols-3, gap-8) and styled cards featuring icons, shadows, and borders. The instructor also demonstrates how to integrate icons from Lucide React, replacing SVGs with components like Heart, Smartphone, and applying contextual colors such as text-green-500 and bg-purple-100. Each feature block includes a title and paragraph styled with text-gray-900, font-semibold, and italic text-gray-600. By the end, the homepage is fully responsive, visually polished, and built using best practices in Next.js, React components, and Tailwind CSS utility classes, laying a strong foundation for the upcoming About section.

11:42
Mini-Project - Making Responsive About Page
In this chapter, the instructor builds a clean and responsive About Page using Next.js and Tailwind CSS, extending the mini-project after completing the header, footer, and homepage. The lesson begins by structuring the page with a max-w-4xl, mx-auto, and generous py-12 spacing for a professional layout. The top section includes a centered About Us title styled with text-4xl, font-bold, and text-gray-900, followed by a supporting paragraph in text-gray-600. Next, the instructor creates a detailed “Our Story” card using shadow-sm, rounded-lg, border-gray-200, and p-8, containing headings, descriptive paragraphs, and highlighted text segments. To improve layout variety, a small grid layout is added, showcasing additional boxes with borders and spacing for visual enhancement. Throughout the chapter, Tailwind utilities like text-center, mb-12, rounded-lg, and border are used to maintain consistency. By the end, the About Page is fully styled, responsive, and aligns perfectly with the project's design system, preparing the foundation for the upcoming Contact page.

05:09
Mini-Project- Making Responsive Contact Page
In this final chapter of the mini-project, the instructor builds a fully functional Contact Us Page using Next.js and Tailwind CSS, completing the multi-page website. The lesson begins by fixing a layout issue and then creating a new contact route with a clean structure using page.js. The page features a centered heading styled with text-4xl, font-bold, and text-gray-900, followed by a descriptive paragraph. The instructor then constructs a responsive grid layout with two sections: a detailed contact form and an assignment for students to create a contact information card. The form includes fields for name, email, subject, and message, each built with responsive input styling, focus:ring, border-gray-300, rounded-lg, and placeholder text. A polished submit button uses bg-blue-600, hover:bg-blue-700, and transition-colors. The chapter also reinforces key concepts like file colocation, shared layouts, and dynamic routing in the Next.js App Router, wrapping up the complete multi-page website project.

12. Advance routing:

Nested Dynamic Routing
Catch All Segment and Optional Catch All Segment
Routes Group and Private Folder
Intercepting Routes - Same and One Level up of Intercepting Routes
Intercepting Routes - Two and Root Level up of Intercepting Routes
Introduction of Parallel Routes and Slots in Next.js
Unmatched Routes and Default Page Convention
Making Your Custom Not-Found Page

Nested Dynamic Routing
In this chapter on Advanced Routing with Next.js, the instructor explains how to work with nested dynamic routes to build more powerful and scalable URL structures. The lesson begins by revisiting basic dynamic routes, demonstrating how they allow pages like /products/[id] to render data dynamically using params. The instructor then expands the concept by introducing nested dynamic routes, enabling deeper routing patterns such as /products/[id]/reviews/[reviewId]. This structure allows developers to display product details and individual review details on separate pages while still keeping the routing clean and intuitive. Using Next.js App Router, the tutorial covers creating folder-based routes, destructuring params, rendering dynamic values, and understanding how URL mapping works internally. Key concepts like route hierarchy, dynamic segments, and handling string-based params are clearly explained. By the end, learners gain a strong understanding of building scalable nested routing systems essential for advanced full-stack applications.

09:08
Catch All Segment and Optional Catch All Segment
In this chapter, the instructor explains the powerful concept of Catch-All Routes and Optional Catch-All Routes in Next.js, an advanced extension of dynamic and nested dynamic routing. He begins by illustrating a documentation-style website where multiple features contain multiple concepts, which would traditionally require deeply nested routes. Instead of creating long folder structures, catch-all segments—defined using [...slug]—allow developers to capture multiple URL segments inside a single parameter. This enables flexible routing such as /docs/nextjs/routing/dynamic/example/demo without manually defining each level. The instructor also demonstrates how params.slug returns an array, how developers can manipulate it (e.g., with join()), and how frameworks like Next.js Docs use this system efficiently. He then introduces optional catch-all routes, defined with [[...slug]], which allow routes like /docs to load even when no slug is provided. Finally, he highlights best practices, such as not mixing both catch-all types at the same root level.

11:11
Routes Group and Private Folder
In this chapter, the instructor explains the concept of Route Groups and Private Folders in Next.js, essential features for creating a clean and scalable folder structure. He demonstrates how large projects with routes like login, signup, dashboard, marketing, and overview can become messy inside the main app directory. To organize these without affecting the URL structure, developers can use Route Groups, created using (parentheses). This keeps routes grouped logically while ensuring URLs like /login or /signup remain clean. Additionally, the chapter covers Private Folders, defined using underscores (_folder). These folders are ignored by the Next.js routing system, making them perfect for storing internal components, utilities, and configuration files without exposing them as routes. This improves code organization, prevents accidental routing, and allows teams to share layouts across multiple routes efficiently. Overall, the lecture highlights how these features enhance project maintainability and developer experience in Next.js applications.

12:07
Intercepting Routes - Same and One Level up of Intercepting Routes
In this chapter, the instructor explains Intercepting Routes and Parallel Routes in Next.js, two advanced routing techniques that enhance user experience. He describes Intercepting Routes as a way to display a page—such as a modal, drawer, or lightbox—inside the current layout without fully navigating away. The URL updates to a standalone route (e.g., /gallery/6), but users stay in context, making interactions smoother. If the page is refreshed or the link is shared, Next.js loads the full standalone page. The instructor demonstrates use cases like login modals, photo galleries, and quick previews, emphasizing benefits such as better UX, shareable URLs, and consistent behavior. He then shows how to implement intercepting routes using special folder naming conventions like (.), (..), and (..)(..) for same-level or multi-level routing. By the end, learners understand how intercepting routes help create modern, seamless UI patterns in large-scale Next.js applications.

15:31
Intercepting Routes - Two and Root Level up of Intercepting Routes
In this chapter, the instructor expands on Intercepting Routes in Next.js, covering two-level up and root-level interception for advanced navigation control. He demonstrates how to create nested pages like /dashboard/section and intercept higher-level routes such as /settings or /admin using special folder prefixes like (..), (..)(..), and (...). These patterns allow developers to load a modal or preview component without leaving the current page, while still updating the URL correctly. The instructor shows how clicking a link (e.g., “Go to Settings” or “Go to Admin”) first opens an intercepted modal, but refreshing or sharing the link loads the full standalone page. This technique enhances user experience by preserving context, enabling smoother navigation, and supporting shareable URLs. The concept is especially useful for large-scale applications, offering capabilities like contextual overlays, quick previews, and layered UI interactions while maintaining clean routing behavior in Next.js.

07:25
Introduction of Parallel Routes and Slots in Next.js
In this lesson, the instructor introduces Parallel Routes in Next.js, explaining how they allow developers to render multiple pages or layouts simultaneously within a single UI. Using slots (folders prefixed with @), each section—such as feed, stats, tab1, or tab2—can maintain its own navigation state, independent rendering, error boundaries, and conditional visibility. This structure is ideal for complex interfaces like LeetCode-style split layouts, dashboards with multiple panels, or tab-based navigation. The trainer demonstrates how to create a dashboard layout that displays multiple routes side by side, where each parallel route behaves like a child component but remains route-driven. By using @feed and @stats directories, along with dynamic slot rendering in the layout, the UI can show two different routed components simultaneously without interfering with each other. Parallel routes significantly enhance scalability, maintainability, and user experience in large Next.js applications, especially when handling multi-view dashboards or interactive, state-heavy interfaces.

14:46
Unmatched Routes and Default Page Convention
In this lesson, the instructor explains Unmatched Routes in Next.js, an important extension of Parallel Routes. When using parallel route slots like @tab1 and @tab2, these slots are not regular routes but dynamic container areas. Because they expect content from a matching URL, refreshing or directly accessing a slot URL often leads to a 404 error—this happens when the route does not match any slot, making it an unmatched route. To prevent the application from breaking, Next.js provides a fallback mechanism using default.js inside each slot and at the root level. When a slot becomes unmatched, default.js renders a safe fallback UI instead of an error page. This ensures smooth navigation, consistent behavior, and a stable user experience even during reloads. The lesson concludes Chapter 12 by reinforcing concepts of Intercepting Routes, Parallel Routes, and unmatched fallback handling, helping developers build more reliable and scalable Next.js applications.

05:27
Making Your Custom Not-Found Page
In this chapter, the instructor explains how to create a fully customized 404 Not Found page in Next.js, replacing the default error page with a brand-specific design. By adding a not-found.js file at the project’s root, developers can define their own UI that appears whenever a user visits a route that doesn’t exist in the app’s folder structure. The lesson demonstrates building a visually appealing layout using Next.js Image Component, Tailwind CSS classes like flex, justify-center, items-center, and adding an SVG illustration from Undraw. The instructor also shows how to properly store assets in the public folder and reference them using a simple /filename.svg path. The custom 404 page includes a styled Link component that redirects users back to the homepage, improving navigation and user experience. This chapter helps developers create professional, responsive, and SEO-friendly Next.js custom 404 pages that enhance both branding and usability.

13. Rendering and components deep dive :

Server components
Client Components and Which one to choose ( Client vs Server)

Server components
In this chapter, the instructor provides an in-depth explanation of Server Components in Next.js, emphasizing that all layouts and pages are server components by default. These components run entirely on the server, generating static HTML with minimal JavaScript, resulting in faster performance, smaller bundle sizes, and secure data fetching. The lesson demonstrates how server components can directly perform async data fetching, call external APIs like the GitHub API, interact with the filesystem (FS module), and query databases—all without exposing API keys or network calls to the browser. However, server components have limitations: they cannot access browser APIs such as window or document, cannot use React hooks like useState or useEffect, and cannot handle interactivity (e.g., button clicks). For interactive features, developers must convert the component into a Client Component using "use client". This chapter clearly highlights when to use server components for performance, security, and backend operations in Next.js applications.

13:06
Client Components and Which one to choose ( Client vs Server)
In this chapter, the instructor explains Client Components in Next.js, highlighting how they run in the browser instead of the server. Client components are essential when you need interactivity, such as click events, form handling, animations, state management, and access to browser APIs like window and document. To convert any file into a client component, you simply add the "**use client**" directive at the top. The lesson demonstrates building a counter component using useState and useEffect, showing how client-side rendering enables dynamic UI updates. It also contrasts client components with server components, explaining that server components are best for secure data fetching, database queries, and fast performance, while client components are ideal for user interaction and UI events. The instructor also shows how API calls made from client components appear in browser dev tools, unlike server-side calls, which remain hidden. This chapter helps developers understand when to choose Client Components for building interactive and browser-dependent features in Next.js applications.

14. Backend routes handlers:

What is Route Handlers in Nextjs and GET endpoint in next.js
Creating POST endpoint in Next.js
Creating PUT endpoint in Next.js
Creating PATCH endpoint in Next.js
Creating DELETE endpoint in Next.js
Exploring Query Parameter
Headers in Next.js
Cookies in Next.js
Notes App – Project Setup & Database Connection
Notes App – MongoDB Model, Create API & Add Note Form
Notes App - Fetch & Display Notes with Cards, useState & Toasts
Notes App – Delete Endpoint & Removing Notes
Notes App – Edit Endpoint & Conditional Editing Form

What is Route Handlers in Nextjs and GET endpoint in next.js
In this section, the instructor introduces Backend Route Handlers in Next.js, explaining how the framework enables both frontend and backend development within a single project. The chapter covers the concept of API routes, how HTTP methods like GET, POST, PUT, PATCH, and DELETE enable CRUD operations, and why Next.js qualifies as a powerful full-stack framework. The instructor demonstrates creating backend endpoints using the reserved route.js convention, returning responses with NextResponse.json, and organizing APIs inside an api folder for clean structure. A practical example showcases building a GET API that returns fake user data with proper error handling using try/catch blocks. The lesson also explains fetching backend data inside a Server Component using fetch() with an absolute URL, since server components don’t have access to browser APIs like window. This chapter helps learners understand how to build efficient REST API endpoints and connect frontend and backend seamlessly in Next.js applications.

13:38
Creating POST endpoint in Next.js
In this chapter, the instructor demonstrates how to create a POST endpoint in Next.js using the App Router and route.js conventions. He explains how to handle incoming request JSON, extract fields like name, email, and age, and perform essential backend validations such as checking for missing values or verifying if a user already exists in the in-memory users array. Using NextResponse.json, the instructor shows how to return proper responses with status codes like 400 for bad requests and 201 for successful user creation. The chapter also covers generating a new user object, appending it to the array using push(), and structuring clean error handling with try/catch blocks. Finally, he tests the API using tools like Thunder Client and Postman, proving how Next.js allows building full full-stack applications without needing a separate backend. This lesson helps developers master creating scalable REST API POST endpoints inside Next.js applications.

09:51
Creating PUT endpoint in Next.js
In this chapter, the instructor explains the difference between PUT and PATCH methods in Next.js API Route Handlers, emphasizing that PUT is used to update an entire document, while PATCH updates only a specific part of the data. Before implementing these methods, he introduces Dynamic Route Handlers using folders like [id]/route.js, showing how to fetch a single record based on dynamic parameters via params.id. The lesson demonstrates parsing the ID with parseInt, locating user data using find() or findIndex(), and returning results through NextResponse.json. He then builds a full PUT endpoint, validating request fields, updating the entire user object, and handling errors with proper status codes. Using tools like Postman or Thunder Client, he tests updates such as changing a user’s name, email, and age, while also explaining why PUT requires all fields to avoid data loss. This chapter helps developers master RESTful updates, dynamic APIs, and backend logic within Next.js applications.

15:17
Creating PATCH endpoint in Next.js
In this chapter, the instructor explains how to create a PATCH endpoint in Next.js to update only a specific part of a user’s data, unlike PUT, which updates the entire document. Building on dynamic API routing using the [id]/route.js structure, the lesson shows how to extract params.id, parse it, find the user’s index with findIndex(), and then update only the fields provided in the request body. Instead of replacing the full object, the instructor demonstrates merging existing user data with new values using the spread operator, while keeping the ID unchanged. The response is returned using NextResponse.json, confirming the partial update. Testing via Postman or Thunder Client, he shows that only the updated field (e.g., name) changes, while untouched fields like email and age remain the same. This chapter clearly illustrates how to implement efficient PATCH APIs, dynamic route handling, and partial updates within Next.js full-stack applications.

02:46
Creating DELETE endpoint in Next.js
In this lesson, the instructor explains how to build a DELETE endpoint in Next.js using route handlers and dynamic routing. After covering PUT, PATCH, and GET operations earlier, this chapter focuses on removing a specific user based on the ID passed through URL parameters. The process includes destructuring params, converting the ID using parseInt, locating the user index with findIndex, and deleting the user using the splice() method. The response is returned via NextResponse.json, confirming successful deletion or returning appropriate errors like 404 when the user is not found. The instructor also demonstrates testing the endpoint through Postman or Thunder Client, showing real-time deletion from the users array. This lesson completes the full CRUD flow—GET, POST, PUT, PATCH, and DELETE—using Next.js Route Handlers, preparing you to build fully functional backend APIs. The next module introduces a mini-project to apply these concepts with UI integration.

04:52
Exploring Query Parameter
In this lesson, the instructor introduces query parameters, headers, and cookies in Next.js Route Handlers, preparing for the upcoming mini Note-Taking Application project. He explains that query parameters are key–value pairs appended to a URL using the ? symbol to pass extra information such as filters, search terms, or pagination data. Using request.nextUrl.searchParams, he demonstrates how to extract values with the get() method and apply them to filter user data dynamically. Examples include filtering users by age, searching by name, and handling multiple query params using the & symbol. The lesson shows how to implement server-side filtering using JavaScript array methods like filter(), includes(), and toLowerCase(), returning only the relevant results via NextResponse.json. This chapter highlights how query parameters offer a flexible way to control API responses without creating additional endpoints, enabling more customizable and efficient Next.js backend logic.

08:58
Headers in Next.js
In this chapter, the instructor explains HTTP headers in Next.js Route Handlers, defining them as metadata sent with every HTTP request and response. He breaks down the two main categories: Request Headers, which include details like User-Agent, Accept, and Authorization (commonly used for Bearer tokens), and Response Headers, which return information such as Content-Type, Cache-Control, and Set-Cookie. The lesson demonstrates how to read request headers using both the native Headers API and the built-in next/headers utility. Examples show extracting custom headers like Authorization from Postman. The instructor also covers how to set response headers, using either the Response() constructor or NextResponse.json(), allowing developers to send custom headers such as X-Custom-Header or modify Content-Type from text/plain to text/html. This chapter provides a clear, practical understanding of working with headers in Next.js, making API responses more secure, flexible, and customizable.

12:36
Cookies in Next.js
In this chapter, the instructor explains cookies in Next.js Route Handlers, describing them as small pieces of data stored in the browser and automatically sent with every request to the same server. He covers their main uses, including session management, personalization (theme, language preferences), and analytics/tracking. The lesson demonstrates how to set cookies using both the native Response constructor with Set-Cookie headers and the more powerful NextResponse API. It also shows how to read cookies using request.cookies.get() and the next/headers cookies() utility, returning cookies in a structured key–value format. Additionally, he explains how to update, check, and delete cookies using methods like set, get, has, and delete. By creating endpoints such as /cookies, he shows practical examples of storing values like theme, score, and resultsPerPage. This chapter builds a solid foundation for managing browser cookies in Next.js 15, enabling secure and customizable user experiences.

10:25
Notes App – Project Setup & Database Connection
In this video, the instructor begins a new Notes Taking App mini-project to implement all previously learned Next.js Route Handlers concepts. The chapter focuses on setting up a fresh Next.js project using Create Next App, configuring Tailwind CSS, and connecting the application to a MongoDB database. The instructor demonstrates how to generate a MongoDB URI via Atlas or Compass, store it securely in a .env file, and integrate it using Mongoose. He explains how to create a reusable DB connection function, implement proper async/await, use try–catch for error handling, and maintain a connection flag using readyState to avoid multiple database connections in an edge runtime environment. The video also clarifies the behavior of Edge Functions in Next.js and how they establish connections only when required. This forms the foundation for building features like creating, fetching, updating, and deleting notes in upcoming parts of the project.

23:06
Notes App – MongoDB Model, Create API & Add Note Form
In this chapter, the instructor demonstrates how to build a Notes App using Next.js, Mongoose, and MongoDB, focusing on creating a reusable Mongoose model, defining a Note schema with fields like title, content, createdAt, and updatedAt, and implementing a pre-save middleware to auto-update timestamps. He then sets up Next.js Route Handlers to build both POST and GET API endpoints for creating and fetching notes. After that, he builds a responsive client component using React UseState, designing a clean form with Tailwind CSS to accept user input and submit it through the fetch API with JSON payloads. The chapter also covers how Next.js App Router handles API requests in serverless functions, requiring a fresh DB connection on each call. Finally, the instructor tests the note creation flow, showing successful note insertion and preparing for rendering notes on the UI in the next part.

23:35
Notes App - Fetch & Display Notes with Cards, useState & Toasts
In this part of the Notes Making Application, the instructor focuses on building the GET API endpoint, fetching notes from MongoDB, and rendering them on the Next.js UI using server components and client components. He demonstrates how to query notes using Mongoose find(), apply sorting, and sanitize data with .lean() to avoid serialization errors when passing data to client components. A reusable getNotes function is created to fetch and format notes by converting _id into a string. The notes are then passed as initialNotes to a NotesClient component, where they are stored using useState and displayed dynamically using map(). The UI includes note cards with title, content, createdAt, updatedAt, and future edit/delete options. The lesson also adds real-time updates by appending new notes to state and integrating React Hot Toast for success/error notifications. This ensures smooth note creation and instant rendering without page reloads.

15:28
Notes App – Delete Endpoint & Removing Notes
In this part of the Note Taking App, the instructor implements the Delete Note feature using Next.js Route Handlers, Mongoose, and React. He begins by creating a dynamic API route /api/notes/[id]/route.js, allowing each note to be uniquely identified through its _id. Inside the DELETE handler, he connects to the database, retrieves the id from params, and removes the note using findByIdAndDelete. The API returns appropriate JSON responses for both success and failure cases. On the frontend, he adds a deleteNote function inside the NotesClient component that sends a DELETE fetch request to the backend. After deletion, the note list is updated in real time using useState and Array.filter(), ensuring smooth UI updates without page reloads. To improve user experience, the instructor integrates React Hot Toast to show success and error notifications. The final result is a fully functional and responsive delete feature for the Notes app.

07:20
Notes App – Edit Endpoint & Conditional Editing Form
In this section of the Note Taking App, the instructor demonstrates how to build a fully functional Edit/Update feature using Next.js Route Handlers, Mongoose, and React state management. The process begins by creating a PUT endpoint inside the dynamic route /api/notes/[id], where the note is updated using findByIdAndUpdate, along with flags like new: true and runValidators: true. On the frontend, multiple state variables such as editingId, editTitle, and editContent are introduced to manage the editing mode. Two helper functions—startEdit and cancelEdit—control UI transitions between viewing and editing. The updateNote function sends a PUT fetch request, validates input, updates state using map(), resets fields, and shows realtime notifications using React Hot Toast. Conditional rendering is applied to switch between view mode and edit mode seamlessly. After fixing a small validation bug, the app successfully updates notes, completing the CRUD functionality with smooth UX and fully working Next.js + MongoDB integration.


15. Core funtions and hooks in next js:

Caching & Revalidate Made Easy - Next.js Extended Fetch API
Handling 404s with the notFound() Function in Next.js
useParam Hook
usePathname Hook
useQueryParams Hook
useRouter Hook – push, replace, back & forward , prefetch
Redirect Function in Next.js

Caching & Revalidate Made Easy - Next.js Extended Fetch API
In this section, the instructor explains how Next.js enhances the standard Fetch API by providing an Extended Fetch API with powerful features like caching, force-cache, no-store, and revalidation. Using a practical Timer API example, he demonstrates how Next.js can fetch data, generate timestamps, and return responses with request IDs, readable UNIX time, and formatted outputs. The lesson showcases how force-cache returns permanently cached results, while no-cache/no-store always fetches fresh data. The revalidate option allows automatic data refreshing every few seconds, improving both performance and user experience. The instructor also illustrates how to create a dynamic API route using formats like UTC, ISO, and Local, along with rendering multiple fetch strategies on the UI using Promise.all. Overall, this tutorial offers a clear understanding of how Next.js Extended Fetch API optimizes data fetching, caching behavior, and server-side efficiency.

15:43
Handling 404s with the notFound() Function in Next.js
In this lesson, the instructor explains the Not Found functionality in Next.js, which allows developers to programmatically trigger a 404 page when a route or resource doesn’t exist. Unlike the default 404 behavior, the notFound() function from next/navigation lets you render custom error pages directly from within a route segment. Using a practical example of a dynamic reviews route, the instructor shows how to extract params, validate them using parseInt, and call notFound() when the review ID exceeds a certain limit. He also demonstrates how to create a route-specific notfound.js file, enabling unique 404 pages for individual dynamic routes. This helps developers provide more contextual and user-friendly error handling. The tutorial also highlights how Next.js routing, server components, and dynamic segments integrate seamlessly with error boundaries. Overall, this session offers a clear, SEO-friendly understanding of using notFound() to improve navigation and error management in modern Next.js applications.

04:35
useParam Hook
In this lesson, the instructor explains how to use the useParams hook in Next.js to extract dynamic route parameters inside client components. He demonstrates creating a nested dynamic route structure like /products/[id]/[slug], and then shows how useParams—imported from next/navigation—returns an object containing all dynamic segments as key–value pairs in string format. The component must be marked as a client component to use hooks. The instructor logs the params in the browser console to verify they are accessible on the client side and displays them using JSX. He emphasizes important points: useParams only works in client components, it flattens nested dynamic routes, and it always returns strings. For advanced cases like catch-all or optional catch-all routes, the returned value becomes an array. This tutorial provides a clear, SEO-friendly understanding of how to retrieve dynamic route data efficiently using Next.js useParams for smooth client-side routing and UI rendering.

04:37
usePathname Hook
In this video, the instructor explains the usePathname hook in Next.js, a client-side utility that returns the current pathname of the URL without query parameters or hash values. He demonstrates its usage by building a small navigation bar component marked with "use client", allowing the use of hooks. By extracting pathname from usePathname, the navigation highlights active links such as /about/dashboard or /about/settings based on real-time route tracking. The instructor also shows how to structure components using Layouts, Link components, and nested routes to manage navigation effectively. Key takeaways include: usePathname works only in client components, always returns a string, does not include query parameters, and is ideal for features like active navigation states, conditional rendering, and dynamic UI updates based on the current route. This tutorial offers a clear understanding of how to enhance navigation and user experience in modern Next.js applications using usePathname.

08:21
useQueryParams Hook
In this lecture, the instructor explains the useSearchParams hook in Next.js, a powerful client-side feature that allows developers to read and interact with query parameters directly from the current URL. The hook works similarly to usePathname, enabling real-time UI updates without full page reloads. It is especially useful for dynamic filtering, deep linking, pagination, sorting, and handling multi-value query parameters—common in e-commerce sites, dashboards, and search-based applications. The instructor demonstrates how to create a client component, import useSearchParams from next/navigation, and retrieve values using methods like get, getAll, and entries. He shows how URL parameters such as q=laptop, category=electronics, sort=price, or page=2 can be extracted and displayed, allowing dynamic rendering of search results based on user input. This tutorial provides a clear, SEO-friendly overview of leveraging Next.js useSearchParams for robust, interactive, and URL-driven application behavior.

08:02
useRouter Hook – push, replace, back & forward , prefetch
In this lecture, the instructor explains the useRouter hook in Next.js, a powerful client-side tool used to perform programmatic navigation. Unlike the Link component, which redirects via href, useRouter allows developers to navigate users based on conditions—such as after a successful login, form submission, or error handling. The instructor demonstrates how to import useRouter from next/navigation, use methods like router.push, router.replace, router.back, router.forward, and router.refresh, and implement them inside client components. He explains practical use cases: router.push adds a new entry to browser history, while router.replace removes the previous page from the history stack, ideal for login redirects and error pages. router.back and router.forward mimic the browser's native navigation behavior, and router.refresh forces a component or page reload. This tutorial gives a clear, SEO-friendly overview of how Next.js useRouter enhances dynamic, user-driven navigation in modern applications.

14:01
Redirect Function in Next.js
In this final lecture of the section, the instructor explains the redirect function in Next.js, a server-side utility used to redirect users from one route to another during rendering. Imported from next/navigation, the redirect method can be used inside server components, route handlers, and server actions. It allows developers to enforce navigation logic—for example, sending unauthenticated users to a login page by checking conditions like isLoggedIn. The function accepts a URL and an optional redirect type, which determines whether the redirect behaves like a push or replace action in the browser history. When used in server components, redirect injects a meta refresh tag, and in route handlers it triggers 307/303 HTTP status codes for redirection. This makes it ideal for authentication flows, protected pages, and backend-driven navigation. Overall, the lesson provides a clear, SEO-friendly overview of how Next.js redirect enables secure, controlled, and server-side routing behavior.

16. Server options and app optimization:

Deep Dive into Server Actions Why They Outshine API Routes
Mastering Fonts in Next.js Google & Local Made Easy
Forms in Next.js Prefetching, Navigation & Server Actions
Optimized Images in Next.js with the Image Component
Next.js <Link> & <Script> – Beyond <a> and <script>
Contact Form Project – Introduction, Setup & Database Connection
Contact Form Project – Contact Model, ShadcnUI & Form UI
Contact Form Project – Create Contact Server Action & Form Integration
Contact Form Project – Get Contact List & Render in Server Component
Contact Form Project – Update Contact Status & Revalidate Path
Contact Form Project – Contact Status Component, unstable_cache & Revalidate Tag

Deep Dive into Server Actions Why They Outshine API Routes
In this detailed lecture, the instructor introduces Next.js Server Actions, an advanced but easy-to-use feature that enables calling server-side functions directly from React components without creating traditional API routes. Server Actions streamline backend communication by allowing developers to query, mutate, and interact with databases using simple asynchronous functions marked with the "use server" directive. The lesson compares the old approach—using fetch, API endpoints, and JSON parsing—with the modern Server Action flow, which provides direct server execution, automatic form handling, type safety, and built-in CSRF protection. The instructor also explains two types of Server Actions: inline server actions (not recommended) and separate-file server actions (best practice). Real-world examples show how forms can submit data directly to the server, update UI automatically, and simplify client–server data flow. Overall, this chapter offers a clear, SEO-friendly understanding of how Next.js Server Actions enhance performance, maintainability, and modern full-stack development.

20:36
Mastering Fonts in Next.js Google & Local Made Easy
In this chapter, the instructor explains how to efficiently use fonts in Next.js through the powerful next/font module, which provides automatic font optimization, self-hosting, and eliminates extra network requests for better performance. The lesson covers implementing Google Fonts using next/font/google, configuring options like weight, style, and subsets, and applying fonts locally or globally via the layout.js file. It also demonstrates how to assign different fonts (such as Roboto, Poppins, or Jockey One) to specific components using their generated className. Additionally, the instructor shows how to integrate custom local fonts using next/font/local by adding .ttf files inside the public or app directory and referencing them through the src configuration. The chapter concludes by emphasizing how Next.js font optimization helps improve performance, privacy, and the overall user experience while allowing developers to load brand-specific typography with ease.

14:36
Forms in Next.js Prefetching, Navigation & Server Actions
In this chapter, the instructor explains the Next.js Form Component, an enhanced alternative to the native HTML form that offers client-side navigation, prefetching, loading UI, and progressive enhancement. The next/form component simplifies handling URL search params, reduces boilerplate code, and seamlessly integrates with Server Actions for backend processing without requiring use client. Using a real example, the chapter demonstrates a product search feature where user input is submitted through the optimized form, triggering server-side filtering and instantly updating the UI without page reloads. The loading.js file is showcased as a way to display a loading UI during route transitions, improving user experience. The instructor also highlights key benefits such as automatic form submission, built-in routing via the action prop, server-side processing, and enhanced performance compared to native forms. Overall, this chapter offers a practical, SEO-friendly explanation of how Next.js optimized forms make search, filtering, and navigation smoother in modern applications.

09:09
Optimized Images in Next.js with the Image Component
In this chapter, the instructor explains the Next.js Image Component, a highly optimized replacement for the native HTML <img> tag that ensures automatic image optimization, faster loading, and better visual stability. The next/image component supports key props like src, width, height, and alt, making it simple to load both local images from the public folder and remote images hosted online. The lesson demonstrates rendering images, customizing layout with flex utilities, and enabling performance-boosting features like responsive sizing and optional loaders. A key highlight is configuring remotePatterns inside next.config.js to securely load external images by defining their hostnames. This prevents errors like “invalid src prop” when using third-party URLs. Overall, the chapter showcases how the Next.js Image Component enhances performance, SEO, device-specific optimization, and developer convenience, making it an essential tool for modern web applications.

05:25
Next.js <Link> & <Script> – Beyond <a> and <script>
In this final chapter, the instructor reviews essential Next.js built-in components—Link, Script, Font, Form, and Image—highlighting how they enhance performance and user experience. The Link Component extends the HTML anchor tag to provide client-side navigation and prefetching, making route transitions faster and smoother. It primarily uses the href prop, with optional features like replace, scroll, and prefetch for advanced navigation control. The chapter also introduces the Script Component, which optimizes loading of external JavaScript using props such as src, strategy, onLoad, and onReady, ensuring scripts execute efficiently without blocking rendering. Along with previously learned components like next/font, next/form, and next/image, this chapter emphasizes how Next.js offers a powerful set of optimized tools to build high-performance applications with minimal configuration. Overall, it wraps up the section by reinforcing the importance of these Next.js components in creating modern, fast, and scalable web applications.

02:07
Contact Form Project – Introduction, Setup & Database Connection
In this section, the instructor introduces a Next.js mini project where you will build a fully functional contact form using Server Actions instead of traditional API Routes. The project covers essential backend concepts like form submission handling, MongoDB integration, data storage, data retrieval, and contact status management. You will also learn two powerful Next.js features—revalidatePath and revalidateTag—to manage data revalidation efficiently. The chapter begins by setting up a fresh Next.js project with Tailwind CSS, creating a .env file, and configuring the MongoDB_URI. Using Mongoose, the instructor demonstrates how to create a reusable DB Connect function and test the connection directly inside a Next.js server component. Once the database connection is confirmed, the foundation is ready for building the UI and implementing server-side form processing. Overall, this chapter provides a clear, SEO-friendly introduction to building a real-world Next.js Server Actions + MongoDB mini project.

08:40
Contact Form Project – Contact Model, ShadcnUI & Form UI
In this part of the mini project, the instructor focuses on creating the MongoDB model, building the contact form UI, and integrating the ShadCN UI component library. The lesson begins by creating a Contact model using Mongoose, defining fields such as name, email, subject, message, and status with proper validations and timestamps. After setting up the schema, the instructor moves to the frontend and builds a clean contact form layout in the Next.js app directory using JSX and Tailwind CSS. The ShadCN UI library is installed to enhance the UI with pre-built components like Card, Input, Textarea, Button, and Label, providing a professional look with minimal effort. State variables such as isSubmitting and message are added using useState, and a placeholder onSubmit handler is prepared for future server-side processing. By the end, the contact form UI is fully structured and ready for integration with Next.js Server Actions in the upcoming chapter.

11:57
Contact Form Project – Create Contact Server Action & Form Integration
In this chapter, the instructor demonstrates how to implement a Next.js Server Action to handle contact form submissions and store data in MongoDB. A new actions folder is created with a createContact server function that uses "use server", connects to the database via DB Connect, validates incoming FormData, and saves the entry using the Mongoose Contact model. The server action returns structured responses including success, error, and contactId for better frontend handling. On the frontend, the onSubmit handler calls this server action, manages UI feedback using useState, resets the form, and conditionally displays success or error messages. The seamless integration of the form with server actions ensures fast, secure data handling without relying on traditional API routes. By the end, the contact form becomes fully functional—capturing user inputs, validating them, saving data, and providing instant UI feedback. This section highlights the power of Next.js Server Actions, MongoDB, and Mongoose in modern full-stack form handling.

09:01
Contact Form Project – Get Contact List & Render in Server Component
In this section, the instructor demonstrates how to build a Contacts Listing Page in Next.js using Server Components, Server Actions, and MongoDB. A new /contacts route is created where all stored contact messages are displayed. The reusable ContactList component fetches data using an async getContacts Server Action, which connects to the database via DB Connect, retrieves entries using Contact.find(), sorts them by createdAt, and returns lean, formatted results for optimal performance. On the UI, each contact is rendered using Card, CardHeader, CardContent, and Badge components from a custom UI library, while Lucide React Icons enhance the visuals. The list dynamically displays contact details such as name, email, status, message, and created date, with conditional rendering for empty states. Additionally, UI buttons like “Mark as Read” and “Mark as Replied” are prepared for future status update server actions. This lesson highlights efficient data fetching, server-driven rendering, and clean component structure in Next.js 14.

11:28
Contact Form Project – Update Contact Status & Revalidate Path
In this chapter, the instructor explains how to implement the Update Server Action in Next.js to modify contact status in real time. A new updateContact action is created in index.js, which accepts contactId and status (new, read, replied). Using MongoDB, the function performs findByIdAndUpdate, returns a success response, and handles errors gracefully. Next, the action is integrated directly into the ContactList component through inline Server Actions, allowing buttons like “Mark as Read” and “Mark as Replied” to instantly trigger updates. Initially, changes don’t reflect immediately due to cached data, so the instructor introduces the powerful revalidatePath function. By calling revalidatePath('/contacts'), the UI updates instantly without needing a page reload. This ensures the contact status changes (read/replied) appear in real time. The chapter concludes by highlighting Next.js caching, server-side mutations, and a preview of the upcoming revalidateTag feature used with API routes.

06:53
Contact Form Project – Contact Status Component, unstable_cache & Revalidate Tag
In this chapter, the instructor explains how to use revalidateTag in Next.js to invalidate cached data more granularly, especially when working with unstable_cache, Server Actions, and MongoDB. A new ContactStats component is created to display the total number of contacts along with counts for new, read, and replied statuses. The data for these stats is fetched using a dedicated getContactStats server action, wrapped inside unstable_cache with a custom cache key and tags. When contact statuses are updated through the existing updateContact Server Action, the instructor replaces revalidatePath with revalidateTag, ensuring that only the cached stats block is refreshed instead of the entire page. This allows real-time updates in both the contact list and stats without needing a full reload. The lesson clearly demonstrates the difference between revalidatePath and revalidateTag, showcasing how tag-based caching provides finer control and improves performance in modern Next.js applications.

17. Middleware , metadata & SEO

Static vs Dynamic Metadata Best Practices for Layouts & Pages
Title Metadata Deep Dive Default, Template & Absolute Properties Explained
How to Add and Update Favicons in Next.js Projects
Static Open Graph Image What It Is, Why It Matters, Pros & Cons
Dynamic Open Graph Images in Next.js Building an OG API with nextog


Static vs Dynamic Metadata Best Practices for Layouts & Pages
In this section, the instructor introduces metadata and SEO optimization in Next.js, explaining how metadata provides essential information about a webpage that is hidden inside the HTML <head> and used by browsers, search engines, and social platforms. The chapter covers the importance of metadata for SEO ranking, social media sharing, and browser tab titles. It then explains how to implement static metadata using the metadata object inside layout.js and page.js, and how different routes can override default metadata. Next, the instructor demonstrates dynamic metadata using generateMetadata(), allowing titles and descriptions to be generated from dynamic routes such as [slug] in a blog. Key rules are highlighted, including that you cannot mix static and dynamic metadata for the same route and that metadata works only in server components, not client components. The lesson ends by reinforcing the proper usage of page metadata, layout metadata, and dynamic generation for SEO-friendly Next.js applications.

12:15
Title Metadata Deep Dive Default, Template & Absolute Properties Explained
In this chapter, the instructor explains the title metadata system in Next.js, focusing on its three key properties: default, template, and absolute. Using an authentication route group with login and signup pages, the lesson demonstrates how to configure custom titles inside the metadata object. The default property sets a base title (e.g., “Auth | Chai or Code”), while the template property uses %s to dynamically replace part of the title based on the specific page (such as “Signup | Chai or Code”). The absolute property overrides both default and template values, allowing pages like “Signup” to display a clean, standalone title. This feature helps create cleaner URLs, enhance clarity, and improve SEO by delivering accurate and route-specific metadata. By the end, you understand how to structure Next.js title metadata for layouts and pages, achieving better branding, readability, and search engine optimization across your application.

04:36
How to Add and Update Favicons in Next.js Projects
In this chapter, the instructor explains how to easily update favicons in a Next.js application. Favicons are the small icons displayed in the browser tab and play an important role in branding and SEO. Next.js makes favicon replacement simple—just delete the existing favicon.ico file from the public folder and replace it with a new one using the same file name and .ico format. Before doing this, ensure the development server is stopped to avoid caching issues. After adding the new favicon, restart the app with npm run dev and refresh the browser using Shift + F5 to bypass cache. The updated favicon will appear immediately in the browser tab. The chapter highlights that while multiple methods exist for adding favicons in web apps, Next.js offers a clean and straightforward approach by simply replacing the icon file. This improves both user experience and brand consistency across the application.

01:32
Static Open Graph Image What It Is, Why It Matters, Pros & Cons
In this chapter, the instructor explains the importance of Open Graph (OG) images in Next.js and how they enhance link previews across platforms like Facebook, Twitter, LinkedIn, WhatsApp, Slack, and Discord. These preview images make shared links more clickable, improve brand recognition, boost engagement, and support overall SEO performance. The lesson focuses on implementing static OG images, which are pre-created image files stored in the project’s public folder and suitable for pages with fixed content. Using the openGraph property inside the metadata object, developers can define OG titles, descriptions, URLs, and multiple images with attributes like height, width, and alt text. While static images are easy to implement, fast-loading, and reliable, they lack personalization, require manual creation for each page, and increase storage usage. The chapter concludes by highlighting these pros and cons and setting the stage for the next lesson on dynamic OG images, which solve personalization and scalability issues.

09:11
Dynamic Open Graph Images in Next.js Building an OG API with nextog
In this chapter, the instructor explains how to generate dynamic Open Graph (OG) images in Next.js using the powerful next/og package. Unlike static OG images, dynamic ones allow developers to create customized, data-driven previews for blogs, e-commerce pages, profiles, and more. By creating an API route (e.g., /api/og) and using the ImageResponse constructor, you can render images using JSX, CSS, and dynamic values such as title and description via URL search params. The chapter demonstrates implementing Edge Runtime for faster performance, building a custom JSX-based OG layout, and attaching the generated image inside the generateMetadata() function of dynamic routes like /blog/[slug]. Benefits include high customization, dynamic content support, consistent branding, and no need for manual image creation. However, dynamic OG images require server processing, are slightly slower than static ones, and involve more complexity. The lesson ends with a comparison between static and dynamic OG images, helping developers choose the best approach for their SEO and user-experience needs.

18. State management & data fetching

Introduction to Tanstack Query and Initializing in Query provider in Nextjs App
useQuery in TanStack Query – Simplifies data fetching by removing boilerplate
useMutation in TanStack Query – Mutations, Query Invalidation, and Optimistic UI
What is Hydration & Caching in Next.js - a quick guide
ToDo App – DB, Schema & Query Provider Setup
ToDo App – Add Todo with Zod Validation & Mutation Hooks
ToDo App – Get & Display Todos with Zustand and TanStack Query
ToDo App – Mark Todo Completed with Mutations
ToDo App – Delete Todo with Mutations

Introduction to Tanstack Query and Initializing in Query provider in Nextjs App
In this chapter, the instructor introduces TanStack Query (React Query) as a powerful server state management and data-fetching solution for React and Next.js applications. TanStack Query helps manage data that lives on a server—such as APIs, databases, or GraphQL—and is required on the client side. Instead of writing repetitive boilerplate code with useEffect, useState, and manual fetch calls, TanStack Query automates caching, refetching, retry logic, background updates, and optimistic UI (instant UI updates before server confirmation). It solves common CSR problems like inconsistent data, lack of caching, and no retry mechanisms. The chapter also covers essential concepts: useQuery, useMutation, QueryClient, and QueryClientProvider. The implementation starts by installing the library and wrapping the entire Next.js app with a QueryProvider inside the root layout, enabling seamless client-side fetching across the application. This setup ensures optimized performance, cleaner code, and a smoother user experience, making TanStack Query an essential tool for modern Next.js development.

13:01
useQuery in TanStack Query – Simplifies data fetching by removing boilerplate
In this chapter, the instructor demonstrates how to use the useQuery hook from TanStack Query to fetch data efficiently inside client components in Next.js. After installing a UI library for better visualization, a simple API route is created under /api/users to serve mock user data. Traditionally, fetching data in client components requires multiple steps—useEffect, useState, and manual fetch logic. However, TanStack Query simplifies this by providing useQuery, which handles data fetching, loading states, error handling, and caching automatically. The instructor shows how to wrap the Next.js app with QueryClientProvider, define a fetch function, and then use useQuery with a queryKey and queryFn to retrieve data. The returned values—data, isLoading, and isError—allow easy UI updates. A clean UI using card components displays the fetched users. This chapter highlights how TanStack Query eliminates boilerplate code and improves performance, making client-side data fetching in Next.js much smoother and more SEO-friendly.

10:40
useMutation in TanStack Query – Mutations, Query Invalidation, and Optimistic UI
In this chapter, the instructor explains how to use useMutation from TanStack Query to perform server-side data changes such as POST, PUT, PATCH, and DELETE operations in a Next.js application. After creating a POST API endpoint under /api/users to add new users, the lesson walks through building an AddUserForm client component using useState for form inputs and a custom addUser function for sending data to the backend. By configuring useMutation with a mutationFn, the form can trigger database updates using the mutate method. To ensure real-time UI updates, the instructor uses onSuccess along with queryClient.invalidateQueries, refreshing cached data associated with the queryKey “users.” This achieves seamless optimistic UI updates without page reloads. Buttons are dynamically disabled using isPending, improving UX. Overall, this chapter highlights the power of TanStack Query for managing mutations, invalidating cache, and simplifying data state management in modern React and Next.js applications.

12:46
What is Hydration & Caching in Next.js - a quick guide
In this lecture, the instructor explains the core concepts of caching and hydration in Next.js, using simple real-life analogies to make them easy to understand. Caching is described as saving a ready-made copy of a webpage so the server doesn’t need to rebuild it every time. This boosts performance by serving pre-rendered content instantly—similar to serving pre-made coffee instead of preparing it fresh for every customer. It works best for blogs, eCommerce homepages, and other pages that don’t change frequently, but should be avoided for real-time dashboards, shopping carts, or live stock data. On the other hand, hydration refers to bringing a static HTML page to life by attaching JavaScript and making it interactive—like heating a frozen pizza so it becomes edible. The browser first loads static HTML, then downloads interactive scripts, and finally enables clicks, forms, and animations. Together, caching and hydration make Next.js applications fast, interactive, and highly optimized for user experience and SEO.

15:51
ToDo App – DB, Schema & Query Provider Setup
In this chapter, the instructor begins building a full To-Do List Application using modern tools like Next.js, Tailwind CSS, ShadCN UI, Zod, Zustand, Mongoose, MongoDB, and TanStack Query. The lesson explains how even a simple to-do app helps you master essential concepts needed for large-scale production projects. The setup starts with creating a new Next.js project and integrating ShadCN for UI components. Additional libraries like Zod (for form validation), Zustand (for global state management), and TanStack Query (for server state handling) are installed. The instructor then configures a robust MongoDB connection using Mongoose, implementing a caching mechanism to prevent multiple connections during development. A full Todo model is created with fields like title, description, priority, completion status, and timestamps. Finally, a global Query Provider wraps the app, enabling optimized server-side and client-side data fetching. This chapter lays the foundation for creating, reading, updating, deleting, and toggling to-dos in upcoming sections.

18:28
ToDo App – Add Todo with Zod Validation & Mutation Hooks
In this chapter, the instructor walks through building a fully functional To-Do creation workflow in Next.js using modern tools like Server Actions, Zod, TanStack Query, Zustand, Mongoose, and MongoDB. The process begins by setting up a server-side createTodo action, integrating schema validation with Zod, and defining a Todo model using Mongoose. A reusable validation file and structured folder setup help maintain clean architecture. On the client side, a Todo Form component is built using React Hook Form with Zod Resolver, enabling smooth form handling and real-time validation. The chapter also includes creating a Zustand store for global state management and implementing useMutation from TanStack Query for adding todos with optimistic UI updates and cache invalidation. UI components like inputs, textareas, selects, and buttons are integrated from ShadCN UI. Debugging steps and error handling are also demonstrated, ensuring a smooth, production-ready workflow.

25:42
ToDo App – Get & Display Todos with Zustand and TanStack Query
In this chapter, we build a complete To-Do List feature using Next.js, Zustand, TanStack Query, and MongoDB. The process begins with creating a server action called getTodos, which connects to the database, fetches todos, sorts them by createdAt, and returns structured JSON data. Then, a custom hook useTodos is implemented using useQuery from TanStack Query to fetch todos, update the Zustand store, and manage loading or error states. A global todo store handles todos, filters, and computed values like activeCount and completedCount. UI components such as TodoList, TodoFilter, and TodoItem are created using ShadCN UI elements including Card, Button, Badge, and Checkbox. The app supports filtering todos by all, active, and completed, while dynamically rendering priority-based UI styles. Finally, real-time updates ensure newly created todos appear instantly, showcasing a scalable and efficient full-stack workflow.

26:59
ToDo App – Mark Todo Completed with Mutations
In this chapter, the instructor fixes a state management error related to the getSnapshot caching issue and enhances the To-Do app by implementing a smooth toggle feature using Zustand, Next.js, and TanStack Query. The process begins by replacing direct filtering with a memoized version using useMemo, improving performance and preventing infinite loops. Then the toggleTodo server action is created to update the completed status of a specific to-do using Mongoose and MongoDB, followed by a new custom hook useToggleTodo that uses useMutation, queryClient.invalidateQueries, and the updateTodo method from the Zustand store. A new updateTodo function is added to the store to modify a specific item using state.todos.map. Finally, the toggle behavior is wired inside TodoItem using a Checkbox component and a handleToggle function with mutateAsync for real-time UI updates. The result is a fully optimized, reactive, and scalable to-do toggling system.

13:06
ToDo App – Delete Todo with Mutations
In this section, the instructor demonstrates how to implement a smooth delete feature in a full-stack Next.js Todo application using Zustand, TanStack Query, MongoDB, and Mongoose. The process starts with creating a deleteTodo server action using findByIdAndDelete and returning structured responses with proper error handling and revalidatePath for fresh data. Next, a removeTodo method is added to the Zustand store to optimistically update the UI by filtering out deleted items from state.todos. A custom hook useDeleteTodo is built using useMutation, enabling real-time deletion, invalidateQueries, and instant UI sync. The instructor then integrates this hook inside TodoItem, creating a handleDelete function that triggers deletion through mutateAsync and displays feedback using toast.success and toast.error. Finally, the real-time delete action works flawlessly, showcasing the power of combining Zustand, TanStack Query, and Zod for building highly optimized, reactive, and scalable applications.

19. Database & ORM integration

ORM & Prisma in Next.js: From Setup to Seeding
Creating & Fetching Data with Prisma ORM
Building a PostList Component with Prisma in Server Components
Introduction to Drizzle ORM with Next.js & Neon: Setup + User Schema
CRUD Operations with Drizzle ORM & Next.js Server Actions
Creating User Management UI: UserList + UserForm using shadcn and drizzle orm

ORM & Prisma in Next.js: From Setup to Seeding
In this chapter, the instructor introduces how to integrate databases and ORMs into a Next.js application, focusing primarily on Prisma ORM. The lesson begins by explaining what an ORM (Object-Relational Mapping) is and how tools like Prisma, Drizzle, and Mongoose (ODM) act as translators between JavaScript/TypeScript code and SQL or NoSQL databases. The instructor demonstrates how Prisma converts JS-based queries into raw SQL and back, making database operations cleaner and less error-prone. The setup includes installing Prisma, initializing the schema.prisma file, configuring the DATABASE_URL using Neon PostgreSQL, and generating a Prisma Client. A simple Post model is created with fields like id, title, description, and createdAt, followed by running migrations using npx prisma migrate dev and syncing changes with prisma db push. The chapter concludes by seeding sample data, viewing entries via Prisma Studio, and building a basic Create Post form using server actions, showcasing how Next.js and Prisma work seamlessly together for full-stack development.

30:49
Creating & Fetching Data with Prisma ORM
In this chapter, the instructor demonstrates how to handle form data, create posts, and fetch data using Next.js Server Actions and Prisma ORM. The lesson begins by extracting values like title and description from FormData, followed by logging a success message to ensure the server action is working correctly. After removing the seeding logic to avoid duplicate records, the instructor tests the form by inserting sample posts. Next, they introduce the Prisma Client to retrieve records using post.findMany(), returning results directly to the browser. The chapter also explains the full request flow: the browser triggers a server action, which communicates with the Prisma Client, converts JS-based queries into a SQL query, sends it to the PostgreSQL database, retrieves rows, converts them to JSON, and finally returns them to the client. The instructor encourages learning more Prisma methods like findUnique, update, updateMany, and upsert. This chapter strengthens understanding of integrating Prisma efficiently with Next.js.

05:59
Building a PostList Component with Prisma in Server Components
In this chapter, the instructor demonstrates an efficient way to directly query a database inside a Next.js server component using Prisma ORM, without needing separate Server Actions or API routes. Instead of importing and calling an external action, you can directly use Prisma Client within the server component to fetch posts using methods like prisma.post.findMany(). The chapter walks through creating a reusable PostList component that receives posts as props and displays details such as title, description, and createdAt timestamps. After integrating the component and reloading the application, the data appears instantly, showcasing how powerful and seamless server-side data fetching becomes with Prisma in Next.js. This approach simplifies the architecture, reduces boilerplate code, and improves performance. The chapter concludes by transitioning toward Drizzle ORM, another modern database tool, which will be explored in the upcoming lessons.

02:22
Introduction to Drizzle ORM with Next.js & Neon: Setup + User Schema
In this lecture, the instructor introduces Drizzle ORM and explains how it differs from Prisma, emphasizing that Drizzle works exclusively with SQL relational databases like PostgreSQL. After reviewing how Prisma converts TypeScript/JavaScript queries into SQL under the hood, the session moves into setting up Drizzle ORM in a Next.js project. The instructor walks through installing essential packages such as drizzle-orm, drizzle-kit, neon-serverless, and configuring .env with a Neon database connection string. A database connection is created using Neon HTTP inside a db.js file. Next, a dedicated schema folder is set up where a SQL-like table is defined using Drizzle’s pgTable, serial, text, boolean, and timestamp utilities. The drizzle.config.js file is configured to manage migrations, specifying schema paths, dialect, and output directories. Using npx drizzle-kit generate, the schema is converted into raw SQL migration files, which are then pushed to the Neon database. The lecture ends by preparing for upcoming CRUD operations using Drizzle ORM within Next.js server actions.

14:51
CRUD Operations with Drizzle ORM & Next.js Server Actions
In this chapter, the instructor explains how to build full CRUD operations using Drizzle ORM and Next.js Server Actions for a simple User Management Application. The process begins by creating an actions folder and defining server-side functions such as createUser, getAllUsers, getUserById, updateUser, and deleteUser. Using Drizzle’s SQL-like syntax, the instructor demonstrates how to perform operations with methods like db.insert, db.select, db.update, and db.delete, along with conditional queries using eq. Form values such as name, email, and isActive are extracted from FormData, and the appropriate database actions are executed. After each operation, revalidatePath ensures the UI updates instantly. This lesson highlights how Drizzle ORM offers a clean, SQL-friendly, and type-safe approach to implementing backend logic. The chapter concludes with instructions to integrate these server actions into the UI, preparing for the next step in building a fully functional CRUD interface.

09:54
Creating User Management UI: UserList + UserForm using shadcn and drizzle orm
In this chapter, the instructor demonstrates how to build the complete UI integration for a CRUD-based User Management System using Next.js, Drizzle ORM, and Server Actions. The process begins by setting up the main page.js file, where two key components—UserForm and UserList—are imported to handle user creation and display. The instructor shows how to create user-form.jsx and user-list.jsx, using ShadCN UI components like Card, Input, Button, Label, and Checkbox for a clean interface. The UserForm component connects to the createUser server action, collects FormData, and submits new entries to the database. Meanwhile, UserList fetches user records using getAllUsers and includes action buttons to trigger deleteUser, automatically updating the UI through revalidatePath. The chapter also covers error fixes, dynamic rendering, and testing the full flow—adding users, listing them, and deleting them. By the end, the user interface seamlessly interacts with Drizzle-powered backend logic.

20. Authentication and authorization :

Introduction to Authentication and Authorization in Nextjs
Mastering Better Auth in Next.js: Google & GitHub Login with ShadCN UI
Configuring Better Auth DatabaseURL + Google & GitHub Secrets
Better Auth in Action Database Migration, API & Auth Client Setup
Better Auth Login UI ShadCN + Google & GitHub Sign-In
Better Auth Security Route Protection, Sessions & Sign-Out Flow
Clerk Authentication in Next.js Intro, Middleware Custom Sign-In/Up Setup Guide

Introduction to Authentication and Authorization in Nextjs
In this lecture, the instructor introduces Authentication and Authorization in Next.js, explaining their roles in securing modern web applications. Authentication verifies who the user is—ensuring each user is a real and valid entity. Authorization determines what the authenticated user can access, defining their roles, permissions, and level of control within the application (e.g., admin vs. normal user). The session highlights why these mechanisms are essential for RBAC (Role-Based Access Control), restricted routes, dashboards, and secure data access. The instructor also outlines three major ways to implement authentication in Next.js: NextAuth.js, a popular solution offering social logins, credential logins, and built-in JWT and session handling; Better Auth, a newer, lightweight, highly secure authentication framework supporting passwordless login and simple session management; and Clerk, a powerful third-party auth provider with built-in UI components, social logins, MFA, and full user management. These methods will be implemented in upcoming chapters for a complete hands-on experience.

07:29
Mastering Better Auth in Next.js: Google & GitHub Login with ShadCN UI
In this chapter, the instructor demonstrates how to integrate Better Auth into a Next.js application using the Prisma Adapter for seamless and secure authentication. The setup begins by installing ShadCN UI components for a clean interface and running the initialization commands. After installing Better Auth with npm install better-auth, the instructor configures essential environment variables such as BETTER_AUTH_SECRET and BASE_URL. A dedicated auth.js file is created inside the lib folder, where the BetterAuth instance is initialized along with Prisma Adapter, email-password authentication, and social providers like Google and GitHub. Prisma is then initialized using npx prisma init, followed by generating the Prisma Client and setting up the db.js connection. The highlight of the chapter is running npx better-auth cli generate, which automatically creates all necessary authentication schema models—including User, Session, Account, and Verification—inside the schema.prisma file. This automated setup prepares the application for advanced authentication flows to be implemented in the upcoming chapters.

11:49
Configuring Better Auth DatabaseURL + Google & GitHub Secrets
In this lecture, the instructor continues integrating Better Auth into the Next.js application by setting up all required authentication credentials. The process begins with generating the DATABASE_URL using Neon DB, which is added to the .env file. Next, the instructor retrieves four essential credentials—two for GitHub OAuth and two for Google OAuth. For GitHub, a new OAuth App is created under Developer Settings, where the Client ID, Client Secret, and the required callback URL provided by Better Auth are configured. Similarly, in Google Cloud Console, a new project is created, followed by configuring the OAuth consent screen, setting up a Web Application OAuth Client, and adding the Authorized Redirect URI recommended by Better Auth. All extracted credentials—GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GITHUB_CLIENT_ID, and GITHUB_CLIENT_SECRET—are mapped correctly inside the .env file and linked inside the auth.js configuration. The lecture concludes with preparing to push Prisma changes and implement full Google and GitHub login flows in the next chapter.

07:58
Better Auth in Action Database Migration, API & Auth Client Setup
In this chapter, the instructor continues the Better Auth integration in a Next.js application by finalizing the database setup and preparing the authentication backend. After adding all required OAuth credentials, the next step is running the necessary Prisma commands. The instructor attempts to run npx prisma migrate dev, encounters database connection issues, and resolves them by switching from a Neon DB connection to a local PostgreSQL instance using Docker and a docker-compose.yml file. Once the local database is running, the Prisma migration executes successfully, generating the Better Auth schema and pushing it to the database using npx prisma db push. The chapter then introduces the setup of the authentication route handler in the api/auth/[...all]/route.js file to process OAuth requests from Google and GitHub. Finally, a Better Auth client instance is created in the authClient.js file. The lecture ends by preparing the project for building the UI and implementing social login in the next chapter.

08:55
Better Auth Login UI ShadCN + Google & GitHub Sign-In
In this chapter, the instructor builds the complete Login UI for the Next.js authentication system powered by Better Auth. The process begins by creating a new login route and adding a page.js file containing a clean UI built using ShadCN UI components like Button, Card, and CardContent. The instructor also imports icons from Lucide React and initializes a client-side component with "use client". Two handler functions—handleGoogleSignIn and handleGitHubSignIn—are implemented using the auth client to trigger OAuth flows. After setting up redirect URLs, the instructor creates a simple dashboard page to navigate users after a successful login. Testing the buttons confirms that Google and GitHub OAuth redirects work correctly, completing the full authentication loop. The chapter concludes with a preview of upcoming lessons where the developer will learn to fetch session data, get the currently logged-in user, implement sign-out, and apply middleware for route protection.

06:02
Better Auth Security Route Protection, Sessions & Sign-Out Flow
In this lecture, the instructor demonstrates how to implement route protection in a Next.js application using Better Auth. Instead of relying solely on middleware, the video shows how to explicitly secure pages by validating sessions both on the server component and the client component. A protected Home component is created using auth.getSession, and if no session is found, the user is redirected to the /login page using redirect() from next/navigation. Similarly, the Login route is reversed—if a user is already authenticated, they are redirected back to the homepage. The instructor also demonstrates how to retrieve session data, display logged-in user details, and implement a proper sign-out flow using authClient.signOut with fetchOptions.onSuccess to navigate users back to the login screen. The session-based redirection ensures that logged-out users can't access protected pages, and logged-in users can't revisit the login screen. This full setup completes the process of integrating Better Auth securely into a Next.js project.

11:54
Clerk Authentication in Next.js Intro, Middleware Custom Sign-In/Up Setup Guide
In this lecture, the instructor demonstrates how to implement Clerk Authentication in a Next.js application with a fast and seamless setup. The process begins by installing @clerk/nextjs and configuring middleware to protect routes while allowing public access to /sign-in and /sign-up. The ClerkProvider is added inside layout.js to wrap the entire application, enabling global authentication support. The instructor then creates custom Sign-In and Sign-Up pages using Clerk’s built-in components like <SignIn /> and <SignUp />, along with required environment variables such as CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY, and redirect URLs. After configuring public routes and environment variables, the app automatically redirects unauthenticated users to the sign-in page. OAuth providers like Google and GitHub work instantly without manually handling client IDs or secrets. The instructor also shows how to access the authenticated user using currentUser() in server components and useUser() on the client. Clerk’s UserButton provides built-in UI for profile management and sign-out, making authentication incredibly smooth and developer-friendly.

21. Payments and billing:

Introduction of Billing and Payment Modules and Stripe Component Setup
Next.js and Stripe: Building a Payment Flow
Integrating Polar with Next.js and Better Auth
Next.js + Razorpay Order Creation and Payment Verification

Introduction of Billing and Payment Modules and Stripe Component Setup
In this lecture, the instructor introduces the Payments and Billing Module for a Next.js SaaS application, explaining how billing transforms free users into paying customers. After setting up the base project with Next.js, Better Auth, Prisma, and ShadCN UI, the focus shifts to building a complete billing system. The module will integrate three major payment providers: Stripe, Polar, and Razorpay, starting with Stripe as the foundation for understanding real-world payment flows. The instructor demonstrates the initial setup of a Stripe Component, which displays the user's name, email, avatar, and current plan (Free or Pro). Users can upgrade to a Pro plan, triggering a Stripe Checkout flow. A basic paywall is implemented where only Pro users can access premium actions, while free users see an upgrade option. This setup prepares the app for handling subscriptions, secure payments, webhooks, and server actions in upcoming chapters.

14:03
Next.js and Stripe: Building a Payment Flow
In this lecture, the instructor introduces the Payments and Billing Module for a Next.js SaaS application, explaining why billing is essential for converting free users into paying customers. The project is already set up with Next.js, Better Auth, Prisma, and ShadCN UI, providing a complete authentication and UI foundation. This module focuses on integrating powerful payment providers—Stripe, Polar, and Razorpay—starting with Stripe to understand real-world payment flows. The instructor builds a reusable Stripe Component that displays the user’s name, email, avatar, and current plan using data fetched from Better Auth and the database. A basic paywall logic is added where only Pro users can access premium features, while free users are prompted to upgrade via a dedicated Upgrade to Pro button that redirects to Stripe Checkout. This chapter sets the stage for implementing subscriptions, secure payment processing, webhooks, and server actions in the upcoming lessons.

41:15
Integrating Polar with Next.js and Better Auth
In this lecture, the instructor explains how to integrate Polar into a Next.js SaaS application using Better Auth, showcasing how simple and developer-friendly Polar is compared to Stripe. The setup begins by creating a Polar organization, configuring products, switching to Sandbox Mode, and generating an Access Token. After installing required dependencies like @polar-sh/sdk and better-auth, the instructor adds environment variables such as POLAR_ACCESS_TOKEN and POLAR_SUCCESS_URL. A dedicated polar client is created and connected to Better Auth plugins, enabling automatic customer creation on signup. The instructor then builds a reusable Polar Component, fetches user data via authClient, and implements checkout using authClient.checkout() with a product slug. After completing a test payment in Sandbox mode, Polar automatically links the subscription using the external_id mapped to the user’s database ID. Finally, the app checks for active subscriptions to unlock Pro features, demonstrating a complete and seamless Polar payment integration inside Next.js.

27:31
Next.js + Razorpay Order Creation and Payment Verification
In this final chapter, we integrate Razorpay as the third payment provider in our Next.js application, specifically catering to the Indian market with support for UPI, cards, and net banking. We start by updating the Prisma schema to include a RazorpayPlan enum and subscription details, followed by creating a database migration. The tutorial guides you through obtaining API keys from the Razorpay dashboard and configuring environment variables. We then implement two key API endpoints: one for creating orders and another for verifying payments and updating user data. On the frontend, we build a Razorpay component utilizing the useRazorpay hook to handle the payment flow, including loading the Razorpay script. Finally, we secure the integration by verifying payment signatures on the backend, ensuring a robust and seamless transaction process.

22. Leetcode clone:

Introduction and Demo of Leetcode Project
Project Setup - Installing Nextjs and Initializing Shadcn/ui
Database Setup Made Easy: Prisma Initialization & Dockerized DB for Next.js
Authentication Using Clerk -Clerk Setup, GitHub OAuth & Custom Auth Pages
User Onboarding with Prisma - Defining Schema & Server Actions
Building a Responsive Navbar & Homepage with Dark/Light Mode + Role-Based Auth
Judge0 Setup: Self-Hosting Locally or Cloud Integration via RapidAPI
Create Problem: Defining Prisma Schema & Linking with Admin User
Problem Creation - Integrating Judge0 to Validate & Save Testcases in DB
Role-Based Access & UI for Problem Creation Form with Sample Problems
Problem Route Page: Fetching All Problems with Table UI, Filters & Search
Problem Solving Page: Fetch by ID with Header, Left/Right Sections & Full Layout
Submissions & TestCases: Prisma Schema for Storing Execution Data
Submission History: Fetch User-Specific Submissions & Build History Component
Prisma Schema & Backend Endpoints for Creating Playlists and Adding Problems
Create Playlist & Add Problems via Modal with Proper Logic Handling
Profile Page: Fetch User Info, Stats, Submissions & Playlists

Introduction and Demo of Leetcode Project
In this demo, the instructor showcases a full-featured LeetCode Clone built using Next.js, Clerk Authentication, Prisma, PostgreSQL, ShadCN UI, Tailwind CSS, and Judge0 API for code execution. The app includes a polished landing page with light/dark mode, role-based authentication, and the ability for admins to create new coding problems. Problems come with fields like title, description, examples, constraints, test cases, and reference solutions. Users can run and submit code, view detailed submission results, and automatically track problem-solving progress. The platform also features submission history, problem status updates, and a dedicated profile page showing user details, solved count, success rate, and past submissions. Additionally, users can create custom playlists and add problems to them for structured practice. The project highlights building real-world features like CRUD operations, validation, role management, and code evaluation. This upcoming course teaches how to build this complete DSA practice platform from scratch.

06:56
Project Setup - Installing Nextjs and Initializing Shadcn/ui
In this chapter, the instructor introduces the setup process for building a LeetCode Clone using React, Next.js 15, Tailwind CSS, and ShadCN UI. The session begins by creating a new project folder and installing Next.js 15 with JavaScript, ESLint, Tailwind CSS, and the App Router enabled. After the installation, the instructor initializes ShadCN UI using the command npx shadcn-ui init, selects a base color, and adds all UI components to the project. The setup is verified by running npm run dev and rendering a sample Button component with Tailwind utility classes. This confirms that both Tailwind and ShadCN UI are working correctly. Finally, the project is pushed to GitHub as a clean starting point for building the full LeetCode clone. This chapter ensures learners understand how to properly initialize a modern Next.js project with essential styling and UI libraries before moving into advanced features.

06:08
Database Setup Made Easy: Prisma Initialization & Dockerized DB for Next.js
In this chapter, the instructor explains how to set up Prisma with PostgreSQL inside a Next.js application using a clean, step-by-step approach. The setup begins by installing Prisma and the Prisma Client, followed by initializing Prisma to generate the schema.prisma file and .env configuration. Instead of relying on external hosts like Neon, the instructor recommends using a Docker Compose file to create a reliable local PostgreSQL container, ensuring consistent development. A simple User model is added to the Prisma schema for testing, and migrations are executed using npx prisma migrate dev, which syncs the schema with the database. The instructor also creates a reusable db.js file to initialize the Prisma Client safely in both development and production. After verifying the setup with Prisma Generate, the chapter concludes by pushing the changes to GitHub through a new branch and pull request. This ensures a fully prepared database environment for building the upcoming LeetCode Clone APIs.

11:29
Authentication Using Clerk -Clerk Setup, GitHub OAuth & Custom Auth Pages
In this chapter, you learn how to set up Clerk Authentication in a Next.js application with full GitHub OAuth support. The instructor walks through creating a Clerk app on clerk.com, enabling GitHub OAuth, and installing the required @clerk/nextjs package. After configuring the publishable key, secret key, and required environment variables, the next step is implementing middleware to protect private routes and mark /sign-in and /sign-up as public. The setup continues by wrapping the entire app with ClerkProvider in layout.js, creating route groups for Sign In and Sign Up, and using Clerk’s prebuilt components like <SignIn />, <SignUp />, and <UserButton />. The chapter also covers adding force redirect URLs for smooth navigation after login and logout. By the end, Clerk authentication is fully implemented, allowing secure login, signup, session handling, and GitHub-based access. Part two will focus on syncing authenticated users with the database using Prisma.

15:03
User Onboarding with Prisma - Defining Schema & Server Actions
In this chapter, the instructor demonstrates how to onboard authenticated Clerk users into a PostgreSQL database inside a Next.js application using Prisma. After ensuring the Docker daemon and local PostgreSQL container are running, the instructor updates the Prisma schema by adding a complete User model with fields like clerkId, email, role, firstName, lastName, imageUrl, and timestamps. A migration is applied using npx prisma migrate dev, and the structure is verified through Prisma Studio. The core logic involves creating an onboardUser server action that fetches the current session via currentUser() from @clerk/nextjs/server, extracts user details, and stores them using Prisma’s powerful upsert method. This ensures that a user is created only on their first login and updated if their profile changes. The onboarding action is then triggered inside page.js on every login. The demo confirms that the user is correctly inserted only once, completing a clean and secure Clerk + Prisma user synchronization flow.

15:37
Building a Responsive Navbar & Homepage with Dark/Light Mode + Role-Based Auth
In chapter four of this Next.js project, the instructor implements the Navigation Bar, Home Page, and Role-Based Authentication using Clerk, Prisma, and Tailwind CSS. The chapter begins by creating and merging pull requests to maintain clean GitHub workflow. Then, a structured root layout is set up with a dotted background texture, followed by building a reusable Navbar component that displays dynamic links, a UserButton, and a Create Problem button for admins. A full dark/light mode setup is added using a custom ThemeProvider and a Mode Toggle component. The instructor also introduces a server action, currentUserRole, which fetches the logged-in user’s role from PostgreSQL via Prisma, enabling accurate UI rendering based on user permissions. After integrating the role dynamically into the layout, the navigation updates in real time for admins and users. Finally, the homepage UI is added, sign-in/sign-out flows are tested, and the chapter is wrapped up with version control updates.

18:12
Judge0 Setup: Self-Hosting Locally or Cloud Integration via RapidAPI
In chapter five, you learn how to self-host Judge0 on your local system using WSL, Docker, and Docker Compose to build a fully controlled code-execution engine similar to platforms like LeetCode. The chapter begins with installing WSL (Windows Subsystem for Linux), setting up Ubuntu 22.04, updating packages, and installing Docker and Docker Compose. You then download and extract the Judge0 bundle, configure the Redis password and PostgreSQL password inside the judge0.config file, and start the required services using docker compose up. Troubleshooting steps are shown for common issues like authentication errors and container failures, emphasizing persistence during setup. After several retries, the Judge0 server successfully runs on localhost:2358, and its API docs become accessible. If self-hosting fails, the instructor recommends using RapidAPI’s Judge0 Cloud as a reliable alternative. This chapter prepares you for executing code, validating test cases, and integrating Judge0 in future modules.

20:41
Create Problem: Defining Prisma Schema & Linking with Admin User
In chapter six, the instructor explains how to build the problem-creation system for a custom LeetCode clone using Next.js, Prisma, and Judge0. The chapter begins with an architectural overview, highlighting how admin users can create problems, each containing metadata like title, description, difficulty, tags, examples, constraints, and optional hints or editorials. The core logic focuses on essential components such as test cases, code snippets, and reference solutions, which are required to validate each problem through the Judge0 backend. Only when all test cases pass using the provided reference solution is the problem saved to the database. The instructor then builds a complete Prisma Problem model, adds relations with the User model, applies migrations, and indexes key fields like role and difficulty for faster queries. This chapter sets the foundation for creating valid, fully tested coding problems in the upcoming modules.

15:47
Problem Creation - Integrating Judge0 to Validate & Save Testcases in DB
The instructor walks through building the complete problem creation system for a custom LeetCode clone using Next.js, Prisma, and the Judge0 execution engine. The chapter explains the core architecture where only admin users can create problems containing essential metadata such as title, description, difficulty, tags, examples, constraints, and optional hints or editorials. The most critical parts include test cases, code snippets, and reference solutions, which determine whether a problem is valid. Each created problem is sent to the Judge0 backend, where the input test cases and expected outputs are executed using the reference solution. If all test cases pass successfully, the problem is saved into the database through a well-structured Prisma schema. The instructor builds the full Problem model, sets up relations with the User model, switches to UUID, performs Prisma migrations, and adds indexes to improve performance. This chapter forms the backbone of problem validation and creation.

35:45
Role-Based Access & UI for Problem Creation Form with Sample Problems
The instructor completes the full Create Problem feature for a LeetCode-style Next.js application using Next.js, Prisma, Clerk, React Hook Form, Zod, Monaco Editor, and the Judge0 API. After validating problems through Judge0 and saving them only when all test cases pass, the focus shifts to building a powerful front-end form. The instructor creates an admin-protected create-problem page, fetches the current user role, and applies access control using Next.js Redirects. A dynamic form is implemented using React Hook Form, useFieldArray, and Zod schemas to handle complex fields such as title, description, difficulty, tags, test cases, examples, code snippets, and reference solutions. The Monaco Editor is integrated for clean code input, and a sample problem loader auto-fills the form for faster testing. Finally, the form submits data to the createProblem API, with real-time feedback using Toast notifications, storing the validated problem in PostgreSQL via Prisma, and ending with GitHub commits and a pull request merge.

29:53
Problem Route Page: Fetching All Problems with Table UI, Filters & Search
The instructor demonstrates how to build a complete Problems Table UI for a LeetCode-style Next.js application using Next.js, Prisma, Server Actions, and Clerk Authentication. This chapter focuses on fetching, searching, filtering, and displaying all problems stored in the PostgreSQL database. A dedicated getAllProblems and getProblemById server action is created to retrieve problems using Prisma queries, including sorting by createdAt and checking whether a problem is already solved by the logged-in user. The instructor also introduces a new ProblemSolved model to track user progress. On the front-end, a dynamic ProblemTable component is built with React state, useMemo, pagination logic, and advanced filters such as search, difficulty, and tags. Admin-only features like deleteProblem, edit, and role-based UI control are also implemented. Finally, the entire workflow—fetching data, filtering, rendering badges, conditional UI, toast notifications, and GitHub branching—is demonstrated to complete the problem-listing module.

22:12
Problem Solving Page: Fetch by ID with Header, Left/Right Sections & Full Layout
In this video, we add the most exciting feature: the complete Problem Solving Page built using Next.js, Server Actions, Prisma, and the Monaco Editor. This chapter starts by fetching problem details from the database using a dedicated server action and rendering them dynamically through a dynamic route /problem/[id]. The UI is structured into three main sections—a header, a detailed left panel showing the problem description, examples, and constraints, and a powerful right panel containing the code editor and test cases. Users can switch between languages, thanks to state management, useEffect, and stored code snippets. The chapter also covers adding tabs for editorials, hints, and submission history with ShadCN UI components. On the coding side, the instructor sets up the handleRun and handleSubmit functions, preparing the logic to send user code to the backend’s Judge0 API using server actions. This creates a fully functional, interactive problem-solving environment essential for a real LeetCode-style application.

20:01
Submissions & TestCases: Prisma Schema for Storing Execution Data
In this continuation of previous Chapter, the instructor implements the full execute code feature using Next.js Server Actions, Prisma, and the Judge0 API. The chapter begins by extending the Prisma schema with new models like Submission and TestCaseResult, adding relations to the User and Problem models, and running necessary Prisma migrations. Next, the instructor builds the executeCode server action, which handles user code execution by validating inputs, submitting code in batches to Judge0, polling results, comparing stdout with expected outputs, and calculating overall memory and execution time. Every submission—whether accepted or wrong answer—is stored in the database, while fully correct submissions update the ProblemSolved table. On the frontend, the handleRun function sends code, language ID, and test cases to the server action, then displays results using the new SubmissionDetails and TestCaseTable components. Finally, the instructor demonstrates testing the feature, committing code to GitHub, and completing the problem-solving workflow.

27:02
Submission History: Fetch User-Specific Submissions & Build History Component
The instructor adds the complete submission history feature to the LeetCode-style Next.js application by fetching and displaying all submissions made by the current user for a specific problem. The process begins with creating a new server action named getAllSubmissionsByCurrentUserForProblem, which uses Prisma to query the Submission model filtered by problemId and userId retrieved through Clerk authentication. After fetching the user from the database, the server action returns all submissions, including fields like status, language, memory, time, and createdAt. On the frontend, a useEffect hook triggers the fetch function whenever the problem route changes, updating the local state with the submission history. A dedicated SubmissionHistory component is created to display each attempt with formatted memory usage, execution time, submission date, and accepted/failed status. The chapter concludes with testing, committing changes to GitHub, and preparing for the next module, which will introduce user profiles and playlist features.

08:36
Prisma Schema & Backend Endpoints for Creating Playlists and Adding Problems
the instructor introduces the complete Playlist Feature using Next.js, Prisma, API Route Handlers, and Clerk Authentication. The chapter begins by explaining how logged-in users can create custom playlists from the /problems page by adding a title and description. The instructor then designs the backend architecture by extending the Prisma schema with two new models: Playlist and ProblemInPlaylist, including relations to the User and Problem models. After defining fields such as UUID, name, description, userId, createdAt, and updatedAt, the instructor runs Prisma migrate and DB push to generate schema changes. Next, two essential API endpoints are created: one to create playlists and another to fetch all playlists for the logged-in user with included problem data. A third endpoint, addProblem, is built to insert problems into selected playlists using playlistId and problemId, ensuring ownership validation. This part concludes backend setup before moving to the UI implementation in the next chapter.

18:36
Create Playlist & Add Problems via Modal with Proper Logic Handling
In continuation of the previous video, the instructor builds the full UI integration for the Playlist Feature using Next.js, React, Zod, Prisma, and API Route Handlers. After completing the backend in the previous part, this chapter focuses on creating two essential client components: CreatePlaylistModal and AddToPlaylistModal. These components use React Hooks like useState, useEffect, and useForm (with ZodResolver) to manage form validation, modal state, and user interactions. The Create Playlist modal allows users to input a name and an optional description, validates it using Zod, and submits the data to the backend via a POST API call. The Add to Playlist modal fetches all existing playlists through a GET request, displays them conditionally, and enables users to add a problem to a specific playlist using an addProblem endpoint. The chapter also covers handling loading states, toast notifications, UI rendering, error debugging, and connecting both modals to the Problem Table page, completing the entire playlist creation and problem-assignment workflow.

21:52
Profile Page: Fetch User Info, Stats, Submissions & Playlists
the instructor completes the final and most rewarding part of the LeetCode Clone by building a fully functional Profile Page using Next.js, Prisma, PostgreSQL, Clerk Authentication, and Server Actions. The chapter begins by creating a dedicated server action, getCurrentUserData, which fetches all user-related information, including submissions, solved problems, and playlists, using Prisma’s relational queries. Next, the UI is structured into multiple reusable components: UserInfoCard, ProfileStats, SubmissionHistory, SolvedProblems, and PlaylistSection. These components display key user details such as avatar, email, role, success rate, total submissions, playlist count, and complete submission history. Tailwind-powered layouts and ShadCN UI components ensure a clean, responsive interface in both light and dark modes. After assembling all components, the instructor demonstrates the final Git workflow—creating a branch, committing, pushing, and merging via a GitHub Pull Request. This chapter marks the successful completion of the entire Next.js–Prisma LeetCode Clone project, showcasing modern full-stack development practices.

23. V0 clone:

Introduction and Demo of V0-Clone Project
Project Setup - Installing Nextjs and Initializing Shadcn/ui
Database Setup Made Easy: Prisma Initialization & Dockerized DB for Next.js
Authentication Using Clerk - Clerk Setup, GitHub and Google Oauth & Custom Auth
Create a User-Friendly Header That Changes When Users Sign In
Building Your App’s Entry Point :Modern Home Page with Templates & Project Form
Understanding and Implementing Background Jobs with Inngest
AI Background Jobs With Inngest
Hands-On with E2B Sandboxes - Dockerize and Run Next.js Apps
Inngest Agents Kit - Adding File, Terminal & API Tools to Your AI Agent
Build the Projects Backend with Prisma, Server Actions, and Background Jobs
Add Project List and Project View Components with Dynamic Project Route Segment
Build the Messages Backend with Prisma, Background Jobs with User and Assistant
Build File Explorer & Syntax Highlighting with Sandbox Integration on Iframe
AI Agents Setup - Title Generation & Response Summarization
Pricing Page with Payment Integration and Rate Limiting for Free and Pro Users
AI Agent Memory Setup - Long-Term Persistence with Inngest

Introduction and Demo of V0-Clone Project
In this introduction chapter, the instructor showcases the full demo of the upcoming V0 Clone project built using modern tools like Next.js, Clerk Authentication, Clerk Billing, Prisma, PostgreSQL, Tailwind CSS, TanStack Query, and Google Gemini AI. The walkthrough begins with the landing page, sign-in/sign-up flow, and seamless Google OAuth login. Users can generate AI-powered projects using prompts, which trigger background tasks powered by Ingest and Ingest Agent Kit. These background jobs handle steps like file creation, code generation, title generation, and database updates while running inside an E2B sandbox environment. The demo highlights auto-generated applications, interactive UI features, dark/light mode toggling, to-do management, and subscription upgrades using Clerk Billing with test payments. The project dashboard shows available credits and all generated apps. This chapter also outlines the full tech stack, emphasizing AI-generated code, server-side state, rate limiting, and background processing, preparing learners to build the complete V0 Clone from scratch.

05:29
Project Setup - Installing Nextjs and Initializing Shadcn/ui
The instructor walks through the complete setup of a Next.js project from scratch, ensuring everything is ready for the upcoming V0 Clone build. The chapter begins with creating a new Next.js application using the official installation command, configuring options like Tailwind CSS, App Router, and a source directory. Once the base setup is complete, the next step is integrating Sedition UI, a modern UI component library. Using commands like npx sedition init and npx sedition add, all UI components are installed, generating folders such as components, lib, and hooks. After confirming that Tailwind CSS and Sedition UI components work by rendering a simple test button, the instructor proceeds to initialize version control. A new GitHub repository is created directly from VS Code, the project is committed, and the branch is published. By the end of this chapter, the full environment—Next.js, Tailwind, Sedition UI, and GitHub—is successfully configured and ready for development.

05:45
Database Setup Made Easy: Prisma Initialization & Dockerized DB for Next.js
The instructor sets up the complete database environment for the project using Prisma, PostgreSQL, and Docker. The chapter begins by installing Prisma and the Prisma Client, followed by initializing Prisma with the npx prisma init command, which generates the essential schema.prisma file and environment configuration. Next, a fully functional Docker Compose setup is created to run PostgreSQL inside a container, defining service details like postgres user, password, database name, and port mapping. The environment variable DATABASE_URL is configured to connect Prisma to the Docker-hosted Postgres instance. After confirming that the container is running, a test User model is added to the Prisma schema, and a migration is executed using npx prisma migrate dev, ensuring everything is synced correctly. The instructor also demonstrates using Prisma Studio to visually inspect the database. Finally, a new GitHub branch is created, pushed, and merged, completing the database setup workflow.

12:26
Authentication Using Clerk - Clerk Setup, GitHub and Google Oauth & Custom Auth
This section explains how to integrate authentication into a Next.js application using Clerk, along with proper database setup using Prisma and PostgreSQL. It begins with creating a db.js file and initializing the Prisma Client for smooth database communication. After installing the Clerk Next.js SDK, the required publishable and secret API keys are added to the .env file. The middleware.js is then configured using Clerk middleware and route matchers to manage redirection and protect private routes. A custom ClerkProvider is wrapped inside the layout.js file to enable authentication globally. Custom Sign In and Sign Up pages are built with Tailwind CSS for UI styling. A User schema is added to the Prisma model, followed by running Prisma Migrate. Server actions such as onboardUser and getCurrentUser are implemented to store and fetch authenticated user data using upsert queries. Finally, everything is tested, verified through Prisma Studio, and pushed to GitHub.

28:44
Create a User-Friendly Header That Changes When Users Sign In
The instructor builds a responsive Header UI in a Next.js application, showcasing different views for authenticated and unauthenticated users using Clerk. The chapter begins by customizing the global theme through Tailwind CSS variables copied from TweakCN, enabling a clean Supabase-style design. A new Navbar component is created inside the Home module and added to the root layout.js. The UI includes a logo, navigation structure, and responsive styling with classes like flex, justify-between, invert, and fixed positioning. Authentication functionality is implemented using Clerk’s SignInButton, SignUpButton, SignedIn, SignedOut, and UserButton, enabling seamless login/logout states. The chapter also covers adding ThemeProvider from shadcn/ui to enable dark mode and light mode switching across the entire app. After implementing and testing the header, the updates are committed using Git, pushed to a new branch, and merged via GitHub Pull Request, completing the header setup workflow.

13:02
Building Your App’s Entry Point :Modern Home Page with Templates & Project Form
The instructor builds a complete Next.js homepage interface featuring a clean hero section, responsive layout, and a fully interactive Project Form. The chapter begins by structuring the UI using Tailwind CSS utilities like flex, grid, and responsive typography. A centered hero section is created using Next/Image for an optimized logo, followed by a heading and descriptive text. The core feature is a dynamic ProjectForm built with React Hook Form, Zod Schema Validation, and TextArea Auto-Resize to handle user input efficiently. A predefined list of project templates is displayed in a responsive grid, allowing users to auto-fill prompts using onClick handlers. The form includes keyboard shortcuts, focus states, and a modern submit button built with shadcn/ui components such as Button, FormField, and Toaster. Finally, the chapter covers committing changes, creating a GitHub Pull Request, merging it into the main branch, and syncing the project, completing the homepage UI setup.

20:08
Understanding and Implementing Background Jobs with Inngest
This introduces the concept of background jobs in Next.js, explaining why long-running tasks like sending emails, processing large files, or generating invoices should not run inside the main request–response cycle. Instead, these tasks are offloaded using modern background job services. The chapter explores popular tools such as BullMQ, Redis Queue, Sidekiq, Celery, and Temporal, and then explains why Ingest is the best choice. Ingest provides a serverless, event-driven architecture, high scalability, local development support, and an easy setup. The instructor demonstrates how to install Ingest, run the Ingest Dev Server, create an Ingest Client, configure the /api/ingest route, and register a function. A Hello World background job is implemented using Ingest.createFunction, showcasing how events trigger asynchronous processing without slowing down the UI. Finally, the chapter ends with pushing changes to GitHub, creating a Pull Request, reviewing it, and merging it—successfully completing the background job setup.

21:47
AI Background Jobs With Inngest
The instructor introduces AI Jobs and demonstrates how to run AI-driven workflows in the background using Ingest Agent Kit. The chapter begins by explaining how AI Jobs extend traditional background jobs by allowing automated tasks such as code generation, summarization, and AI-powered automation. A clear flow is shown where a user request triggers an API, which then invokes an AI agent that interacts with an AI model—in this case, Gemini 2.5 Flash. The setup includes selecting an AI provider like GPT, Claude, Gemini, or Grok, and configuring the Gemini API Key in the project’s environment variables. The instructor installs @ingest/agent-kit, imports CreateAgent and Gemini, and builds a simple Hello Agent with a system prompt and model configuration. The agent is invoked through a server action, since client components cannot directly trigger background jobs. After successful execution using the Ingest Dev Server, the response appears instantly in the dashboard. The chapter ends with committing changes via Git, creating a GitHub Pull Request, and merging it.

20:34
Hands-On with E2B Sandboxes - Dockerize and Run Next.js Apps
The instructor sets up an E2B Sandbox to run and preview a Next.js application inside a secure, isolated Docker environment. The chapter begins with creating an account on E2B.dev, installing the E2B Code Interpreter, and configuring the E2B CLI for authentication. Next, a reusable Docker template is created under a dedicated sandbox-templates/nextjs directory with essential files like e2b.Dockerfile and compile_page.sh, enabling automated setup of a Docker-based Next.js app. The template is built using e2b template build, published with e2b template publish, and made publicly accessible inside the E2B dashboard. The instructor then integrates Ingest by adding the E2B API Key to the environment file and writing functions that create a sandbox, fetch the sandboxId, and generate a live sandbox URL running on port 3000. Using Ingest Dev Server, the Next.js app is previewed remotely through a temporary URL. Finally, the chapter concludes with committing changes, creating a GitHub Pull Request, merging it, and syncing the project.

25:34
Inngest Agents Kit - Adding File, Terminal & API Tools to Your AI Agent
In this chapter, you learn how to upgrade your AI agent by integrating powerful tools, connecting them into a functional agent network, and enhancing its overall workflow. The tutorial explains how to build three essential tools: a terminal tool for executing sandbox commands, a file create/update tool, and a read file tool, all using E2B sandbox, Zod validation, and Ingest Agent Kit. You also restructure your project by renaming functions to codeAgent, configuring routes, and creating a robust network with max iterations to allow retries and automated task handling. A detailed system prompt is added to improve the LLM’s performance, followed by implementing lifecycle hooks to detect the final task summary and determine when the agent should stop. Finally, the chapter demonstrates testing the agent, generating a sample landing page, and managing branches via GitHub, ensuring a smooth backend setup for the upcoming UI work.

34:59
Build the Projects Backend with Prisma, Server Actions, and Background Jobs
In this chapter, you learn how to upgrade your AI agent by integrating powerful Ingest Agent Kit tools and connecting them through a dynamic agent network. The video walks through adding three essential tools: a terminal tool to run commands inside a sandbox environment, a create/update file tool, and a read file tool, all structured with Zod schemas. You also enhance your agent by renaming it to a code agent, updating the API routes, and implementing a robust system prompt for better context handling. The chapter explains how to structure handlers, manage stdout/stderr buffers, connect to the E2B sandbox, and use network.maxIterations for retry logic. A custom lifecycle hook helps detect the final task summary, ensuring clean task completion. Finally, the instructor tests the workflow end-to-end, showing live file generation and a functioning AI-powered coding agent.



38:27
Add Project List and Project View Components with Dynamic Project Route Segment
In this chapter, the instructor builds the complete Project UI in Next.js, bringing database features to the frontend with clean, responsive components. The process starts by creating a Project List component that fetches user projects using a custom useGetProjects hook, displays loading states with Skeleton UI, and renders both desktop grid view and mobile carousel view. Next, a dynamic route is added using /projects/[projectId], where a dedicated ProjectView component is built. Inside it, the instructor configures a flexible layout using Resizable Panel Group, Tabs, and client-side logic. The chapter also introduces a polished Project Header featuring a dropdown menu, theme switching with useTheme, navigation options, and project metadata fetched through useGetProjectById. The UI fully supports light mode and dark mode. Finally, all changes are committed, pushed to GitHub, and merged via a Pull Request. With this, the project interface becomes interactive, responsive, and production-ready.

20:30
Build the Messages Backend with Prisma, Background Jobs with User and Assistant
In this chapter, the instructor builds the complete Project UI in Next.js, bringing database features to the frontend with clean, responsive components. The process starts by creating a Project List component that fetches user projects using a custom useGetProjects hook, displays loading states with Skeleton UI, and renders both desktop grid view and mobile carousel view. Next, a dynamic route is added using /projects/[projectId], where a dedicated ProjectView component is built. Inside it, the instructor configures a flexible layout using Resizable Panel Group, Tabs, and client-side logic. The chapter also introduces a polished Project Header featuring a dropdown menu, theme switching with useTheme, navigation options, and project metadata fetched through useGetProjectById. The UI fully supports light mode and dark mode. Finally, all changes are committed, pushed to GitHub, and merged via a Pull Request. With this, the project interface becomes interactive, responsive, and production-ready.

49:41
Build File Explorer & Syntax Highlighting with Sandbox Integration on Iframe
In this chapter, the instructor builds the complete Project UI in Next.js, transforming backend logic into a fully interactive interface. The lesson begins by creating a ProjectList component that fetches user projects using the useGetProjects hook, shows loading states with Skeleton UI, and supports both desktop grid layouts and mobile carousel views. A dynamic route using /projects/[projectId] is implemented to display individual project details through a dedicated ProjectView component. This view uses Resizable Panel Group, preparing space for upcoming Code View, File View, and Demo View tabs. Additionally, a feature-rich ProjectHeader is created with a dropdown menu, theme switching via useTheme, navigation shortcuts, and project data fetched through useGetProjectById. The UI supports responsive behavior, light mode and dark mode, and clean component structuring. The chapter ends with code commits, branching, and merging via GitHub Pull Request, making the overall interface polished, dynamic, and production-ready.

52:31
AI Agents Setup - Title Generation & Response Summarization
In this chapter, you learn how to enhance your multi-agent workflow by creating two new agents: the Fragment Title Generator and the Response Generator. The chapter walks through implementing these agents inside functions.js, defining their system prompts, and configuring them with the Gemini 2.5 Flash model for efficient processing. You set up the title generator to create short, meaningful titles and the response generator to produce clean, markdown-formatted summaries of what the app builds. The tutorial also covers integrating the AI SDK Response component for beautifully rendered assistant messages inside the UI. After configuring logic to handle array outputs, mapping content, and updating the assistant message component, you test everything by generating a calculator app. The UI displays a polished, user-friendly response with formatted code and descriptions. Finally, the chapter concludes with Git workflow steps—creating a branch, committing changes, syncing, and merging—marking the successful completion.

16:52
Pricing Page with Payment Integration and Rate Limiting for Free and Pro Users
In this chapter, we implement Clerk Billing and rate limiting within a Next.js application to create a scalable, monetized platform. The tutorial guides you through configuring subscription plans (Free vs. Pro) in the Clerk dashboard and enabling the payment gateway. We modify the Prisma schema to introduce a usage model that tracks user points and expiration dates. Using the rate-limiter-flexible library, we establish logic to restrict API requests based on the user's tier, allotting specific credits for AI code generation. The process involves building a server action to securely consume credits, creating a responsive pricing page with Clerk components, and developing a custom React hook to visualize real-time credit usage on the frontend, ensuring users are prompted to upgrade when their API limits are reached.

48:55
AI Agent Memory Setup - Long-Term Persistence with Inngest
In this final chapter, we implement Ingest Agent Memory to enhance the AI agent workflow by solving the stateless nature of serverless functions. By default, Ingest functions reset after execution, causing the agent to lose track of previous contexts, files, and summaries. We address this by querying the database for conversation history via Prisma and formatting these previous messages for the LLM. Using the createState API from the Agent Kit, we inject this history into the agent's execution context, allowing it to "remember" past interactions. This enables iterative updates—such as adding features to an existing Next.js application—rather than regenerating projects from scratch, effectively transforming the V0 clone into a context-aware, long-term collaborator.

24. T3 chat clone:

Introduction and Demo of T3-Chat Project
Project Setup - Installing Nextjs and Initializing Shadcn/ui
Database Setup Made Easy: Prisma Initialization & Dockerized DB for Next.js
Authentication Using Better-Auth ,GitHub & Custom Auth Pages
Designing an Interactive Chat Interface: Sidebar, Header & Theming
Implementing Model Selection: Openrouter, Fetching Models, and UI Setup
End-to-End Chat Setup: Backend Schema, API, and UI Hooks
Building Chat Sidebar: Data Fetch, Zustand Store, and Component Design
Active Chat Sidebar Items: Dynamic Page & Messaging Components
Advanced Chat API Development: Streaming, Message Conversion, and Persistence
Building Chat Page UI: Dynamic Message Rendering and Auto Stream Trigger
Finalizing the Chat App: Auto-Trigger Stream Response & Project Wrap-Up

Introduction and Demo of T3-Chat Project
This video demonstrates the development of a comprehensive T3 chat clone featuring a robust tech stack centered around Next.js, Prisma, and PostgreSQL. The application implements secure GitHub authentication using Better Auth and offers a polished user interface built with Tailwind CSS and Shadcn UI, supporting fully functional dark and light modes. A standout feature is the integration of OpenRouter, which grants users access to over 51 free AI models—including OpenAI GPT—complete with detailed capabilities and pricing metadata. The demo highlights real-time text streaming powered by the AI SDK and AI SDK UI, enabling instant responses for queries like TypeScript guides, alongside seamless chat history management and deletion features.

04:10
Project Setup - Installing Nextjs and Initializing Shadcn/ui
In this opening chapter of the T3 chat clone series, we establish the essential groundwork for a modern web application. The tutorial guides you through initializing a Next.js project using the App Router and Tailwind CSS to ensure a responsive and scalable architecture. We then integrate shadcn/ui, a powerful component library, by running initialization commands and installing the complete set of UI elements to streamline future development. After cleaning up the default boilerplate code, we verify the installation by rendering a responsive "Hello World" page featuring a styled Button component. The session concludes by setting up version control with Git and publishing the repository to GitHub, ensuring the project is ready for upcoming integrations like authentication and database management.

08:29
Database Setup Made Easy: Prisma Initialization & Dockerized DB for Next.js
In this chapter of the T3 chat clone series, we establish a robust database layer using Prisma and PostgreSQL within a Docker environment. The tutorial guides you through installing the Prisma Client, initializing the project, and configuring a docker-compose.yml file to efficiently spin up a local PostgreSQL container. We securely connect the application by updating environment variables and creating a reusable connection pool utility to manage database instances during development. To verify the configuration, the session demonstrates defining a test schema model and executing a database migration using the Prisma CLI. This foundational setup ensures a scalable architecture for storing future chat history and user data, preparing the project for the upcoming authentication integration using Better Auth.

12:57
Authentication Using Better-Auth ,GitHub & Custom Auth Pages
In Chapter 3, we implement robust authentication for the T3 chat clone using Better Auth, a modern, framework-agnostic library designed for performance. The tutorial begins by installing the package and configuring environment variables to support GitHub OAuth. We integrate the authentication layer with Prisma and PostgreSQL, running database migrations via the Better Auth CLI to automatically generate the necessary schema tables for users and sessions. The process involves establishing a Next.js API route to handle server-side requests and creating a client instance for frontend interactions. We then design a custom sign-in page using shadcn/ui components, applying a custom theme via Tweak CN. Finally, we secure the application by adding a protected layout that handles redirects and implementing a User Button component to display profile data and manage logout functionality.

34:26
Designing an Interactive Chat Interface: Sidebar, Header & Theming
In Chapter 4, we establish a professional UI layout for the T3 chat application, transforming the project into a polished product. The tutorial guides you through organizing the project using Next.js route groups to implement a persistent Sidebar for navigation and chat history management. We secure the application by creating a protected route within the root layout.jsx, ensuring that only authenticated sessions can access the main interface. We integrate shadcn/ui components to construct a responsive Header featuring a Dark Mode toggle powered by next-themes and a ThemeProvider. Finally, we design an engaging homepage with a personalized User Button, interactive Chat Welcome Tabs for quick prompts, and a functional Chat Message Form utilizing a Textarea with event handlers for seamless user input.

49:38
Implementing Model Selection: Openrouter, Fetching Models, and UI Setup
In this chapter, we enhance the application by implementing a dynamic model selector, enabling users to switch between various LLMs via the OpenRouter API. The tutorial guides you through obtaining an API key and constructing a secure Next.js API route to fetch model data, specifically filtering for free options based on pricing parameters. We integrate TanStack Query to manage asynchronous data fetching efficiently and create a custom React hook to handle the state. On the frontend, we build a polished React component using shadcn/ui elements, including a Popover and ScrollArea, featuring a search function that allows users to filter models by name or ID. This implementation displays critical metadata such as context length and architecture, empowering users to choose their preferred AI model for a personalized chat experience.

36:01
End-to-End Chat Setup: Backend Schema, API, and UI Hooks
In this chapter, we activate the application's core functionality by implementing the backend logic for chat initialization. We begin by extending the Prisma schema to include Chat and Message models, defining relationships with the User entity, and executing a database migration to update PostgreSQL. Next, we create a secure Server Action that validates authentication, generates chat titles from user input, and creates records using the Prisma Client. On the client side, we develop a custom React hook utilizing TanStack Query and useMutation to handle the asynchronous data flow. We integrate this logic into the ChatMessageForm, adding loading states and toast notifications via Sonner for user feedback. Finally, we implement Next.js navigation to redirect users to dynamic chat pages upon submission, effectively connecting the UI to the database.

28:40
Building Chat Sidebar: Data Fetch, Zustand Store, and Component Design
In this chapter, we build a dynamic Chat Sidebar to efficiently manage user conversations within the Next.js application. We begin by creating a Server Action that queries PostgreSQL via Prisma to fetch chat history, sorting results by the most recent activity. To handle global state, such as the active chat ID, we integrate Zustand. The tutorial demonstrates how to group chats chronologically (e.g., Today, Yesterday) and implement a client-side search filter for quick access. Furthermore, we develop a chat deletion feature using TanStack Query mutations to handle data updates and cache invalidation seamlessly. Finally, we enhance the UI using shadcn/ui components for delete confirmation modals and establish navigation using Next.js Link, resulting in a fully functional and interactive sidebar.

34:12
Active Chat Sidebar Items: Dynamic Page & Messaging Components
In this chapter, we enhance the application by implementing active chat states and dynamic routing within the Next.js sidebar. We begin by creating a specific chat ID page and a robust Server Action to fetch conversation details securely using Prisma and PostgreSQL. To manage global state efficiently, we update the Zustand store to track the activeChatId and synchronize messages across components. A custom React hook utilizing TanStack Query is developed to fetch data on the client side, integrated through a new ActiveChatLoader component. The tutorial also covers refining the ChatSidebar UI to visually highlight the selected conversation and optimizing navigation by resolving event propagation issues within Next.js Link components. This ensures that clicking a history item correctly redirects the user to the specific chat interface while maintaining optimistic UI updates.

13:43
Advanced Chat API Development: Streaming, Message Conversion, and Persistence
In this chapter, we integrate the powerful AI SDK to establish a robust backend for the T3 chat application, enabling intelligent interactions via the OpenRouter API. The tutorial begins with an introduction to the AI SDK, followed by installing essential packages like @ai-sdk/react and @ai-sdk/openrouter. We securely configure the OpenRouter API key within environment variables and create a dedicated OpenRouter Provider to manage model connections. The core of this implementation is a Next.js API Route that handles POST requests, fetching conversation history from Prisma to provide context to the LLM. We implement message normalization to ensure compatibility with the model's format and utilize streamText to deliver real-time responses. Additionally, the backend logic saves both user prompts and AI-generated replies to the PostgreSQL database, ensuring persistent chat history.

26:55
Building Chat Page UI: Dynamic Message Rendering and Auto Stream Trigger
In this chapter, we implement the crucial Message With Form component, seamlessly connecting the user interface to the backend. We integrate the AI SDK's useChat hook to manage chat state and handle real-time message streaming. The tutorial guides you through setting up Optimistic UI updates, ensuring instant feedback by displaying user messages before the server confirms them. We create a Prompt Input component featuring a dynamic Textarea and a Model Selector, allowing users to choose their preferred LLM. Additionally, we implement a Thinking Indicator using the isThinking state from the SDK to enhance user experience during response generation. Finally, we configure auto-triggering for initial messages, enabling the chat to start processing immediately upon page load, and ensure robust error handling with Sonner toast notifications.

44:14
Finalizing the Chat App: Auto-Trigger Stream Response & Project Wrap-Up
In this final chapter, we complete the T3 chat application by implementing auto-trigger functionality for AI responses and streamlining the chat experience. The tutorial guides you through using React hooks like useEffect and useRef to detect newly created chats and automatically initiate the AI response stream via the AI SDK. We handle edge cases such as hydration issues in Next.js by suppressing warnings and ensuring seamless client-side rendering. Additionally, the video demonstrates how to parse and display complex message structures, including reasoning steps from models like OpenAI o1, directly within the UI. By refining the MessageWithForm component and managing state with Zustand, we achieve a polished, responsive interface that supports both light and dark modes, concluding the project with a fully functional, production-ready AI chat application.

25. Supabase masterclass:
Introduction and Demo of Project using Supabase
Installing Nextjs and Initializing Shadcn/ui
Next.js + Supabase: The Ultimate Developer Onboarding Flow
User Authentication Mastery: From Sign-Up to Logout in Next.js
Supabase in Action: Build a Secure Blog with Storage, RLS & Editor.js
Supabase Secure Routes: Fetch, Display, and Debug Blog Content

Introduction and Demo of Project using Supabase
In this comprehensive Supabase masterclass, we explore how to seamlessly integrate a powerful backend into a Next.js application by building a dynamic blog platform. This project covers essential full-stack capabilities, beginning with secure authentication to manage user sessions effectively. We will implement complete CRUD operations, enabling users to create, fetch, and update blog posts in real-time. A standout feature is the custom Notion-like editor, which supports rich text and facilitates seamless image uploads directly to Supabase storage buckets. Throughout the series, you will learn to leverage PostgreSQL features provided by Supabase to handle data and media efficiently. This tutorial is designed to demonstrate the ease of combining Next.js with Supabase to solve complex backend challenges, resulting in a fully functional and scalable web application.

03:18
Installing Nextjs and Initializing Shadcn/ui
In this inaugural chapter of the Supabase and Next.js masterclass, we establish the foundational structure for a full-stack blog application. The tutorial guides you through initializing a new Next.js project using the App Router and Tailwind CSS, ensuring a modern development environment. We then integrate shadcn/ui to streamline the design process, initializing the library with a Zinc base color and installing the complete suite of UI components via the CLI. To verify the installation, we modify the page.jsx file by applying Flexbox classes and rendering a sample Button component. The session concludes by setting up version control, initializing a Git repository, and publishing the project branch to GitHub, creating a solid baseline for the upcoming backend integrations.

06:08
Next.js + Supabase: The Ultimate Developer Onboarding Flow
In this chapter, we delve into integrating Supabase as the backend for our Next.js application, effectively replacing traditional services like Firebase. We start by defining Supabase as an open-source Backend-as-a-Service (BaaS) built on PostgreSQL, offering features such as real-time databases, authentication, storage, and auto-generated APIs. The tutorial guides you through creating a new Supabase organization and project via the dashboard, securing the necessary API URL and anon key. We then configure environment variables in the Next.js project and install the @supabase/ssr package to enable server-side rendering capabilities. Finally, we establish reusable client and server utilities to manage database connections and authentication cookies efficiently, setting a robust foundation for future features like user authentication and data management.

22:24
User Authentication Mastery: From Sign-Up to Logout in Next.js
In this chapter, we delve into integrating authentication into the Supabase and Next.js application, enabling users to sign up, log in, and log out securely. We begin by constructing a custom authentication UI using shadcn/ui components, including forms for email and password input. The tutorial demonstrates how to implement sign-up functionality using the supabase.auth.signUp method, handling user registration and sending email confirmation links. We also create a dedicated API route for logging out, utilizing the supabase.auth.signOut function. To secure protected routes, we develop a custom middleware that checks for active user sessions using supabase.auth.getUser and redirects unauthenticated users to the login page. This comprehensive guide ensures a robust and user-friendly authentication system, laying the groundwork for secure data access in future chapters.

33:53
Supabase in Action: Build a Secure Blog with Storage, RLS & Editor.js
In Chapter 4, we enhance the Supabase backend by creating a PostgreSQL table named "posts" to manage blog content. We secure this data by implementing Row Level Security (RLS) policies, ensuring users can only create, update, and delete their own posts while allowing public read access. Additionally, we configure a Supabase Storage Bucket for handling image uploads with appropriate security rules. The tutorial then focuses on integrating Editor.js, a block-style editor, to provide a rich content creation experience within the Next.js application. We build a responsive editor page featuring a title input, an excerpt field, and the editor instance itself, complete with a custom toolbar for saving and publishing posts. Finally, we implement dark mode support using next-themes and ensure the editor's state persists correctly by interacting with the Supabase database via client-side API calls.

46:27
Supabase Secure Routes: Fetch, Display, and Debug Blog Content
In the final chapter of this Supabase masterclass, we complete the blog application by implementing essential frontend features and securing backend routes. The tutorial focuses on creating a dynamic homepage that fetches and displays a list of blog posts tailored to the authenticated user, utilizing Supabase's powerful querying capabilities. We ensure security by implementing protected routes that redirect unauthenticated users to the login page. Additionally, we develop a detailed blog post page that allows users to view and edit their content using the integrated Editor.js. The chapter covers handling hydration issues in Next.js, optimizing performance with React hooks, and enhancing the user interface with Tailwind CSS for a polished, responsive design. This concludes the series, providing a solid foundation for building scalable applications with Next.js and Supabase.

26. convex masterclass

Introduction and Project Demo
Convex Quickstart: Next.js + shadcn/ui Setup in Minutes
Why Convex? Master the Future of Realtime Full-Stack Development
User-Ready Convex: Authentication + Profile Components in One Go
Convex in Action: Schema, Functions, and UI for a Complete Todo App

Introduction and Project Demo
In the upcoming chapters, we will explore the capabilities of Convex by building a full-stack to-do list application using TypeScript for an enhanced developer experience. This project serves as a practical demonstration of Convex's real-time features, showcasing instantaneous updates and reactive data handling. We will implement robust authentication powered by Convex, allowing users to log in securely and manage their tasks seamlessly. The application will feature essential functionalities such as adding, deleting, and marking tasks as complete, all synchronized in real-time. By the end of this series, you will have a solid understanding of how to integrate Convex into your workflow to create responsive and scalable applications efficiently.

01:30
Convex Quickstart: Next.js + shadcn/ui Setup in Minutes
In this first chapter of the Convex masterclass, we lay the groundwork for building a full-stack to-do list application with real-time capabilities. The tutorial guides you through initializing a Next.js project using TypeScript and Tailwind CSS, ensuring a robust and type-safe development environment. We then integrate shadcn/ui, initializing it with a neutral color scheme and installing all necessary UI components via the CLI. To enhance the visual appeal, we apply a custom theme from tweakcn, updating the global CSS to reflect a unique color palette. The session concludes by setting up version control, initializing a Git repository, and pushing the project to GitHub, establishing a solid foundation for the upcoming backend integration with Convex.

07:09
Why Convex? Master the Future of Realtime Full-Stack Development
In Chapter 2, we delve into setting up Convex as the backend for our Next.js application, a crucial step for enabling reactive data handling. We define Convex as a modern, developer-friendly platform that replaces traditional backend setups, offering features like real-time updates, authentication, and file storage out of the box. The tutorial guides you through creating a Convex project via the dashboard and initializing it within your Next.js app using the CLI. We explore the concept of a reactive database, where changes on the server automatically propagate to the client without manual polling, ensuring a seamless user experience. By the end of this chapter, you will have successfully integrated Convex, verified the setup, and prepared your environment for building the core functionalities of the to-do list application.

14:30
User-Ready Convex: Authentication + Profile Components in One Go
In this chapter, we implement authentication in our Convex and Next.js application using GitHub OAuth. We begin by configuring GitHub OAuth credentials within the Convex dashboard and setting up the necessary environment variables. The tutorial guides you through creating a custom authentication UI with shadcn/ui, building sign-up and login pages, and handling form submissions. We then integrate the @convex-dev/auth library to manage authentication flows, including sign-in and sign-out functionality. To secure our application, we implement Next.js middleware that checks for authentication status and redirects unauthenticated users to the login page. Finally, we create a user details component to display the logged-in user's information, completing the authentication setup. This chapter ensures that our application has a robust and secure user management system.

30:17
Convex in Action: Schema, Functions, and UI for a Complete Todo App
In this final chapter of the Convex masterclass, we enhance our to-do list application by implementing full CRUD functionality with real-time updates. The tutorial guides you through creating a Convex schema for tasks, utilizing TypeScript for type safety and validation via convex/values. We define backend mutations for creating, updating, and deleting tasks, leveraging Convex's reactive nature to synchronize data instantly across clients without manual polling. On the frontend, we build a responsive UI using React and shadcn/ui, featuring dynamic checkboxes and delete buttons that trigger these mutations. The session demonstrates how to manage state efficiently, ensuring that user interactions, such as adding or completing a task, are reflected immediately. By merging the final code changes via GitHub, we conclude the series with a fully functional, real-time application.

27. Next-js-16 masterclass

Introduction to Next.js 16 which is now available with major improvements
Deep Dive into cacheComponents: The Core of Next.js 16’s PPR Model
Next.js DevTools MCP - Enabling AI Agents to Understand Your App
Next.js Proxy Explained - Smarter Network Boundaries and Request Control

Introduction to Next.js 16 which is now available with major improvements
In this chapter, we explore the major architectural updates introduced in Next.js 16, which officially launched on October 21. A key highlight is the new Cache Component, powered by Partial Pre-rendering (PPR), which intelligently blends static and dynamic content delivery for optimal performance. The release also introduces enhanced developer tooling, including Model Context Protocol (MCP) integration for smarter debugging and a clearer network boundary definition by renaming Middleware to Proxy. Additionally, Next.js 16 offers improved logging, Turbopack support, and new React features like View Transitions and useActionState. To upgrade existing projects, developers can utilize the next-codemod tool, ensuring a seamless transition to the latest version and unlocking these powerful new capabilities.

11:15
Deep Dive into cacheComponents: The Core of Next.js 16’s PPR Model
In this chapter, we delve into the new Cache Component introduced in Next.js 16, focusing on how Partial Pre-rendering (PPR) revolutionizes application performance by combining static and dynamic rendering. The tutorial demonstrates implementing caching using the use cache directive and exploring utilities like cacheLife and cacheTag to manage data freshness effectively. We address the breaking change where dynamic content is uncached by default, requiring developers to explicitly wrap components in Suspense boundaries to enable PPR. Additionally, we cover on-demand revalidation using revalidateTag to ensure users see real-time updates, such as newly created courses appearing instantly without manual reloading. By leveraging these features, developers can build highly optimized, responsive applications that balance speed and data accuracy.

32:37
Next.js DevTools MCP - Enabling AI Agents to Understand Your App
In this chapter, we explore the integration of the Model Context Protocol (MCP), a new feature in Next.js 16 that revolutionizes how AI agents interact with development environments. We begin by defining MCP as an open standard developed by Anthropic, acting as a universal connector between AI applications like Claude or ChatGPT and external systems such as databases, local files, and tools. The tutorial demonstrates how to enable the Next.js MCP server within your project, allowing coding assistants to access real-time application internals, including logs, metadata, and server actions. We guide you through installing the @content-collections/next-dev-mcp package and configuring your MCP client (e.g., Cursor or VS Code) to leverage these capabilities. By connecting your AI agent directly to your Next.js development server, you empower it with context-aware debugging and code generation, significantly enhancing the developer experience.

14:20
Next.js Proxy Explained - Smarter Network Boundaries and Request Control
In this final chapter, we explore the transition from Middleware to Proxy in Next.js 16, a significant architectural shift designed to clarify network boundaries. The traditional middleware.ts file convention is deprecated and replaced by proxy.ts, which runs on the Node.js runtime rather than the lightweight Edge runtime. This change allows developers to access the full range of Node.js APIs for tasks like request redirection, header modification, and cookie management, while avoiding heavy operations like database calls or session management within the proxy layer. We discuss best practices, such as utilizing CDNs for optimized redirects and rewrites, and emphasize that the proxy is strictly for request handling before completion, ensuring a more predictable and performant application flow.












