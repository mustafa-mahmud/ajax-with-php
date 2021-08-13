<?php
//create connection
$conn = mysqli_connect('localhost', 'root', '', 'ajaxtest');
//select all
$query = "select * from users";
$result = mysqli_query($conn, $query);
//fetch data
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users);
?>