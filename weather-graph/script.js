document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '3a45b094fb707af0c368d8861c74255f'; // Your API key
    const city = 'Hyderabad'; // Your city name
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data using async/await
    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            const weatherData = response.data;
            updateGraph(weatherData.main.temp); // Pass temperature data to update the graph
        } catch (error) {
            console.error('Error fetching weather data:', error.message);
            alert('Failed to fetch weather data. Check console for details.');
        }
    };

    // Update graph with temperature data
    const updateGraph = (temperature) => {
        const ctx = document.getElementById('weatherGraph').getContext('2d');
        new Chart(ctx, {
            type: 'bar', // Bar chart for the temperature
            data: {
                labels: ['Temperature'], // Label for the X-axis
                datasets: [{
                    label: 'Temperature (°C)', // Label for the dataset
                    data: [temperature], // The actual temperature data
                    backgroundColor: ['#36A2EB'], // Color of the bar
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true, // Set Y-axis to start from zero
                    },
                },
            },
        });
    };

    fetchData(); // Fetch data when the page loads
});
