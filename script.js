const getData = () => {
  return fetch('db.json') 
      .then(response => response.json())
      .catch(error => {
          console.error('Ошибка при получении данных:', error);
      });
}
const sendData = (data) => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(result => {
      console.log('Данные успешно отправлены:', result);
  })
  .catch(error => {
      console.error('Ошибка при отправке данных:', error);
  });
}
const init = () => {
  getData().then(data => {
      if (data) {
          sendData(data);
      }
  });
}
w.onload = init;
