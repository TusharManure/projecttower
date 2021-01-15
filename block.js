class Block {
    constructor(x, y, width, height) {
        var options = {
            'restitution': 0.3,
            'friction': 1.5,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image=loadImage("glass.png")
        this.width = width;
        this.height = height;


        World.add(world, this.body);
    }
    display() {
       

if (this.body.speed < 9) {

    var pos = this.body.position;
                
    
                imageMode(CENTER);
                //translate(this.body.position.x, this.body.position.y);
              
                image(this.image, pos.x, pos.y, this.width, this.height);
            } else {
                
                World.remove(world, this.body);
                push();
                this.visibility=this.visibility-5
                pop();
            }
        }
        score() {
  if (this.visibility>0  ){
     score+1;
  }
  
}score() {
    if (this.visibility<0 && this.visibility>=-1005){
       score++;
    }
    
  }
}