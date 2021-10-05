const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
let T1L = {
  colorR: 255,
  colorG: 0,
  colorB: 0,
  x1: 100,
  y1: 100,
  x2: 300,
  y2: 100,
  x3: 200,
  y3: 200,
  angle: 0,
  speed: 4

}
let T1R= {
  colorR: 255,
  colorG: 255,
  colorB: 0,
  x1: 300,
  y1: 100,
  x2: 500,
  y2: 100,
  x3: 400,
  y3: 200,
  angle: 0,
  speed: 2.5
}
let T2L= {
  angle: 0,
  colorR: 255,
  colorG: 0,
  colorB: 0,
  x1: 300,
  y1: 100,
  x2: 500,
  y2: 100,
  x3: 400,
  y3: 200,
  speed: 5
}
let T2R = {
  angle: 0,
  colorR: 0,
  colorG: 0,
  colorB: 255,
  x1: 300,
  y1: 500,
  x2: 500,
  y2: 500,
  x3: 400,
  y3: 300,
  speed: 1
}

let rotateObjectsArray= [T1L,T2L]
let speedObjectsArray02 = [T1R,T2R]
const drawBody = Helpers.drawBody;
let engine;

// let T1L;
// let T1R;
// let T2L;
// let T2R;
let ground;


function setup() {
  createCanvas(1000, 600);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  T1L = Bodies.polygon(400,100,3,50);
  T1R = Bodies.polygon(300,100, 3,50);
  T2L = Bodies.polygon(300,100, 3, 50);
  T2R = Bodies.polygon(300,100,3,50)
  ground = Bodies.rectangle(400, 500, 810, 10, {
    isStatic: true, angle: Math.PI * 0.06})
    // ground2 = Bodies.rectangle(400, 0, 610, 10,{
    //   isStatic:true, angle: Math.PI * 0.5})
    // ground = Bodies.rectangle(200, 250, 405, 5
    //   isStatic: true, angle: Math.PI * 0.06

    ;
    // add all of the bodies to the world
    World.add(engine.world, [T1L, T1R ,T2L,T2R,ground,]);

    // run the engine
    Engine.run(engine);
  }

  function draw() {
    background(0);

    fill(255);
    drawBody(T1L);
    drawBody(T1R);
    drawBody(T2L);
    drawBody(T2R);

    fill(0);
    drawBody(ground);

    function rotateObjects(T1L) {
      strokeWeight(1);
      stroke(255);
      fill(T1L.colorR,T1L.colorG,T1L.colorB)
      let positionRotationX = (T1L.x1 + T1L.x2 + T1L.x3)/3;
      let positionRotationY = (T1L.y1 + T1L.y2 +T1L.y3)/3;
      push()
      translate(positionRotationX, positionRotationY)
      rotate(T1L.angle)
      triangle(T1L.x1 - positionRotationX,T1L.y1 - positionRotationY,T1Ly.x2 - positionRotationX, T1Ly.y2  - positionRotationY, T1L.x3  - positionRotationX, T1L.y3 - positionRotationY)
      pop()
      T1L.angle = T1L.angle + T1L.speed;
      stroke(255)
      strokeWeight(10)
      point(positionRotationX, positionRotationY)


      for (i = 0; i < rotateObjectsArray.length; i++) {
        rotateObjects(rotateObjectsArray[i]);
      }
      function mouseClicked() {
        for (i=0; i < speedObjectsArray02.length; i++){
          speedObjectsArray02[i].speed = speedObjectsArray02[i].speed + 50;}
        }
      }
}
