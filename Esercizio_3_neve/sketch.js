let flakes = [];
let windSpeed = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  // Genera un nuovo fiocco di neve in modo casuale
  if (random() < 800) {
    let flake = {
      x: random(width),
      y: 0,
      size: random(2, 8),
      speed: random(1, 7),
      drift: random(-0.1, 1) // Aggiunge la deriva del vento al fiocco di neve
    };
    flakes.push(flake);
  }
  
  // Muove e disegna i fiocchi di neve esistenti
  for (let i = flakes.length - 1; i >= 0; i--) {
    let flake = flakes[i];
    
    // Se il fiocco di neve non si è ancora depositato
    if (flake.y + flake.size / 2 < height) {
      flake.y += flake.speed;
      flake.x += windSpeed + flake.drift; // Aggiunge la velocità del vento e la deriva al fiocco di neve
    }
    
    // Disegna il fiocco di neve
    fill(255);
    noStroke();
    ellipse(flake.x, flake.y, flake.size, flake.size);
    
    // Verifica se il fiocco di neve ha raggiunto il fondo dello schermo
    if (flake.y + flake.size / 2 >= height) {
      flake.y = height - flake.size / 2; // Posiziona il fiocco di neve esattamente sul fondo
      flake.speed = 0; // Ferma il movimento del fiocco di neve
    }
  }
}
