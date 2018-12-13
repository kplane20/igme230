

$(".mainmenu").click(function() {
    $(this).next('.submenu').slideToggle('slow');
});

// radio button code

let verse = ("article0.txt")  // sets default verse element

$(".choose-content").val(verse); // changes menu option to default
$("#content").load(verse);   // retrieves only default element


$("#choose-content").click(function() { //on change, when a new menu item is selected do this
    verse = ("article1.txt") //the verse which is my variable for the content information is set to the new value of the selected menu item.
        
    $("#content").load(verse); //upload the new verse and replace the old one
    });
    
    
    
    
    $("#choose-contentn").click(function() { //on change, when a new menu item is selected do this
    verse = ("article2.txt") //the verse which is my variable for the content information is set to the new value of the selected menu item.
        
    $("#content").load(verse); //upload the new verse and replace the old one
    });
    
    