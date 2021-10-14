canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var mouseEvent="empty";
var last_position_x;
var last_position_y;
color="green";
width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY - canvas.offsetTop;

    if (mouseEvent=="mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("Last_position_of_X_and_Y");
        console.log("x="+ last_position_x);
        console.log("y="+ last_position_y);
        ctx.moveTo(last_position_x,last_position_y);

        console.log("Last_position_of_X_and_Y");
        console.log("x="+ current_position_of_mouse_x);
        console.log("y="+ current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_x=current_position_of_mouse_x;
    last_position_y=current_position_of_mouse_y;

}
