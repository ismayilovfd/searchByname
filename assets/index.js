const form = document.getElementById("form");
const input = document.getElementById("input");
const store = document.getElementById("store");
const API = 'https://api.github.com/users/';


form.addEventListener('submit', (e) =>{
    e.preventDefault(),
    kullaniciyibul()
});

function kullaniciyibul() {
     fetch(API + input.value)
     .then((res) => res.json())
     .then((data) => {
        renderUsers(data);
     });

 function renderUsers(data) {

    const h3 = document.createElement('h3');
    h3.textContent=data.login;

    const image = document.createElement('img');
    image.src=data.avatar_url;

    store.appendChild(h3,image);
};
    
};
