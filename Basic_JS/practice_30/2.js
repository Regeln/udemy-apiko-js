//Крім ресурсу /users API надає ще інші ресурси, 
//наприклад /albums щоб отримати дані фотоальбомів
//І ці ресурси можуть залежати один від одного,
//наприклад ми можемо отримати альбоми які належать певному користувачу
//за допомогою ендпоінту /users/1/albums - отримаємо альбоми користувача у якого поле id = 1
//Завдання. Отримати список усіх альбомів які належать користувачу з id - 10.
//Використати fetch.
//Після отримання відповіді від API, перевірити чи запит виконався успішно 
//(чи знаходиться код відповіді в діапазоні 200-299)
//Вивести у консоль результат

const URL = "https://jsonplaceholder.typicode.com";
const userId = 10;

fetch(`${URL}/users/${userId}/albums`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then(albums => {
        console.log(`Albums for user id ${userId}:`, albums);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });