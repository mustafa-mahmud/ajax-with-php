'use strict';

const btn = document.querySelector('button');
const getForm = document.getElementById('getForm');
const postForm = document.getElementById('postForm');
const name1 = document.getElementById('name1');

const getName = function (e) {
  e.preventDefault();

  const val = name1.value;

  //create object
  const xhr = new XMLHttpRequest();

  //open files/url
  xhr.open('GET', 'process.php?name=' + val, true);

  //load files/url
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };

  //send request
  xhr.send();
};

const postName = function (e) {
  e.preventDefault();

  const val = name2.value;
  const params = 'name=' + val;

  //create object
  const xhr = new XMLHttpRequest();

  //open files/url
  xhr.open('POST', 'process.php', true);

  //set request header
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  //load files/url
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };

  //send request
  xhr.send(params);
};

///////////////////
btn.addEventListener('click', getName);
getForm.addEventListener('submit', getName);
postForm.addEventListener('submit', postName);
