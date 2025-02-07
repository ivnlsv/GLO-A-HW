// Функция для получения данных из файла db.json
const getData = () => {
  return fetch('db.json') // файл db.json должен находиться в корне проекта
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok: ' + response.statusText);
          }
          return response.json();
      })
      .catch(error => {
          console.error('Ошибка при получении данных:', error);
      });
}

// Функция для отправки данных на указанный URL
const sendData = (data) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
  })
  .then(result => {
      console.log('Данные успешно отправлены:', result);
  })
  .catch(error => {
      console.error('Ошибка при отправке данных:', error);
  });
}

// Функция, которая выполняется при загрузке страницы
const init = () => {
  getData().then(data => {
      if (data) {
          sendData(data);
      }
  });
}

// Вызываем init() при загрузке страницы
window.onload = init;
