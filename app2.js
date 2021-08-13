'use strict';

const btn1 = document.querySelector('.user');
const btn2 = document.querySelector('.users');
const user = document.getElementById('user');
const users = document.getElementById('users');

const loadUser = function () {
  //create object
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  //open fils
  xhr.open('GET', 'user.json', true);

  //onload files
  xhr.onload = function () {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.responseText);

      user.innerHTML = `
			<ul>
			<li>ID: ${res.id}</li>
			<li>NAME: ${res.name}</li>
			<li>EMAIL: ${res.email}</li>
			</ul>
			`;
    }
  };

  //send request
  xhr.send();
};

const loadUsers = function () {
  //create xmlhttp object
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  //open file
  xhr.open('GET', 'users.json', true);

  //load file
  xhr.onload = function () {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.responseText);

      const ul = document.createElement('ul');

      ul.innerHTML = res
        .map(
          (el) => `
			<li>ID: ${el.id}</li>
			<li>NAME: ${el.name}</li>
			<li>EMAIL: ${el.email}</li>
			<br/>
			<br/>
			`
        )
        .join('');

      console.log(ul);
      users.appendChild(ul);
    }
  };

  //send request
  xhr.send();
};

//////////////
btn1.addEventListener('click', loadUser);
btn2.addEventListener('click', loadUsers);
