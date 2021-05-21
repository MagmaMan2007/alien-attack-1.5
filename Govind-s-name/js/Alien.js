class Alien {
    constructor(){
        this.xposition = 0;
        this.yposition = 0;
        this.width = 0;
        this.height = 0;
        this.image = loadImage("images/alien.png");
    }

    
    display(){
        imageMode(CENTER);
        image(this.image, this.xposition, this.yposition, this.width, this.height);
    }
}