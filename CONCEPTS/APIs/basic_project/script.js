let display = document.querySelector('.card');

function getInfo() {
    const profileUrl = "https://api.github.com/users/parthnarkar";
    const xhr = new XMLHttpRequest();
    xhr.open('GET', profileUrl);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(this.responseText);
                displayInfo(data.name, data.public_repos, data.followers, data.html_url);
            } 
            else {
                display.innerHTML = "Failed to fetch profile. Please try again.";
            }
        }
    };

    xhr.onerror = function () {
        display.innerHTML = "Network error. Please check your connection.";
    };

    xhr.send();
}

function displayInfo(name, totalRepo, followers, profile_url) {
    display.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Total Repositories:</strong> ${totalRepo}<br>
        <strong>Followers:</strong> ${followers} <br>
        <strong><a href="${profile_url}">Go to Profile</a></strong>
    `;
}

document.getElementById('button').addEventListener('click', getInfo);
