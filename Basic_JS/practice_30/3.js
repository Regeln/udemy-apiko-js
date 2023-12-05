const URL = "https://jsonplaceholder.typicode.com"

const newUser = {
    name: "name lastname",
    username: "username",
     email: "example@example.com"
};

fetch(`${URL}/users`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser),
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    })
    .then(createdUser => {
        console.log('Result:', createdUser);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });