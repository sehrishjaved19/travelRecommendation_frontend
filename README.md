# Travel Recommendation – Frontend  
This repository contains the frontend code for the Travel Recommendation Project, created as a final assignment for the IBM JavaScript Programming Essentials course on Coursera.

## 🧭 Project Overview  
The Travel Recommendation Project helps users discover travel destinations and get suggestions based on preferences. This frontend app is built using HTML, CSS and JavaScript to interface with a  mock API delivering travel-recommendation data.

## 🌟 Features  
- A clean and responsive UI for users to browse travel destinations.  
- Pages include:  
  - `index.html` – Landing/home page.  
  - `about_us.html` – Information about the app and author.  
  - `contact_us.html` – Contact form or info for feedback.  
- Custom styles via `travel_recommendation.css`.  
- A mock API data file (`travel_recommendation_api.json`) to simulate backend responses during development.

## 📁 File Structure  
```

.
├── Images/                          ← Image assets used in the UI
├── index.html                      ← Home page
├── about_us.html                   ← About page
├── contact_us.html                 ← Contact page
├── travel_recommendation.css       ← Global stylesheet
├── travel_recommendation_api.json  ← Sample/mock API data file
└── README.md                       ← (this file)

````

## 🛠 Getting Started  
1. Clone the repository:  
   ```bash
   git clone https://github.com/sehrishjaved19/travelRecommendation_frontend.git
   cd travelRecommendation_frontend
   ```

2. Open `index.html` in your browser (double-click or via local server) to view the app.
3. Optionally: launch a simple HTTP server (for example via Python) if you want relative paths to load correctly:

   ```bash
   # Python 3
   python -m http.server 8000
   ```

   Then go to `http://localhost:8000` in your browser.

## 📌 Technologies Used

* HTML5
* CSS3
* Static JSON file for mock API data
* (Optional) Vanilla JavaScript to fetch and display data from `travel_recommendation_api.json`

## 🎓 Course Context

This project was developed as the **final assignment** for the **IBM JavaScript Programming Essentials** course on Coursera. It showcases frontend skills and integration with data (mock or real).

## 🔍 Future Enhancements

* Replace the mock JSON file with a real backend API (e.g., Node.js + Express) or serverless function.
* Add user interaction: filters, search, sorting of destinations.
* Add more pages or modules such as “Favourite Destinations”, “User Profile”, or “Itinerary Builder”.
* Improve styling: responsive design for mobile, UI animations, dark mode.
* Add unit tests (e.g., via Jest) and/or integrate with a build tool (Webpack, Parcel) for optimization.
* Deploy live (GitHub Pages, Netlify, Vercel) and update README with the live link.

## 📥 Contribution

Contributions are welcome! If you’d like to contribute:

1. Fork the repository
2. Create a new branch for your feature/fix
3. Commit your changes with clear messages
4. Submit a pull request describing your changes

## 📄 License

This project is open-source and available under the MIT License.

---

✨ Thanks for visiting and exploring this repo!


