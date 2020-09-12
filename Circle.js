class Circle {
    constructor(x,y,radius){
        this.body = Bodies.circle(x,y,radius,{isStatic : true});
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        fill ("yellow");
        circle(pos.x,pos.y,this.radius);
        pop ();
    }
}