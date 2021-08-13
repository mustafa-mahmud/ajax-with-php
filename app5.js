'use strict';

const btn = document.querySelector('button');
const usersEl = document.getElementById('users');

const getUsers = function () {
  //create object
  const xhr = new XMLHttpRequest();

  //open files/url
  xhr.open('GET', 'users.php', true);

  //load files/url
  xhr.onload = function () {
    if (xhr.status === 200) {
      const users = JSON.parse(xhr.responseText);
      console.log(users);
      let output = '';

      output += users.map(
        (user) => `
			<ul>
			<li>Id: ${user.id}</li>
			<li>Name: ${user.name}</li>
			</ul>
			`
      );

      usersEl.innerHTML = output;
    }
  };

  //send request
  xhr.send();
};

//////////////
btn.addEventListener('click', getUsers);
