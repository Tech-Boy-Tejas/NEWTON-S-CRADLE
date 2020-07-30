class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:0,
            stiffness:0.04
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var point_A = this.rope.bodyA.position;
        var point_B = this.rope.bodyB.position;
        
        strokeWeight(3);
        stroke("white");
        line(point_A.x,point_A.y,point_B.x + this.offsetX,point_B.y + this.offsetY);
    }
}