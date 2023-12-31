let inputTitle = document.getElementById('inputTitle');
let inputText = document.getElementById('inputText');
let createBtn = document.getElementById('createBtn');

createBtn.onclick = function (event) {
    event.preventDefault();
    let newPost = document.getElementById('newPost');
    let article = document.createElement('article');
     let h2 = document.createElement('h2');
     let paragraf = document.createElement('p');
     newPost.appendChild(article);
     article.appendChild(h2);
     article.appendChild(paragraf);

     h2.textContent = inputTitle.value;
     paragraf.textContent = inputText.value;

     let title = inputTitle.value;
     let body = inputText.value;

     fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: `${title}`,
          body: `${body}`,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json),
     )}


