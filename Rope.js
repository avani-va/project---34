class Rope {
  constructor(body1,body2,offsetX,offsetY){
    this.offsetX = offsetX 
    this.offsetY = offsetY

    var option ={
      bodyA: body1,
      bodyB: body2,
      stiffness: 0.04,
      lenght: 10,
      pointB:{x:this.offsetX, y:this.offsetY}
   }

   //this.rope = Constraint.create(option);
   //World.add(world, this.body);

  }

  display() {
   var pointA = this.rope.body1.position;
   var pointB = this.rope.body2.position;
   strokeWeight(4);
   
   line(pointA.x,pointA.y,pointB.x,pointB.y);

  }
}
