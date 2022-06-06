<?php
header("Cache-Control:no-cache,must-revalidate,no-store"); //这个no-store加了之后，Firefox下有效
header("Pragma:no-cache");
header("Expires:-1"); 
header('Content-Type:application/json;charset=utf-8');
header("Access-Control-Allow-Origin: *");
$jsondatas = json_decode(file_get_contents("php://input") ,true);


$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "jreyes";
try {
	$conn = new \PDO("mysql:host=$servername;dbname=$dbname", $username, $password); 
	$sql = "INSERT INTO person_details (`features`) VALUES ('" .json_encode($jsondatas['querys'][0]['features'], JSON_UNESCAPED_UNICODE). "')";
	$conn->exec($sql);
	echo json_encode(array(
		"code" => 200,
		"data" => urldecode(json_encode($jsondatas['querys'][0]['features'])),
		"message" => "success"
	));

} catch(\PDOException $e) { 
	echo json_encode(array(
		"code" => 500,
		"message" => $e->getMessage()
	));
} 


?>