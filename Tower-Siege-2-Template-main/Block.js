class Block extends BaseClass{
  constructor(x, y) {
      super(x,y,50,50);
      this.image=loadImage("images/block.png");
     // this.Visibility=255;
    }
    display(){
      super.display();
     // console.log(this.body.speed);

      //if(this.body.speed<2.5){
        //supper.display();
      //}
      //else{
      //World.remove(world,this.body);
      push();
     // this.Visibility=this.Visibility-5;
      //tint(255,this.Visibility);
      //this.image(this.image,this.body.position.x,this.position.y)
    }
}
}