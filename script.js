// Функция для получения данных из файла db.json
async function getData() {
  try {
      const response = await fetch('db.json'); // файл db.json должен находиться в корне проекта
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Ошибка при получении данных:', error);
  }
}

// Функция для отправки данных на указанный URL
async function sendData(data) {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      });

      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }

      const result = await response.json();
      console.log('Данные успешно отправлены:', result);
  } catch (error) {
      console.error('Ошибка при отправке данных:', error);
  }
}

// Функция, которая выполняется при загрузке страницы
async function init() {
  const data = await getData();
  if (data) {
      await sendData(data);
  }
}

// Вызываем init() при загрузке страницы
window.onload = init;
