<?php
require_once('./connection.php');

$name           = $_REQUEST["name"];
$company        = $_REQUEST["company"];
$email          = $_REQUEST["email"];
$phone          = $_REQUEST["phone"];
$student_type   = $_REQUEST["student_type"];

if (!$name || !$company || !$email || !$phone || !$student_type ) {
    die("All fields are required!");
}

$stmt = $conn->prepare("INSERT INTO students (name, company, email, phone, student_type) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $name, $company, $email, $phone, $student_type);


if ($stmt->execute()) {
    $url = 'http://127.0.0.1/brainster_labs/clients.html';
    echo "<script> location.href='" . $url . "';</script>";
    exit;
} else {
    echo "Error occured, please try again!";
}

$stmt->close();
$conn->close();