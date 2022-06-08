//Encuntra el error 
var playerPaddle, computerPaddle, ball;

function setup(){
    // Agrega el código para crear los sprites, el area de trabajo. 
   createCanvas(500,400)
   playerPaddle=createSprite(390,200,10,70);
   computerPaddle=createSprite(10,200,10,70);
   ball= createSprite(200,200,10,10);
  
}

function draw(){
  background("pink");
   // Llama a la función draw debajo
   drawSprites();
}