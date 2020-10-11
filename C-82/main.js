var mouseEvent="empty";
var lastPositionofX,lastPositionofY;

canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
widthofline=1;

canvas.addEventListener("mousedown" ,my_mousedown);
function my_mousedown(e){
mouseEvent="mousedown";

}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionofmouseX=e.clientX-canvas.offsetLeft;
    currentpositionofmouseY=e.clientY-canvas.offsetTop;
    if (mouseEvent="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        console.log("last position of X and Y coordinates= ");
        console.log("x= "+lastPositionofX+"y= "+lastPositionofY);
        ctx.moveTo(lastPositionofX,lastPositionofY);
        console.log("current position of X and Y coordinates= ");
        console.log("x= "+currentpositionofmouseX+"y= "+currentpositionofmouseY);
        ctx.lineTo(currentpositionofmouseX,currentpositionofmouseY);
        ctx.stroke();
    }
    lastPositionofX=currentpositionofmouseX; 
    lastPositionofY=currentpositionofmouseY;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}