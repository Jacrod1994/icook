<?php
error_reporting(E_ERROR);
//Connection To MYSQL DataBase
//Function called in external scripts 

function DBConnect(){
//add further global vars at the end of the line below once you have created them in the database admin tool
global $Host, $User, $DBPassword, $DBName, $table_1, $table_2, $table_3 ;
//Website: mysqladm.scm.tees.ac.uk 
$Host = "mysql.scm.tees.ac.uk";
$User = "n3072775";
$DBPassword = "qYakttV6";
$DBName = "n3072775";
$table_1 = "users";
$table_2 = "recipe_database";
$table_3 = "Fimages";
//add links to your new tables here as well

//IMPORTANT!Comment out this block when connection is successful!
}//close function
?>
