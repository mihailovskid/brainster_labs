<?php

require_once('./connection.php');

$stmt = $conn->prepare("SELECT s.name, s.company, s.email, s.phone, t.name AS 'type' FROM `students` s LEFT JOIN `student_types` t ON s.student_type = t.id ORDER BY s.id DESC");
$stmt->execute();
$result = $stmt->get_result();

$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = [
        "name"          => $row['name'],
        "company"       => $row['company'],
        "email"         => $row['email'],
        "phone"         => $row['phone'],
        "student_type"  => $row['type']
    ];
}

echo json_encode($data);

$stmt->close();
$conn->close();