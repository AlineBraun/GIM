function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){
	
	background(0,0,0)


	let lato = windowWidth
	
	stroke(255)
	strokeWeight = random(1, 50)
	Fill = random (0, 20)

	beginShape(LINES)

	for(let i=0; i<800; i=i+1){
		let lunghezza = random(10, 150)
		let posX = random(-lato, lato)
		let posY = random(-lato, lato)
		let posZ = random(-lato, lato)
		vertex(posX, posY, posZ)
		vertex(posX, posY + lunghezza, posZ)
	}
	endShape()
}