class Bob{
    constructor(x,y){
        var options = {
            restitution:1,
            density:1.2
        }
        this.body = Bodies.circle(x,y,15.3,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,30,30);
    }
};