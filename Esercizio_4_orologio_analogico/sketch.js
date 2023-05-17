function setup(){
	createCanvas(windowWidth, windowHeight)
}

function draw(){

	let h = hour()
	let m = minute()
	let s = second()
	let ms = new Date().getMilliseconds()

	let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 / 60 * m
	let angolo_m = TWO_PI / 60 * m
	let angolo_s = TWO_PI / 60 * s + TWO_PI / 60 * ms / 1000

	background(0)

	// spostiamo l'origine in centro 
	translate(width/2, height/2)


	// bordo esterno
	noStroke()
	fill(255)
	ellipse(0, 0, 400, 400)
	
	push()
	fill(255, 0, 0)
	for (let i=0; i<360; i++){
	//ellipse(0, 200, 5, 5)
	rect (0, 190, 10, 10)
	rotate(TWO_PI/360)
	}
	pop()

	fill(0)
	push()
	for (let i=0; i<60; i++){
	//ellipse(0, -185, 5, 5)
	rect (0, 170, 3, 3)
	rotate(TWO_PI/60)
	}
	pop()
	
	fill(0)
	push()
	for (let i=0; i<60; i++){
	//ellipse(0, -185, 10, 10)
	rect (-4, 170, 8, 8)
	rotate(TWO_PI/12)
	}

	pop()

	fill(0)
	
	//ruotiamo per le ore
	push()
	fill(0, 0, 250)
	rotate(angolo_h)
	rect (-6, -150, 12, 12)
	pop()	

	// ruotiamo per i minuti 
	push()
	fill(0, 0, 250)
	rotate(angolo_m)
	rect (-8, -180, 16, 16)
	pop()	

	
	// ruotiamo per i secondi 
	
	push()
	fill (255, 255, 0)
	rotate(angolo_s)
	ellipse(0, -140, 40, 40)	
	//rect (-2, 40, 4, -180)
	pop()

	noStroke()
	fill(0)
	//ellipse(0, 0, 8,)

	//stroke(0, 0, 200)
	//line (0, -1000, 0, 1000)
	//line (-1000, 0, 1000, 0)

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}
