# EmployWise - User Management System

EmployWise is a **React-based web application** that provides a simple and elegant UI for managing users. It leverages **Redux** for state management, **React Router** for navigation, and **Axios** for API calls to interact with the user database from `reqres.in`. The UI is designed with **Tailwind CSS**, ensuring responsiveness and modern aesthetics.

## Features 🚀

- **User Authentication**: Login functionality with token storage in `localStorage`.
- **User List Display**: Fetch and display users from the external API.
- **User Management**: Edit and delete users dynamically.
- **Pagination**: Browse users through multiple pages.
- **State Management**: Utilizes **Redux Toolkit** for centralized state management.
- **Toast Notifications**: Success/error messages using `react-toastify`.
- **Modern UI**: Styled with Tailwind CSS for a sleek, responsive experience.

## Tech Stack 🛠️

- **Frontend**: React, Redux Toolkit, React Router, Axios, Tailwind CSS
- **State Management**: Redux Toolkit
- **Notifications**: React Toastify
- **API**: [Reqres API](https://reqres.in/)
- **Build Tool**: Webpack

## Installation & Setup ⚙️

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/NotGyashu/employwise-app.git
cd employwise-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Start the Development Server
```bash
npm run dev
```

The app will be available at **http://localhost:9001** (or the specified port).


## API Endpoints 📡

- **Login**: `POST https://reqres.in/api/login`
- **Get Users**: `GET https://reqres.in/api/users?page={page}`
- **Edit User**: `PUT https://reqres.in/api/users/{id}`
- **Delete User**: `DELETE https://reqres.in/api/users/{id}`

## Contributing 🤝

Contributions are welcome! Feel free to fork this repo and submit a PR with improvements or bug fixes.

## License 📜

This project is open-source and available under the **MIT License**.

---

⭐ **Star this repository** if you found it helpful!

