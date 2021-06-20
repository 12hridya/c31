class Bird extends BaseClass {
  constructor(x,y){     //setup()
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //create an empty array called trajectory to store the x and y positions of the bird   
this.trajectory=[];
  }

  display() {     //draw()
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();


    if(this.body.velocity.x > 10 && this.body.position.x > 200){
        //create an array called position and store the x and y positions of the bird inside it 
        var position=[this.body.position.x,this.body.position.y]
        //0th index = x position of the bird
        //1st index = y position of the bird

        //push the position array inside the empty trajectory array
        //Empty_arrayName.push(the array with values)
        this.trajectory.push(position);
    }   
   

    /*for(initalisation; condition; increment/decrement){
      what to repeat --> image, text, line, sprite...
    }
    for(when to start repeating; when to stop repeating; how to repeat in the next loop)
    1) initialisation - starting - start from where the bird is positioned
    2) condition - to stop - when the position array stops recording the x , y position of the bird till the bird falls on the ground
    3) increment - repeat the same image again and again
    */

    for(var i = 0; i<this.trajectory.length; i++){
        //image(imageName, x-position of the bird 0th index,y-position of bird 1st index)
        image(this.smokeImage,this.trajectory[i][0], this.trajectory[i][1] )
    }
  }
}
