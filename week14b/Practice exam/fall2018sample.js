/* Don't use <script> tags in a linked js file! 

//drop down menu HTML
*/
/*
//this displays both menu items at the same time 
$(".menuitem").click(function(){ //on click of my menu option
        $(".submenu").slideToggle(500); //show or hide the submenu
});*/

//this displays it one at a time
$(".menuitem").click(function() {
    $(this).next('.submenu').slideToggle('slow');
});


//loading in the content, individual pages
/*
'use strict';
let verse = ("content1.txt")  // sets default verse element

$("#choose-content").val(verse); // changes menu option to default
$("#content").load(verse);   // retrieves only default element

$("#choose-content").change(function() { //on change, when a new menu item is selected do this
verse = $(this).val(); //the verse which is my variable for the content information is set to the new value of the selected menu item.
$("#content").load(verse); //upload the new verse and replace the old one
});

*/

//new button HTML
/*
<div name="content-menu" >
                
            <button id="choose-contentn" >Name</button>    
             <button id="choose-content"  >Course Info</button>
                
            </div>

*/

//radio button 
'use strict';
let verse = ("content1.txt")  // sets default verse element

$(".choose-content").val(verse); // changes menu option to default
$("#content").load(verse);   // retrieves only default element




$("#choose-content").click(function() { //on change, when a new menu item is selected do this
verse = ("content2.txt") //the verse which is my variable for the content information is set to the new value of the selected menu item.
    
$("#content").load(verse); //upload the new verse and replace the old one
});




$("#choose-contentn").click(function() { //on change, when a new menu item is selected do this
verse = ("content1.txt") //the verse which is my variable for the content information is set to the new value of the selected menu item.
    
$("#content").load(verse); //upload the new verse and replace the old one
});





