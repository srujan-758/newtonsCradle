class Bob{
    constructor(x,y,color){
        var options = {
            isStatic:false,
            'restitution':0.9,
            'friction':0,
            'density':0.9,
            'frictionAir':0.0,
            'slop':1,
            'inertia': Infinity

        }
        this.body = Bodies.rectangle(x,y,85,85,options);
       // this.image= loadImage("paper.png");
        //this.width= width;
        this.color=color;
        World.add(world,this.body);
      
     
    }
    //Changed here -> EllipseMode, Ellipse Params
    display (){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        strokeWeight(1);
        stroke("white")
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0, 45,45);        
        pop();
    }
};
