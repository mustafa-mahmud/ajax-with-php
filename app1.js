'use strict';

function loadText() {
  //create object
  const xhr = new XMLHttpRequest();
  //open function-type,url/file,async
  xhr.open('GET', 'sample.txt', true);
  console.log(xhr);

  //Optional use for Loaders
  xhr.onprogress = function () {
    console.log(xhr.readyState);
  };

  xhr.onload = function () {
    console.log('READYSTATE: ', xhr.readyState);
    if (xhr.status === 200) {
      document.querySelector('.text').textContent = xhr.responseText.trim();
    } else if (xhr.status === 404) {
      document.querySelector('.text').textContent = 'File not found';
    }
  };

  xhr.onerror = function () {
    console.log('Reques error: ');
  };

  /* xhr.onreadystatechange = function () {
    console.log('READYSTATE: ', xhr.readyState);
    if (xhr.readyState === 4 && xhr.status === 200) {
      // console.log(xhr.responseText.trim());
    }
  }; */

  //send request
  xhr.send();
}

document.getElementById('button').addEventListener('click', loadText);
