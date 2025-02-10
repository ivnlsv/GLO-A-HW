let xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

const data = {
    title: "Lesson 26",
    body: "XMLHttpRequest",
    userId: 1
};

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 201) {
            console.log("Данные отправлены:", JSON.parse(xhr.responseText));
        } else {
            console.error("Ошибка при отправке данных:", xhr.statusText);
        }
    }
};

xhr.send(JSON.stringify(data));
