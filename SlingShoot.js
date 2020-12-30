class SlingShoot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
        
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

this.pointB=pointB

        this.slingshoot = Constraint.create(options);
        World.add(world, this.slingshoot);
    }

    display(){
        if (this.slingshoot.bodyA){

            console.log("this.slingShoot.bodyA="+this.slingshoot.bodyA);
        var pointA = this.slingshoot.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}
    
    fly() {
     console.log("i am inside fly");
     
     this.slingshoot.bodyA=null

    }  
    
    

}