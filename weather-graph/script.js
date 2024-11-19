document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'b0e2627be270f36dc46cbdd395428825'; // Your API key
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
        }
    };

    // Update graph with temperature data
    const updateGraph = (temperature) => {
        const ctx = document.getElementById('weatherGraph').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Temperature'],
                datasets: [{
                    label: 'Temperature (°C)',
                    data: [temperature],
                    backgroundColor: ['#36A2EB'],
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    };

    fetchData(); // Fetch data when the page loads
});
