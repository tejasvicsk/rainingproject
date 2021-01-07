const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
var engine, world, maxDrops, thunder, thunder1, thunder2, thunder3, thunder4, thunderGrp, walking;

var umbrellaMan, drops = [];

function preload(){
    thunder1 = loadImage("images/1.png");
    thunder2 = loadImage("images/2.png");
    thunder3 = loadImage("images/3.png");
    thunder4 = loadImage("images/4.png");
    
}

function setup(){
   createCanvas(500, 650);
   engine = Engine.create();
   world = engine.world;
   thunderGrp = new Group();
   umbrellaMan = new Umbrella(250, 525);
  
   maxDrops = 200;
   for(var i = 0; i < maxDrops; i++) {
    drops.push(new Rain(random(100, 400), random(0, 500)));
}
}

function draw(){
    background(0);
    Engine.update(engine);
   
    spawnThunder();
    
    for(var j = 0; j < drops.length; j++){
        drops[j].display();
        drops[j].update();
    }

    umbrellaMan.display();
    drawSprites();
}   
function spawnThunder() {
    if(frameCount % 60 === 0){
        thunder = createSprite(250, 0);
    var  rand = Math.round(random(1, 4));
    switch (rand) {
        case 1:
            thunder.addImage(thunder1);
            break;
    
        case 2:
            thunder.addImage(thunder2)
            break;
 
        case 3:
            thunder.addImage(thunder3);
            break;
            
        case 4:
            thunder.addImage(thunder4);
            break;
 
        default:
            break;
    }
    thunder.scale = 0.5;
    thunderGrp.add(thunder);
    thunderGrp.setLifetimeEach(12);
    }
    
}


