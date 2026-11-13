# 🎬 CineSuggest — Movie Discovery Platform

A movie discovery web application designed to make exploring movies easier and more enjoyable. CineSuggest brings together a curated movie collection, ratings, release information, and individual movie details through a clean, dark-themed interface.

## 📌 About the Project

CineSuggest is a full-stack web development project built using HTML, CSS, JavaScript, Node.js, Express.js, and EJS.

The application focuses on creating an engaging movie discovery experience while exploring both frontend development and backend fundamentals.

It combines a visually appealing interface with server-side functionality, dynamic page rendering, and structured movie data management.

## ✨ Features

- **Modern Navigation Bar** — Provides easy access to different sections of the platform.
- **Trending Movie Showcase** — Highlights featured movies with their information.
- **Genre Categories** — Browse movies across genres such as Action, Comedy, Drama, Sci-Fi, Thriller, Horror, Animation, and Romance.
- **Movie Collection** — Displays movie posters in an organized card-based layout.
- **Movie Ratings** — Shows ratings alongside movie titles.
- **Release Information** — Displays movie release years.
- **Movie Details** — Uses dynamic routes and server-side rendering to display movie information.
- **Modular Movie Data** — Keeps movie information and related operations organized in separate JavaScript modules.
- **Dark Theme** — Provides a consistent dark interface with blue accents.
- **Interactive UI** — Includes hover effects, transitions, and frontend interactions.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structuring web pages |
| CSS3 | Styling, layouts, animations, and responsiveness |
| JavaScript | Frontend interactivity and application logic |
| Node.js | Server-side JavaScript runtime |
| Express.js | Backend server and routing |
| EJS | Dynamic server-side page rendering |
| Font Awesome | Icons |
| Google Fonts | Typography |

## ⚙️ Application Architecture

CineSuggest uses a simple client-server architecture.

- **Frontend:** HTML, CSS, and JavaScript handle the user interface and interactions.
- **Backend:** Node.js and Express.js handle HTTP requests and application routing.
- **Templating:** EJS dynamically renders pages using data supplied by the server.
- **Data Management:** Movie information and related operations are organized into separate JavaScript modules.

## 🖥️ Project Preview

The interface includes:

- A navigation bar with a search interface.
- A featured movie section highlighting *Interstellar*.
- Genre selection categories.
- A movie gallery featuring popular titles.
- Individual movie information pages.

## 📂 Project Structure

```text
CineSuggest/
│
├── index.js                 # Express server and application routes
├── movies.js                # Movie data and related operations
├── package.json             # Project dependencies and scripts
│
├── views/                   # EJS templates
│   └── index.ejs
│
├── public/                  # Static frontend assets
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│
└── README.md
```

*The structure is illustrative. Adjust it to match the actual folders and filenames in your repository.*

## 🚀 Getting Started

Follow these steps to run CineSuggest locally.

### 1. Clone the repository

```bash
git clone https://github.com/VobilisettiMahith/CineSuggest.git
```

### 2. Navigate to the project directory

```bash
cd CineSuggest
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
node index.js
```

Open the local URL displayed by your Express server in your browser.

## 🎯 Learning Objectives

This project provides practical experience with:

- Semantic HTML and modern CSS layouts.
- JavaScript fundamentals and DOM manipulation.
- Event handling and frontend interactivity.
- Node.js and server-side JavaScript.
- Express.js routing and HTTP request handling.
- EJS templates and dynamic rendering.
- Importing and exporting modules using CommonJS.
- Organizing application data and reusable functions.
- Understanding client-server communication.

## 🔮 Future Improvements

- Integrating a movie database API such as TMDB.
- Implementing a fully functional movie search experience.
- Adding genre-based filtering and sorting.
- Expanding movie detail pages with cast, directors, trailers, and descriptions.
- Implementing a personal watchlist.
- Adding user authentication.
- Improving mobile responsiveness.
- Adding loading states and error handling.

## 👨‍💻 Author

**Mahith**

Computer Science and Engineering — Cybersecurity

Interested in full-stack development, software engineering, and building practical web applications.
