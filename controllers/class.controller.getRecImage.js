function getRecImage(){
     
 
//Web service call to get each Test Case by conditions ID
 
 $.ajax({
    type: 'POST',
    dataType: 'json',
    data2: postData,
     
    //Always external URL in an App
    url: 'https://n3072775.scm.tees.ac.uk/App/test.php',
     
    success: function(data2){
     
     
     
     
    //$('#TestCasesView').empty();
    //$.mobile.loading('show', {text: 'Loading Alpha Test Condition Results Data - Please Wait',textVisible: true,theme: 'a'});
    //Now iterate through each functional requirement in the JSON data
         
    
   var img = data2(img);
   
   
   $('#myElement').append('<span>'+img+'</span>');
  

 
 
     
    },
     
    error: function(){
         
        alert('There was an error handeling your request!');
    }
 
});//Close AJAX POST
 
     
     
     
}