var mouseEvent,YmouseXfinal, mouseYfinal,mouseXatual, mouseYatual, canvas, ctx, color, larguraLinha, mouseXtouchAtual, mouseYtouchAtual, mouseXtouchFinal, mouseYtouchFinal;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(){
    color = document.getElementsByName("caixaTextoCor").value;
    larguraLinha = document.getElementsByName("caixaTextoLargura").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e){
    mouseXatual = e.clientX - canvas.offsetLeft;
    mouseYatual = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.linewidth = larguraLinha;
        ctx.moveTo(mouseXfinal, mouseYfinal)
        ctx.lineTo(mouseXatual, mouseYatual)
        ctx.stroke();

    }
    mouseXfinal = mouseXatual;
    mouseYfinal = mouseYatual;

}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(){
    mouseEvent = "mouseUP";
}

var width = screen.width;

newWidth = screen.width -70;
newHeight = screen.height -70;

if (width<992){
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e){
    color = document.getElementsByName("caixaTextoCor").value;
    larguraLinha = document.getElementsByName("caixaTextoLargura").value;
    mouseXtouchFinal = e.touches[0].clientX - canvas.offsetLeft;
    mouseYtouchFinal = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e){
    mouseXtouchAtual = e.touches[0].clientX - canvas.offsetLeft;
    mouseYtouchAtual = e.touches[0].clientY - canvas.offsetTop; 
    ctx.beginPath()
    ctx.strokeStyle = color;
    ctx.linewidth = larguraLinha;
    ctx.moveTo(mouseXtouchFinal, mouseYtouchFinal);
    ctx.lineTo(mouseXtouchAtual, mouseYtouchAtual);
    ctx.stroke();

    mouseXtouchFinal = mouseXtouchAtual;
    mouseYtouchFinal = mouseYtouchAtual;
}

function limparcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}