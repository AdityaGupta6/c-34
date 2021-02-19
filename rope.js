class Rope{
    constructor(bodyA,pointB){
        var options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.05,
           length:150

        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope);
        this.pointB=pointB;

    }
    fly(){
        this.rope.bodyA=null
    }
    attach(body){
        this.rope.bodyA=body
    }
    display(){
        if (this.rope.bodyA) {
            
            push ();
            stroke (255);
            line (this.pointB.x,this.pointB.y,this.rope.bodyA.position.x,this.rope.bodyA.position.y)
            pop ();
        }
    }
};