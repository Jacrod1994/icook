<?php
date_default_timezone_set('Europe/London');
error_reporting(E_ERROR);
// Create connection

$con=mysqli_connect("mysql.scm.tees.ac.uk","n3072775","qYakttV6","n3072775");

// Check connection 

if (mysqli_connect_errno()) { 
echo "Failed to connect to MySQL: " . mysqli_connect_error(); 
} 


//Rec Query


//Image Query
$result = mysqli_query($con,"SELECT * FROM recipe_database");
while($row = mysqli_fetch_array($result)) {
$recImage = $recImage."<img src='".$row['recipe_photo_filename']."' />";
$recData = $recData."<img src='".$row['recipe_text']."' />";
}

mysqli_close($con);

//print $recImage;

echo json_encode(array('action'=>'success','img'=>$recImage, 'rec'=>$recData));


?>