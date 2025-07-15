function hello()
{
    console.log("hello there!");
}




function init()
{
    console.log("hello im the init");
    hello();
}




window.onload = init; //it waits until the css and the HTML resolve to run the logic