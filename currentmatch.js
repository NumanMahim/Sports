document.addEventListener("DOMContentLoaded", function () {
    // Define your API key
    const apiKey = "fe898e4c-8643-4da8-b4c4-4f9e4c83a105";

    // Define the API endpoint URL
    const apiUrl = `https://api.cricapi.com/v1/cricScore?apikey=${apiKey}`;

    // Get a reference to the list element where we'll display the matches
    const matchList = document.getElementById("match-list");

    // Make an AJAX request to the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Check if the request was successful
            if (data && data.data) {
                const matches = data.data;

                // Update the website with the list of matches
                matches.forEach(match => {
                    const listItem = document.createElement("li");
                    listItem.textContent = match.matchType + ": " + match.t1 + " vs " + match.t2 + " - " + match.status;
                    matchList.appendChild(listItem);
                });
            } else {
                console.error("Error: Unable to fetch data from the API");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
});