class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        //console.log(options);
        this.rope=Constraint.create(options)
        World.add(world, this.rope);
    }

    fly(){
        this.chain.bodyA=null;
    }
    display(){
        var posA = this.chain.bodyA.position;
        var posB = this.pointB;
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y);
    }
    
}