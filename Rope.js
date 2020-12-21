class Rope{
    constructor(body1,body2, offsetX, offsetY)
    {
      this.offsetX=offsetX
      this.offsetY=offsetY
        var options=
            {
                bodyA:body1,
                bodyB:body2,
                pointB:{x:-200, y:0}
            
            }
            //console.log(options)
            this.rope = Constraint.create(options);
            World.add(world,this.rope);
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        
        strokeWeight(5);
        line(pointA.x,pointA.y-69/2,pointB.x+this.offsetX,pointB.y+this.offsetY);
    }
}