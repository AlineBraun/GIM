let posizioneX = 200
let posizioneY = 200
let velX = 7
let velY = 8


function setup(){
	createCanvas(800, 600)
	posizioneX = width/2
	posizioneY = height/2
	velX =3
	velY=3
	background(240, 60, 0)

}

function draw(){
	noStroke()
	fill(map(posizioneX, 0, width, 0, 255), map(posizioneY, 0, width, 0, 255), 0)
	//background(200)

	const r =(sin(frameCount * 0.011))

	ellipse(posizioneX, posizioneY, 400, 400)

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX  >= width  || posizioneX <= 0) velX = -velX 
	if (posizioneY  >= height  || posizioneY <= 0) velY = -velY 


}

function keyPressed(){

	save("pong.png")
}