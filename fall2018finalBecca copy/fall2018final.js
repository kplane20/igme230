
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
//    this targets individual item being clicked then gets the value with val

    $("article").load(variable);
//    gets the article and then loads it
});


//this works by targeting the article tag-works to load the entire article, rather than the header


//extracredit
let count = 0;
$("#clickme").click(function(){ //on click of my menu option
    count= count + 1; //count++;
//    increases by one so to decrease by 1 use count-1
    $("#clickcount").html(count);
   
});

//this only works because you edited the html so ask about this 
$("#clickme2").click(function(){ //on click of my menu option
    count= count - 1; //count++;
//    decreases by one so to decrease by 1 use count-1
    $("#clickcount").html(count);
   
});
