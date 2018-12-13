
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




// this should be working to load article
$("#story").load("story0.txt");

// $("input[name='content']").click(function(){

//     let newarticle= this.value;

//     $("story").load(newarticle);
// });


$("#story0.txt").click(function() { //when you click the list item with the id "story1.txt" perform this function
$("#story").load("story0.txt"); //upload the new story and replace the old one
});


$("#story1.txt").click(function() { //when you click the list item with the id "story1.txt" perform this function
$("#story").load("story1.txt"); //upload the new verse and replace the old one
});

$("#story2.txt").click(function() { //when you click the list item with the id "story1.txt" perform this function
$("#story").load("story2.txt"); //upload the new verse and replace the old one
});


