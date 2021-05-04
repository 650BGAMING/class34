class Ground{
    constructor(x,y,width,height){
        var options = {
            'isStatc': true            
        }
        this.body = Bodies.rectangle(x,y,widht,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;        
        rectMode(CENTER);
        strokeWeight(4);
        stroke("brown");
        fill(255);
        rect(pos.x,pos.y,this.width,this.height);       
    }
}