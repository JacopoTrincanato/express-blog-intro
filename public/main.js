fetch('/posts')
.then(response => response.json())
.then(data => {
  const postList = document.querySelector('ul');
  data.data.forEach(post => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <h2>${post.titolo}</h2>
    <p>${post.contenuto}</p>
    <img src="${post.immagine}" alt="${post.titolo}" width="200">
    <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
  `;
  postList.appendChild(listItem);
});
}).catch(error => console.error('Errore:', error));