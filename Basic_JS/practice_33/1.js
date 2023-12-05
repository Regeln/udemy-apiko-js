// Переписати функцію з Promise на async/await з використанням fetch.

async function fetchAlbums() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');

        if (!res.ok) {
            throw new Error(`Failed with status code: ${res.status}`);
        }

        const data = await res.json();
        console.log("Result:", data);
    } catch (error) {
        console.log("Request Error:", error);
    }
}

fetchAlbums();