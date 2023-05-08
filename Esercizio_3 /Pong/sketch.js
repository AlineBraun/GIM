let posizioneX = 200
let posizioneY = 200
let velX = 7
let velY = 8


function setup(){
	createCanvas(800, 400)

}

function draw(){
	//background(200)

	ellipse(posizioneX, posizioneY, 20, 20)

	posizioneX = posizioneX + velX
	posizioneY = posizioneY + velY

	if (posizioneX  >= width  || posizioneX <= 0) velX = -velX 
	if (posizioneY  >= height  || posizioneY <= 0) velY = -velY 


}

