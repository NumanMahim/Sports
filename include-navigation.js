        // Define a function to load the navigation menu
        function loadNavigation() {
            var container = document.getElementById('navigation-container');
    
            // Create an XMLHttpRequest object
            var xhr = new XMLHttpRequest();
    
            // Define the URL of the navigation HTML file
            var navigationUrl = 'navigation.html';
    
            // Configure the request
            xhr.open('GET', navigationUrl, true);
    
            // Set up a callback function to handle the response
            xhr.onload = function () {
                if (xhr.status === 200) {
                    // If the request is successful, insert the response HTML into the container
                    container.innerHTML = xhr.responseText;
                } else {
                    // Handle any errors here
                    console.error('Error loading navigation:', xhr.statusText);
                }
            };
    
            // Send the request
            xhr.send();
        }
    
        // Call the function to load the navigation when the page loads
        window.addEventListener('DOMContentLoaded', loadNavigation);
       