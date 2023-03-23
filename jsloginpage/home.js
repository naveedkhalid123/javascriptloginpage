// get the user's full name from local storage
const fullName = localStorage.getItem('fullName');

// if the user is not logged in, redirect to the login page
if (!fullName) {
  window.location.href = 'index.html';
}

// set the user's full name on the page
document.getElementById('user-fullname').textContent = fullName;

// get the add city form element
const addCityForm =

// handle form submit event for adding a city
addCityForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    // get the city name
    const cityInput = document.getElementById('city');
    const cityName = cityInput.value;
  
    // check if the city is already in the list
    const cityList = document.getElementById('city-list');
    const existingCities = cityList.querySelectorAll('li');
    for (let i = 0; i < existingCities.length; i++) {
      if (existingCities[i].textContent.toLowerCase() === cityName.toLowerCase()) {
        // show error message using toastify
        Toastify({
          text: `City '${cityName}' is already in the list`,
          backgroundColor: 'red'
        }).showToast();
  
        // clear the input field
        cityInput.value = '';
  
        return;
      }
    }
  
    // add the new city to the list
    const cityItem = document.createElement('li');
    cityItem.textContent = cityName;
    cityList.appendChild(cityItem);
  
    // show success message using toastify
    Toastify({
      text: `City '${cityName}' has been added to the list`,
      backgroundColor: 'green'
    }).showToast();
  
    // clear the input field
    cityInput.value = '';
  });
  
  // log all the cities to the console
  const cities = [];
  const cityList = document.getElementById('city-list');
  const cityItems = cityList.querySelectorAll('li');
  for (let i = 0; i < cityItems.length; i++) {
    cities.push(cityItems[i].textContent);
  }
  console.log(cities);



  