# 🏪 Store Market - Local Business Discovery Platform

Store Market is a responsive React-based web application designed to bridge the gap between local vendors and neighborhood customers. It allows users to discover local stores, access exclusive digital coupons, and save their favorite shops, while providing store owners with a dedicated portal for sales analytics and coupon management.

---

## ✨ Key Features

### 👤 For Customers (User Role)
* **Dynamic Discovery:** Interactive carousel featuring the latest neighborhood events, offers, and local business highlights.
* **Smart Filtering:** Quickly sort through categories (Electronics, Fashion, Food, etc.) using an icon-based navigation grid.
* **Digital Coupon Wallet:** Purchase exclusive store coupons that are stored locally using `localStorage` for persistence.
* **Saved Stores:** Heart your favorite local shops to keep them in a dedicated "Saved" section.
* **Interactive Store Profiles:** View store details, integrated Google Maps (pointing to the Institute's main branch), and a functional star-rating system.

### 💼 For Store Owners (Owner Role)
* **Sales Analytics:** Visualized sales data using `Chart.js` to track coupon performance.
* **Business Tools:** Dedicated links for creating coupons and managing store onboarding.
* **Live Preview:** Toggle between roles to see exactly how customers view your store’s exclusive deals.

---

## 📱 Responsive Design
The platform is built with a **Mobile-First** approach using React-Bootstrap:
* **Desktop:** Features a sleek side-bar navigation with a wide-view hero section.
* **Mobile/Tablet:** The sidebar transforms into a horizontal touch-friendly menu, and store grids adjust from 4 columns down to a single-column layout for readability.

---

## 🛠️ Technology Stack
* **Frontend Library:** React.js
* **Styling & Layout:** React-Bootstrap & Bootstrap Icons
* **Routing:** React Router DOM (v6)
* **Data Visualization:** Chart.js & React-Chartjs-2
* **Data Persistence:** LocalStorage API
* **Imagery:** Dynamic Unsplash Source IDs with fail-safe error handling.

---

## 📂 Project Structure
```text
src/
├── Components/       # Reusable UI (Navbar, Sidebar, StoreCard, etc.)
├── Data/             # MockData.js containing store and category arrays
├── Pages/            # Main views (Home, StoreDetails, Wallet, Saved)
└── App.jsx           # Main layout and role management