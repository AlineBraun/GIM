let x, y; // variabili per posizione della pallina
let diametro = 20; // diametro della pallina
let velocitaX, velocitaY; // velocità di movimento
let bordoSinistro, bordoDestro, bordoSuperiore, bordoInferiore; // definizione dei bordi del rettangolo

let colorePallina; // colore della pallina

function setup() {
  createCanvas(600, 400);
  x = random(diametro, width - diametro); // posizione iniziale x casuale
  y = random(diametro, height - diametro); // posizione iniziale y casuale
  velocitaX = random(-5, 5); // velocità iniziale x casuale
  velocitaY = random(-5, 5); // velocità iniziale y casuale

  bordoSinistro = 0; // bordo sinistro del rettangolo
  bordoDestro = width; // bordo destro del rettangolo
  bordoSuperiore = 0; // bordo superiore del rettangolo
  bordoInferiore = height; // bordo inferiore del rettangolo

  colorePallina = color(255, 0, 0); // colore iniziale della pallina (rosso)
}

function draw() {
  background(220);

  // spostamento della pallina
  x += velocitaX;
  y += velocitaY;

  // verifica dei bordi del rettangolo
  if (x + diametro / 2 > bordoDestro || x - diametro / 2 < bordoSinistro) {
    velocitaX *= -1;
    colorePallina = color(random(255), random(255), random(255)); // cambia colore quando tocca il bordo laterale
  }
  if (y + diametro / 2 > bordoInferiore || y - diametro / 2 < bordoSuperiore) {
    velocitaY *= -1;
    colorePallina = color(random(255), random(255), random(255)); // cambia colore quando tocca il bordo superiore o inferiore
  }

  // disegna il rettangolo
  fill(220);
  rect(bordoSinistro, bordoSuperiore, bordoDestro - bordoSinistro, bordoInferiore - bordoSuperiore);

  // disegna la pallina
  fill(colorePallina);
  ellipse(x, y, diametro, diametro);
}
