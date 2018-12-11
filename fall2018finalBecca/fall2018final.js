
//menu
$(".menu").click(function(){ //on click of my menu option
    $(this).next(".items").slideToggle(500); //show or hide the submenu
});

//this. next means this menu get these things- sub menu items (.items)
//this.next does just the menu you click on

//article load

$("article").load("article0.txt");

//this works by targeting the article tag-works to load the entire article, rather than the header and loads the default article-MUST USE LOAD

//make sure you know how to use a hover- target sub menu item to do something on the page



$("input[name='article']").click(function(){
    //input tag- use the name of the tag ex. h1 or input then put the name of what the inpu is, in this case the name is article

     let variable= $(this).val();
//    let article= $(this).val();
    //article in this case is not the same as the other one-use different name

    $("article").load(variable);
});


//this works by targeting the article tag-works to load the entire article, rather than the header


//extracredit
let count = 0;
$("#clickme").click(function(){ //on click of my menu option
    count= count + 1; //count++;
    $("#clickcount").html(count);
   
});

//this