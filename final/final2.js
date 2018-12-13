
$("article").load("article0.txt"); //loads as default

$("#test1").click(function() { //when you click the list item with the id "test1" perform this function
$("article").load("article1.txt"); //upload the new verse and replace the old one
});


$("#test").click(function() { //when you click the list item with the id "test" perform this function
$("article").load("article2.txt"); //upload the new verse and replace the old one
});



//paragraph name is menu and items within the menu
//this means of this menu, get these things and the things are submenu items ".items"
//this means this "menu" you just clicked on 
//if you dont do this.next() it will do them al at once
//next means find the next, what is the next item in this document tree
$(".menu").click(function(){ //on click of my menu option
    $(this).next(".items").slideToggle(500); //show or hide the submenu
});




//shows and hides nav
$("#hide").click(function () {
    $("nav").animate({ left: '-100' }, "slow");

});

$("#show").click(function () {
    $("nav").animate({ left: '0px' }, "slow");

});


//extracredit
//to decrease count = count - 1
//doing this with buttons on two diffrent names, is there a way to do it when button is the same name 
let count = 0;
$("#clickme").click(function(){ //on click of my menu option
    count= count + 1; //count++;
    $("#clickcount").html(count);
   
});


//change what is targeting and decrease count
$("#clickme2").click(function(){ //on click of my menu option
    count= count - 1; //count++;
    $("#clickcount").html(count);
   
});


//Changed background if you hover 
$(".menu").hover(function(){
    $(this).css("background-color", "yellow"); 
}, function(){
    $(this).css("background-color", "#ccc");  
});

$("li").hover(function(){
    $(this).css("background-color", "orange"); 
}, function(){
    $(this).css("background-color", "#86af49");  
});
