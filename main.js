var score=0;
var click=0;
var canvas = new fabric.Canvas('myCanvas');
block_y=1;
block_x=1;

block_image_width = 200;
block_image_height = 200;

var block_image_object= "";

function new_image(get_image)
{
   fabric.Image.fromURL(get_image, function(Img) {
   block_image_object = Img;
	   
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({
   top:block_y,
   left:block_x
   });
   canvas.add(block_image_object);

   });

}

function apple(){
   document.getElementById("output").innerHTML="This is NOT Recylable!";
   document.getElementById("output").style.color="red";
   score=score-1;
   document.getElementById("scores").innerHTML=score;
   document.getElementById("apple").disabled = true;
   console.log("Apple");
}

function box(){
      block_x = 200;
      block_y = 100;
	   new_image('box.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
      document.getElementById("box").disabled = true;
	   console.log("Cardboard Box");
}

function battery(){
      block_x = 30;
      block_y = 100;
	   new_image('battery.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
      document.getElementById("battery").disabled = true;
	   console.log("Batteries");
}

function jar(){
      block_x =380;
      block_y = 100;
	   new_image('glass.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
      document.getElementById("glass").disabled = true;
	   console.log("Glass Jar");
}

function paper(){
      block_x = 600;
      block_y = 100;
	   new_image('paper.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
      document.getElementById("paper").disabled = true;
	   console.log("Paper");
}
  
function can(){
      block_x = 850;
      block_y = 100;
	   new_image('can.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
      document.getElementById("can").disabled = true;
	   console.log("Aluminium Can");
      
}
   
function bottle(){
      block_x = 1000;
      block_y = 100;
	   new_image('bottle.png'); 
      document.getElementById("output").innerHTML="This is Recylable!"
      document.getElementById("output").style.color="green";
      score=score+1;
      document.getElementById("scores").innerHTML=score;
      document.getElementById("bottle").disabled = true;
	   console.log("Plastic Bottle");
      
}

function bulb(){
      document.getElementById("output").innerHTML="This is NOT Recylable!";
      document.getElementById("output").style.color="red";
      score=score-1;
      document.getElementById("scores").innerHTML=score;
      document.getElementById("bulb").disabled = true;
	   console.log("Light Bulb");
      
}

function medical(){
   document.getElementById("output").innerHTML="This is NOT Recylable!";
   document.getElementById("output").style.color="red";
   score=score-1;
   document.getElementById("scores").innerHTML=score;
   document.getElementById("medical").disabled = true;
   console.log("Medical Waste");
   
}
 
function styrofoam(){
   document.getElementById("output").innerHTML="This is NOT Recylable!";
   document.getElementById("output").style.color="red";
   score=score-1;
   document.getElementById("scores").innerHTML=score;
   document.getElementById("styrofoam").disabled = true;
   console.log("Styrofoam");
}

function ceramic(){
      document.getElementById("output").innerHTML="This is NOT Recylable!";
      document.getElementById("output").style.color="red";
      score=score-1;
      document.getElementById("scores").innerHTML=score;
      document.getElementById("ceramic").disabled = true;
	   console.log("Ceramics");
}

function food(){
   document.getElementById("output").innerHTML="This is NOT Recylable!";
   document.getElementById("output").style.color="red";
   score=score-1;
   document.getElementById("scores").innerHTML=score;
   document.getElementById("food").disabled = true;
   console.log("Food Wrapper");
}


var timeleft = 30;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    if(score==6){
      document.getElementById("output").innerHTML="Congratulations! You have gotten all right!"
      document.getElementById("output").style.color="green";}
    if(score<=5){
         document.getElementById("output").innerHTML="Try Again!"
         document.getElementById("output").style.color="red";}
  }
  times= document.getElementById("progressBar").value = 30 - timeleft;
  timeleft -= 1;
}, 1000);

