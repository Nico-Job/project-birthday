function preload()
{
}
function setup()
{
    canvas = createCanvas(640, 480);

 canvas.position(110, 250);
  video = createCapture(VIDEO);
   video.hide(); tint_color = "";

 }
  
 function draw()
  
 {
     image(video, 0, 0, 640, 480);
     circle(45, 30, 100);
     ellipse(56, 46, 55, 55);
     circle(610, 30, 100);
     ellipse(600, 46, 55, 55);   
    

     }

      function take_snapshot()
      {
         save('eyeballs.png');
         }