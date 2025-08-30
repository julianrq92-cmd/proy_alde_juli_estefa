const CFG = {
  petalsK: 6,
  radius: 220,
  rotSpeed: 0.005,
  hueSpeed: 0.4,
  pulseSpeed: 0.015,
  trail: 0.12,

  moveAmpX: 180,
  moveAmpY: 100,
  moveSpeedX: 0.0006,
  moveSpeedY: 0.0008,
};

let t = 0;
let nx = Math.random() * 1000;
let ny = Math.random() * 1000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
  strokeWeight(2);
  noFill();
}

function draw() {
  background(215, 80, 10, 1 - CFG.trail);

  nx += CFG.moveSpeedX;
  ny += CFG.moveSpeedY;
  const offsetX = map(noise(nx), 0, 1, -CFG.moveAmpX, CFG.moveAmpX);
  const offsetY = map(noise(ny), 0, 1, -CFG.moveAmpY, CFG.moveAmpY);

  translate(width / 2 + offsetX, height / 2 + offsetY);

  const rot = t * CFG.rotSpeed * TWO_PI;
  rotate(rot);
  const pulse = 1 + 0.15 * sin(t * CFG.pulseSpeed * TWO_PI);

  const baseHue = (t * CFG.hueSpeed) % 360;

  for (let layer = 0; layer < 5; layer++) {
    const hue = (baseHue + layer * 12) % 360;
    const sat = 90;
    const bri = 95 - layer * 8;
    stroke(hue, sat, bri, 0.85 - layer * 0.12);

    beginShape();
    const steps = 720;
    for (let i = 0; i <= steps; i++) {
      const theta = map(i, 0, steps, 0, TWO_PI);
      const k = CFG.petalsK + 0.25 * sin(t * 0.01 + layer);
      const r = CFG.radius * pulse * cos(k * theta);
      const x = r * cos(theta);
      const y = r * sin(theta);
      vertex(x * (1 - layer * 0.06), y * (1 - layer * 0.06));
    }
    endShape();
  }

  t++;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
