<?php
// require "connection.php";

// $category           = $_REQUEST['category'];
// $topic_title        = $_REQUEST['topic_title'];
// $topic              = $_REQUEST['topic'];





// $sql = "INSERT INTO experience (category,topic_title,topic) VALUES (?,?,?)";
// $result  = $conn->prepare($sql);

// $result->execute([$category, $topic_title,  $topic]);

?>


<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "project9"; 
$id = '';
 
$con = mysqli_connect($host, $user, $password,$dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
 
switch ($method) {
    case 'GET':
      $sql = "select * from experience"; 
      break;
    case 'POST':
      $category             = $_REQUEST['category'];
        $topic_title        = $_REQUEST['topic_title'];
        $topic              = $_REQUEST['topic'];
         $sql = "insert into experience (category,topic_title,topic) values ('$category', '$topic_title', ' $topic')"; 
      break;
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }
 
$con->close();