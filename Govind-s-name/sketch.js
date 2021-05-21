var hero,alien,people,house;
var heroimage;
var ground, Canvas;

function preload(){
    

}


function setup(){
    Canvas = createCanvas(displayWidth - 100, displayHeight - 100);
    hero = new Hero();
    
}

function draw(){
    background("Orange");

    //create hero
    hero.width = 50;
    hero.height = 50;

    hero.display();

    
 
}
 function keyPressed(){
    if(keyCode===87){
        hero.Y+=-5;
    }
}


