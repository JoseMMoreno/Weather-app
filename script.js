document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("weatherForm");
    const weatherInfo = document.getElementById("weatherInfo");
    const body = document.body; // Get the body element

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const campgroundName = document.getElementById("campgroundName").value;
        const state = document.getElementById("state").value;

        // Construct the API URL with the provided API key
        const apiKey = "752ec63cbd594d1bbce64743231309";
        let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${campgroundName}`;

        if (state) {
            apiUrl += `,${state}`;
        }

        // Request temperature in Fahrenheit and wind speed in mph
        apiUrl += "&units=imperial";

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            // Extract weather conditions
            const temperature = data.current.temp_f;
            const windSpeed = data.current.wind_mph;
            const condition = data.current.condition.text;

            // Set background color based on weather condition
            setBodyBackgroundColor(condition);

            // Display weather and wind conditions
            weatherInfo.innerHTML = `
                <h2>Weather for ${data.location.name}, ${data.location.region}</h2>
                <p>Temperature: ${temperature}°F</p>
                <p>Wind: ${windSpeed} mph</p>
                <p>Condition: ${condition}</p>
            `;
        } catch (error) {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = "<p>Unable to fetch weather data. Please try again later.</p>";
        }
    });

    // Function to set background color based on weather condition
    function setBodyBackgroundColor(weatherCondition) {
        const body = document.body;
        switch (weatherCondition.toLowerCase()) {
            case "sunny":
                body.style.backgroundColor = "#fee12B"; // Yellow
                break;
            case "cloudy":
                body.style.backgroundColor = "#d3d3d3"; // Light Gray
                break;
            case "rain":
                body.style.backgroundColor = "#6495ED"; // Cornflower Blue
                break;
            default:
                body.style.backgroundColor = "#f4f4f4"; // Default Gray
                break;
        }
    }
});



// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("weatherForm");
//     const weatherInfo = document.getElementById("weatherInfo");

//     form.addEventListener("submit", async (e) => {
//         e.preventDefault();

//         const campgroundName = document.getElementById("campgroundName").value;
//         const state = document.getElementById("state").value;

        // Construct the API URL with the provided API key
        // const apiKey = "752ec63cbd594d1bbce64743231309";
        // const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${campgroundName}`;

        // if (state) {
        //     apiUrl += `,${state}`;
        // }

        // try {
        //     const response = await fetch(apiUrl);
        //     const data = await response.json();

            // Display weather and wind conditions
//             weatherInfo.innerHTML = `
//                 <h2>Weather for ${data.location.name}, ${data.location.region}</h2>
//                 <p>Temperature: ${data.current.temp_c}°C</p>
//                 <p>Wind: ${data.current.wind_kph} km/h</p>
//             `;
//         } catch (error) {
//             console.error("Error fetching weather data:", error);
//             weatherInfo.innerHTML = "<p>Unable to fetch weather data. Please try again later.</p>";
//         }
//     });
// });

