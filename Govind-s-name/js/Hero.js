class Hero {
    constructor(){
        this.xposition = 200;
        this.yposition = 200;
        this.width = 50;
        this.height = 50;
        this.image = loadImage("images/hero.png");
    }

    
    display(){
        imageMode(CENTER);
        image(this.image, this.xposition, this.yposition, this.width, this.height);
    }
  
    
}
