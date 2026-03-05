# HomeMade Pickles & Snacks

A full-stack e-commerce platform for traditional homemade pickles and snacks. Built with Spring Boot, MongoDB, and React.

## 🚀 Teck Stack
- **Backend:** Spring Boot (Java 17), Spring Data MongoDB
- **Database:** MongoDB
- **Frontend:** React (Vite), Tailwind CSS, Lucide Icons, Axios, React Router
- **Security:** Basic Password Auth (Simulated)

## 📁 Project Structure
```
home-made-pickles/
├── backend/               # Spring Boot Application
│   ├── src/main/java/     # Source Code (Controller, Service, Model, Repo)
│   ├── src/main/resources/# application.properties
│   └── pom.xml            # Maven Dependencies
└── frontend/              # Vite + React Application
    ├── src/               # React Source
    │   ├── components/    # Reusable UI Components
    │   ├── pages/         # Page Components
    │   ├── context/       # StoreContext (State Management)
    │   └── api/           # Axios API Client
    ├── tailwind.config.js # CSS Configuration
    └── package.json       # Node Dependencies
```

## ⚙️ Setup Instructions

### Prerequisites
- JDK 17+
- Node.js (v20+)
- MongoDB (Running locally on default port 27017)

### 1. Backend Setup
1. Open the `backend` folder.
2. Ensure MongoDB is running.
3. Build and Run:
   ```bash
   # If Maven is installed
   mvn spring-boot:run
   ```
   *The backend will run on http://localhost:8080. A Data Seeder is included to automatically populate the database with sample products.*

### 2. Frontend Setup
1. Open the `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on http://localhost:5173.*

## 🌟 Core Features
- **Product Catalog:** Browse pickles and snacks with category filtering.
- **Dynamic Cart:** Real-time quantity updates and price calculation.
- **User System:** Registration and login flow.
- **Order Processing:** Automated stock reduction and order tracking.
- **Subsciptions:** Monthly/Weekly subscription options for favorite items.
- **Premium UI:** Responsive, modern design with subtle animations.

---
*Created for HomeMade Pickles & Snacks Project*
