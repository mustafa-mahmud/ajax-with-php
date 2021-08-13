<?php

//connect to a database;
$conn = mysqli_connect('localhost', 'root', '', 'ajaxtest');

//ck post
if (isset($_POST["name"])) {
  $name = mysqli_real_escape_string($conn, $_POST["name"]);
  $query = "insert into users(name) values('$name')";

  if (mysqli_query($conn, $query)) {
    echo 'User addedd';
  } else {
    echo 'Something went wrong. ' . mysqli_error($conn);
  }
}

// Array with names
$a[] = "Anna";
$a[] = "Brittany";
$a[] = "Cinderella";
$a[] = "Diana";
$a[] = "Eva";
$a[] = "Fiona";
$a[] = "Gunda";
$a[] = "Hege";
$a[] = "Inga";
$a[] = "Johanna";
$a[] = "Kitty";
$a[] = "Linda";
$a[] = "Nina";
$a[] = "Ophelia";
$a[] = "Petunia";
$a[] = "Amanda";
$a[] = "Raquel";
$a[] = "Cindy";
$a[] = "Doris";
$a[] = "Eve";
$a[] = "Evita";
$a[] = "Sunniva";
$a[] = "Tove";
$a[] = "Unni";
$a[] = "Violet";
$a[] = "Liza";
$a[] = "Elizabeth";
$a[] = "Ellen";
$a[] = "Wenche";
$a[] = "Vicky";

?>