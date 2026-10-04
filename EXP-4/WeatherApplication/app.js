const API_KEY = "89dc8c16ea47a159f69f6603eb3e6757";

const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const messageBox = document.getElementById("message");

let weatherChart = null;


// Button click - callback function
getWeatherBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city === "") {
        messageBox.textContent = "Please type a city name first.";
        return;
    }

    messageBox.textContent = "Loading...";

    getWeatherData(city);
});


// Async function
async function getWeatherData(city) {

    try {

        const url =
            `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

        // Promise + await
        const response = await fetch(url);

        const data = await response.json();

        // Check API response
        if (data.cod !== "200" && data.cod !== 200) {

            messageBox.textContent =
                `Error: ${data.message || "Unable to get weather data."}`;

            return;
        }

        messageBox.textContent = "";

        // Get date and time
        const times = data.list.map(
            (entry) => entry.dt_txt.slice(5, 16)
        );

        // Get temperature
        const temps = data.list.map(
            (entry) => entry.main.temp
        );

        // Draw graph
        drawGraph(times, temps, city);

    }

    catch (error) {

        console.log("Error:", error);

        messageBox.textContent =
            "Something went wrong. Check your internet connection or API key.";

    }
}


// Arrow function
const drawGraph = (labels, temperatures, city) => {

    const ctx = document
        .getElementById("weatherChart")
        .getContext("2d");


    // Destroy previous graph
    if (weatherChart !== null) {
        weatherChart.destroy();
    }


    // Create line graph
    weatherChart = new Chart(ctx, {

        type: "line",

        data: {

            labels: labels,

            datasets: [

                {
                    label: `Temperature in ${city} (°C)`,

                    data: temperatures,

                    borderColor: "blue",

                    backgroundColor: "rgba(0, 123, 255, 0.1)",

                    fill: true,

                    tension: 0.2,

                    pointRadius: 3
                }

            ]
        },


        options: {

            responsive: true,

            plugins: {

                title: {
                    display: true,
                    text: `5-Day Weather Forecast - ${city}`
                }

            },

            scales: {

                x: {
                    title: {
                        display: true,
                        text: "Date / Time"
                    }
                },

                y: {
                    title: {
                        display: true,
                        text: "Temperature (°C)"
                    }
                }

            }

        }

    });

};