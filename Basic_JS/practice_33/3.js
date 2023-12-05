// Зробити запит до SWAPI щоб отримати список людей з прізвищем Skywalker, вивести у консоль.
// Документація по пошуку - https://swapi.py4e.com/documentation#search
// Результат: вивести у консоль список людей з прізвищем Skywalker
//  у форматі: [{ name: 'Luke Skywalker', height: 172, ... }

async function getSkywalkers() {
    try {
        const response = await fetch('https://swapi.py4e.com/api/people/?search=skywalker');

        if (!response.ok) {
            throw new Error(`Failed to fetch data, status code: ${response.status}`);
        }

        const data = await response.json();
        const skywalkers = data.results.map(skywalker => ({
            name: skywalker.name,
            height: skywalker.height,
        }));

        console.log('List of Skywalkers:', skywalkers);
    } catch (error) {
        console.error('Error:', error);
    }
}

getSkywalkers();