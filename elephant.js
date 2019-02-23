var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.lineWidth = 5;
var down = false;
var xx,yy,sizeoftext,coloroftext;
canvas.addEventListener('mousemove',draw);

canvas.addEventListener('mousedown',function()
{
down=true;
context.beginPath();
context.moveTo(xPos,yPos);
canvas.addEventListener("mousemove",draw);

});

canvas.addEventListener("mouseup",function(){down=false;});

function draw(e)
{
xPos = e.clientX - canvas.offsetLeft;
yPos = e.clientY - canvas.offsetTop;

	if(down==true)
	{
	xx=xPos;
	yy=yPos;
	context.lineTo(xPos,yPos);
	context.stroke();
	}

}
function myFunction()
{
var color=document.getElementById("favcolor").value;
coloroftext=color;
context.lineWidth=5;
context.strokeStyle = color;
context.fillStyle = color;
}
function fillcanvas() {context.fillRect(0,0,canvas.width,canvas.height);}

function eraser() {var color="white"; context.lineWidth = 20; context.strokeStyle=color;}

function brushsize() {var size=document.getElementById("brush").value; context.lineWidth = size; sizeoftext=size;}

function textsee() 
{
var textinput=document.getElementById("fineit").value;

context.font=sizeoftext+"px"+" Arial"; // 7. canvas text example storkeText("text",x,y);
					//ctx.strokeText("hello",10,20);


/*ctx.font="25px Comic Sans MS";	// 8. Add color and center text
ctx.textAlign="center";*/

context.fillStyle=coloroftext;

//ctx.fillStyle="red";

context.fillText(textinput,xx,yy);


}
