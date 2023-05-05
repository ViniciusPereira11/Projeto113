function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(windowWidth/2-320, 250);
   video = createCapture(VIDEO);
   video.hide();
    background("white");
    
}
function draw(){
    image(video, 0, 0, 640, 480);
    circle(605, 30, 70);
    circle(30,30, 70);
    circle(30, 440, 70);
    circle(605, 440, 70);
}
function tirarFoto(){
    save("fotoDeProjeto.png");
}