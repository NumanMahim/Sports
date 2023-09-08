document.addEventListener("DOMContentLoaded", function () {
    // Define your API key
    const apiKey = "fe898e4c-8643-4da8-b4c4-4f9e4c83a105";

    // Define the API endpoint URL
    const apiUrl = `https://api.cricapi.com/v1/series?apikey=${apiKey}&offset=0`;

    // Get a reference to the list element where we'll display the series
    const seriesList = document.getElementById("match-list");

    // Make an AJAX request to the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Check if the request was successful
            if (data && data.data) {
                const seriesData = data.data;

                // Update the website with the list of series
                seriesData.forEach(series => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${series.name} (Start Date: ${series.startDate}, End Date: ${series.endDate})`;
                    seriesList.appendChild(listItem);
                });
            } else {
                console.error("Error: Unable to fetch data from the API");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
});
