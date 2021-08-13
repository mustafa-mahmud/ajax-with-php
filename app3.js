'use strict';

const btn = document.querySelector('button');
const usersEl = document.getElementById('users');

const loadAjax = function () {
  const url = 'https://api.github.com/users';

  //create object
  const xhr = new XMLHttpRequest();

  //open files/url
  xhr.open('GET', url, true);

  //load files/url
  xhr.onload = function () {
    if (xhr.status === 200) {
      const res = JSON.parse(xhr.responseText);
      const ul = document.createElement('ul');

      ul.innerHTML = res
        .map((el) => {
          return `
			<li>Name: ${el.login}</li>
			<li><img src="${el.avatar_url}" /></li>
			<br/>
			<br/>
			`;
        })
        .join('');
      console.log(xhr.responseText);
      usersEl.appendChild(ul);
    }
  };

  //send request
  xhr.send();
};

////////////////
btn.addEventListener('click', loadAjax);
