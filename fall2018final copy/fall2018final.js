

$(".mainmenu").click(function() {
    $(this).next('.submenu').slideToggle('slow');
});




// radio button code

//loads the fileinto article section on the grid
$("article").load(".content");

$("input[name='content']").click(function(){

    let showmenu= this.value;

    $("article").load(showmenu);
});

//loadds the fileinto article section on the grid
// $("article").load("article0.txt");

// $("input[name='content']").click(function(){

//     let newarticle= this.value;

//     $("article").load(newarticle);
// });



//menu option


//shows and hides nav- works in mackenzies final exercise using butots
$("#hide").click(function () {
    $("nav").animate({ left: '-100' }, "slow");

});

$("#show").click(function () {
    $("nav").animate({ left: '0px' }, "slow");

});


//Changed background if you hover 
$(".mainmenu").hover(function(){
    $(this).css("background-color", "yellow"); 
}, function(){
    $(this).css("background-color", "#ccc");  
});

$("li").hover(function(){
    $(this).css("background-color", "orange"); 
}, function(){
    $(this).css("background-color", "#86af49");  
});



//extracredit
//to decrease count = count - 1
//doing this with buttons on two diffrent names, is there a way to do it when button is the same name 
let count = 0;
$("#clickme").click(function(){ //on click of my menu option
    count= count + 1; //count++;
    $("#count").html(count);
   
});



    
    // let verse = ("article0.txt")  // sets default verse element

// $(".choose-content").val(verse); // changes menu option to default
// $("#content").load(verse);   // retrieves only default element


// $("#choose-content").click(function() { //on change, when a new menu item is selected do this
//     verse = ("article1.txt") //the verse which is my variable for the content information is set to the new value of the selected menu item.
//         
//     $("#content").load(verse); //upload the new verse and replace the old one
//     });
    
    
    
    
//     $("#choose-contentn").click(function() { //on change, when a new menu item is selected do this
//     verse = ("article2.txt") //the verse which is my variable for the content information is set to the new value of the selected menu item.
//         
//     $("#content").load(verse); //upload the new verse and replace the old one
//     });