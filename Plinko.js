class Plinko{

    constructor(x,y,r){
        var options ={
            isStatic: false,
            'restitution': 0.03,
            'friction':0.5,
            'density':1.2
        };
        
        this.r = r;

        this.body = Bodies.circle(x,y,DIAMETER,options);
        World.add(world,this.body);
        
    }

    display(){
        push()
        var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(255);
      ellipse(50,680,10,10); 
      pop()

      for(var j = 40; j<=width; j=j+50)
      {
          plinko.push(new Plinko(j,75));
      }
      for(var j = 15; j<=width-10; j=j+50)
      {
          plinko.push(new Plinko(j,175));
      }
      for(var j = 40; j<=width; j=j+50)
      {
          plinko.push(new Plinko(j,275));
      }
      for(var j = 15; j<=width-10; j=j+50)
      {
          plinko.push(new Plinko(j,375));
      }
    }
};