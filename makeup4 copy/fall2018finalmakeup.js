
//extra credit
let count = 0;
$("#increment").click(function(){ //on click of my menu option
    count= count + 1; //count++;
    $("#currentcount").html(count);
   
});

// menu hover
$(".menu").hover(function(){
    $(this).css("background-color", "lightpink"); 
}, function(){
    $(this).css("background-color", "lightpink");  
});

$("li").hover(function(){
    $(this).css("background-color", "lightpink"); 
    $(this).css('color', 'magenta');
}, 
function(){
    $(this).css("background-color", "#ccc");  
});

// menu drop down
$(".menu").click(function() {
    $(this).next('.submenu').slideToggle('slow');
});


// article/story 
//loadds the fileinto article section on the grid
$("#story").load("story0.txt");

$("#test1").click(function() { //when you click the list item with the id "test1" perform this function
$("article").load("article1.txt"); //upload the new verse and replace the old one
});

$("#test").click(function() { //when you click the list item with the id "test" perform this function
$("article").load("article2.txt"); //upload the new verse and replace the old one
});

// $("input[name='content']").click(function(){

//     let newarticle= this.value;

//     $("story").load(newarticle);
// });

