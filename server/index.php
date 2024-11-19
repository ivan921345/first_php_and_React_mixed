<?php 
header("Content-Type: application/json"); 
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 

$conn = mysqli_connect("localhost", "root", "", "testconwithreact");

if ($conn->connect_error) {
    die(json_encode(["error" => "Error connecting to the database"]));
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);

    if (!$input || !isset($input['username']) || !isset($input['username'])) {
        echo json_encode(["error" => "Invalid input"]);
        exit;
    }

    $username = $conn->real_escape_string($input['username']);
    $surname = $conn->real_escape_string($input['surname']);

    $sql = "INSERT INTO users (username, surname) VALUES ('$username', '$surname')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "id" => $conn->insert_id]);
    } else {
        echo json_encode(["error" => "Error: " . $conn->error]);
    }
} elseif ($method === 'GET') {
    $sql = "SELECT * FROM users";
    $resp = $conn->query($sql);

    if ($resp->num_rows <= 0) {
        echo json_encode([]); 
    } else {
        $array = [];
        while ($row = $resp->fetch_assoc()) {
            $array[] = $row; 
        }
        echo json_encode($array); 
    }
} else {
    echo json_encode(["error" => "Method not allowed"]);
}
$conn->close();
?>
