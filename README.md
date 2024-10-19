# Task Management App

* A simple and efficient task management application built using React and Next.js. The app allows users to add, edit, delete, mark tasks as completed, and sort them based on priority, ensuring better organization and productivity. The app is styled with basic HTML/CSS and is responsive to different screen sizes. 

## Features: 

* Add Tasks: Create new tasks with a title, description, and priority level (high, medium, low).
* Edit Tasks: Modify existing tasks, including their title, description, and priority.
* Delete Tasks: Remove tasks from the list easily.
* Mark Tasks as Completed: Toggle tasks between completed and pending states.
* Sort Tasks: Dynamically sort tasks by priority, displaying high-priority tasks at the top.
* Server-Side Rendering (SSR): Load the initial task list using getServerSideProps in Next.js.
* Responsive Design: User-friendly interface with color-coded priorities and a responsive layout.

## Bonus Features: 

* Local Storage Integration: Persist tasks between page reloads.
* Search Functionality: Filter tasks by title or description using a search bar.

## Approach to Sorting Tasks by Priority

* Tasks are sorted based on their priority levels using a simple data structure (an array). Priority levels are assigned a numerical value:

*  High: 0
*  Medium: 1
*  Low: 2

*  The sorting algorithm ensures that tasks are ordered by these values, with high-priority tasks appearing at the top. Additionally, tasks are grouped based on their completed status, so completed tasks are displayed at the bottom of the list regardless of their priority.

## Follow these instructions to set up the project on your local machine.

# Installation
* Clone the Repository:

git clone https://github.com/Madhur1707/Task-Management-App.git

cd task-management-app

# Install Dependencies:

* Using npm:
npm install

# Running the App
* Start the Development Server:

npm run dev

Open your browser and navigate to:
http://localhost:3000
