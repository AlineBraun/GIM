var a = []
var amount

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(0);
	amount = 10
	for(var i=0;i<amount;i+=1){
	a[i] = new Ball();
	}
	
}

function draw() {
	noStroke();
	//background(0,10);
	for(var i=0;i<amount;i+=1){
	a[i].displayBall();
	a[i].moveBall();
	a[i].bounceBall();
	}
	noStroke()

	//fill(random(255), random(255), random (255))  // questo è arcobaleno
	fill(random(0), random(0, 0), random (0, 255))  // questo più specifico
    //fill(map(posX, 0, width, 0, 255), map(posY, 0, width, 0, 255), 0) //da giocarci

    //const  r = (sin(frameCount * 0.031) + 1) * 127.5   //tutto questo va assieme
	//const  g = (sin(frameCount * 0.031) + 1) * 127.5
	//const  b = (sin(frameCount * 0.031) + 1) * 127.5
    //fill(r, g, b)
}

class Ball{
	
	constructor(xx,xy,xr,xs,ys){
		this.x = random(-20,width);
		this.y = random(-20,height);
		this.r = random(-3,75);
		if(random(10)>1){
		this.xspeed = random(3,20);
		this.yspeed = random(5,15);
		}
		else{
			this.xspeed = random(-10,-15);
		this.yspeed = random(-5,-15);
		}
	}
	
	 displayBall(){
	circle(this.x, this.y, this.r)
}

 moveBall(){
	this.x = this.x + this.xspeed;
	this.y = this.y + this.yspeed;
}

 bounceBall(){
	if(this.x>windowWidth){
		this.xspeed = -this.xspeed;
}
	
if(this.x<10){
	this.xspeed = -this.xspeed;
}
	
if(this.y>windowHeight){
	this.yspeed = -this.yspeed;
}
	
if(this.y<0){
	this.yspeed = -this.yspeed;
}
}
 
	
}
function keyPressed(){   //questo mi salva il File

save ("PONG.png")
} 