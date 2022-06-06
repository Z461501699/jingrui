<?php
header("Cache-Control:no-cache,must-revalidate,no-store");
header("Pragma:no-cache");
header("Expires:-1"); 
header('Content-Type:application/json;charset=utf-8');

$start = isset($_GET['start']) ? $_GET['start'] : 0;
$limit = isset($_GET['limit']) ? $_GET['limit'] : 1;

$servername = "localhost";
$username = "root";
$password = "123456";
$dbname = "jreyes";
try { 
	$conn = new \PDO("mysql:host=$servername;dbname=$dbname", $username, $password); 
	$sql = "SELECT count(1) AS E_COUNT FROM person_details";
	$result = $conn->query($sql);
	$res = $result->fetchAll(\PDO::FETCH_ASSOC); 
	$count = $res[0]['E_COUNT'];

	$sql = "SELECT * FROM person_details LIMIT $start, $limit";
	$result = $conn->query($sql);
	$res = $result->fetchAll(\PDO::FETCH_ASSOC); 


	$datas = array();

	foreach ($res as $k => $v) {
		$data = $v;
		$data['features'] = json_decode($data['features']);
		array_push($datas, $data);
	}

	echo json_encode(array(
		"code" => 200,
		"message" => "success",
		"datas" => $datas,
		"expands" => array(
			"start" => $start,
			"limit" => $limit,
			"total" => $count
		)
	));
} catch(\PDOException $e) { 
	echo json_encode(array(
		"code" => 500,
		"message" => $e->getMessage()
	));
} 



?>