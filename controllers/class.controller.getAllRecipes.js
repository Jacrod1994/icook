// JavaScript Document
function getAllRecipes()
{


$('.listAllRecipes').empty();

//$.mobile.loading('show', {text: 'Loading Your Recipes',textVisible: true,theme: 'a'});



//Web service call to get the data

var getAllRecipes = $.get("https://n3072775.scm.tees.ac.uk/App/models/class.model.getAllRecipes.php?action=getAllRecipes",

//data.recipeData

function(data) 

{ 

var j = 0;

var myTotal = data.rec.length ;

for(var i =0; i < data.rec.length;i++)

{ 

var recipe_id = data.rec[i].recipe_id;

var recipe_name = data.rec[i].recips_name;

var recipe_description = data.rec[i].recipe_text;

var recipeDetails = '<p>Recipe No: '+recipe_id+'</p><p>Name: '+recipe_name+'</p><p>Instructions: <br><br>'+recipe_description+'</p>';



$('.listAllRecipes').append('<tr class="table-stroke"><td class="images_'+j+'"</td><td>'+recipeDetails+'</td></tr>');

$('.images_'+j).append('<img src="'+data.rec[i].img_thumb+'" alt="test image" width="150" height="150" />' );

j = j +1; //$.mobile.loading('hide');

}//close loop



}, "json"); 



getAllRecipes.done(function() 

{ //$.mobile.loading('hide');

console.log("Yeeee we got the data" );

})

getAllRecipes.fail(function() 

{ //$.mobile.loading('hide');

alert('something failed!')

}) 

};//Close Function

getAllRecipes();