// Fetch data and store globally
let travelData = {};

// Fetch JSON data
fetch('travel_recommendation_api.json')
  .then(response => response.json())
  .then(data => {
    travelData = data;
    console.log('Data loaded successfully:', data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Function to handle search
function searchRecommendations() {
  const search = document.getElementById('search').value.trim().toLowerCase();
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ""; // Clear previous results

  if (!search) {
    resultsDiv.innerHTML = "<p>Please enter a keyword (beach, temple, or country name).</p>";
    return;
  }

  let results = [];

  // Match keyword: beaches
  if (search === "beach" || search === "beaches") {
    results = travelData.beaches;
  }

  // Match keyword: temples
  else if (search === "temple" || search === "temples") {
    results = travelData.temples;
  }

  // Match keyword: countries (e.g. "Japan", "Brazil")
  else {
    // find country by name
    const country = travelData.countries.find(
      c => c.name.toLowerCase() === search
    );
    if (country) {
      results = country.cities;
    }
  }

  // If no matches
  if (results.length === 0) {
    resultsDiv.innerHTML = `<p>No recommendations found for "${search}". Try another keyword.</p>`;
    return;
  }

  // Display results
  results.forEach(place => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${place.imageUrl}" alt="${place.name}">
      <h3>${place.name}</h3>
      <p>${place.description}</p>
      <button class="visit-btn">Visit</button>
    `;
    resultsDiv.appendChild(card);
  });
}

// Function to clear results
function clearResults() {
  document.getElementById('search').value = '';
  document.getElementById('results').innerHTML = '';
}