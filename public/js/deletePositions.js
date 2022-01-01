
 // delete
 const trashcan = document.querySelector('a.delete');

 trashcan.addEventListener('click', (e) => {
     const endpoint = `/positions/delete/${trashcan.dataset.doc}`;  // dataset grabs data-doc from post ejs

     fetch(endpoint, {
         method: 'DELETE'
     })
     .then((response) => response.json()) // parse a object data into a js object that we can use
     .then((data) => window.location.href = data.redirect) 
     .catch(err => console.log(err));
 });
