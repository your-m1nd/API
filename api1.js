//получаем от сервера список постов и отображаем на странице

document.addEventListener("DOMContentLoaded", function (event) {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => json.forEach(element => {
     let article = document.createElement('article');
     let title = document.createElement('h2');
     let paragraf = document.createElement('p');
     let body = document.querySelector('body');
     body.appendChild(article);
     article.appendChild(title);
     article.appendChild(paragraf);
     title.textContent = `Заголовок: ${element.title}`;
     paragraf.textContent = `Статья: ${element.body}`;
    })
    )
    .catch(error => console.log(error));    
}
)




