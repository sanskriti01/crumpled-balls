class Paper {
    constructor(x, y,radius) {
      var options = {
          isStatic: false,
          'restitution':0.3,
         'friction':0.5,
          'density':1.2
          
         
      }
     // this.image = loadImage("paper (2).png");
      
      this.body = Bodies.circle(x, y,radius/2, options);
      this.radius = radius;
     
      World.add(world, this.body)
      
      
    }
    display(){
      ellipseMode(RADIUS)

      fill("yellow")

      circle(this.body.position.x, this.body.position.y, this.radius)
     
    }
  };
  