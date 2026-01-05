Employee Management Dashboard
📌 Project Overview

This is a client-side Employee Management Dashboard built using Next.js (App Router) and React.
The application allows users to:

Add new employees

Edit existing employee details

Upload and preview employee profile images

Enable/disable employee active status

Manage employee data using a modal-based form

Validate form inputs with clear error messages

The project focuses on clean UI, modular component design, and scalable form handling, simulating a real-world CRUD dashboard.

🛠️ Tech Stack Used

Next.js (App Router) – React framework for modern web apps

React.js – UI development

Bootstrap 5 – Styling and responsive layout

JavaScript (ES6+)

FileReader API – For image upload preview

🚀 Steps to Run the Project Locally
1️⃣ Clone the Repository
git clone <your-repository-url>
cd <project-folder>

2️⃣ Install Dependencies
npm install

3️⃣ Run the Development Server
npm run dev

4️⃣ Open in Browser
http://localhost:3000

🧩 Project Structure (Simplified)
components/
 ├── EmployeeFormModal.jsx
 ├── EmployeeFormFields.jsx
 ├── ImageUpload.jsx
 ├── constants.js
app/
 └── page.jsx

🧠 Assumptions & Design Decisions

Client-side only:
No backend or database is used. Employee data is stored in React state.

Mock data:
Indian states are stored as a constant (STATES) to simulate dropdown data.

Image handling:
Images are stored as Base64 strings using the browser’s FileReader API (for demo purposes only).

Validation approach:
Custom field-level validation is implemented instead of using third-party libraries to keep dependencies minimal.

Component-based design:
The form is split into smaller reusable components to improve readability, scalability, and maintainability.

Bootstrap UI:
Bootstrap was chosen for fast development and consistent responsive design.