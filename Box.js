class Box{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;

        var options={
            restitution : 1
        }

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
            rectMode(CENTER);
            angleMode(RADIANS);
            fill("white");
            translate(pos.x,pos.y);
            rotate(angle);
            rect(0,0,this.width,this.height);
        pop();
    }
}