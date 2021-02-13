class Bob {
  constructor(x, y,r) {
    var options = {
     'restitution':0.1,
     'friction':0.05,
     'density':1.00,
     isStatic: true,
    };
    
    this.radius = r;
    this.body = Bodies.circle(x, y,r/2, options);
    this.width = 50;
    this.height = 50;
    World.add(userWorld, this.body);

  };
  display()
  {
    var pos =this.body.position;

    push();
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    //strokeWeight(3);
    //stroke(3);
    fill(255,0,255);
    ellipse(0,0,this.radius,this.radius);
    pop();
  };
};
