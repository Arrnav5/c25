class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.5,
            density:0.8,
            friction:0.9,

        }
        this.body=Bodies.circle(x, y, radius, options)
        World.add(world,this.body);
        console.log(this.body)
        this.radius=radius;
        this.image=loadImage("paper.png"); 
    }

    display(){
        fill("blue");
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}