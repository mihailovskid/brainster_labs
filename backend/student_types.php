<?php

require_once('./connection.php');

$stmt = $conn->prepare("SELECT * FROM student_types");
$stmt->execute();
$result = $stmt->get_result();

$data = [];

while ($row = $result->fetch_assoc()) {
    $data[] = [
        "id"    => $row['id'],
        "text"  => $row['name']
    ];
}

echo json_encode($data);

$stmt->close();
$conn->close();