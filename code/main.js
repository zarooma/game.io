import kaboom from "kaboom"


// initialize context
kaboom()
    
    const canvasWidth = 1900
    const canvasHeight = 1100
    const MOVE_SPEED = 1;
    var size = 0.2

// load assets 
loadSprite("bean", "sprites/bean.png")
loadSprite("coin", "sprites/coin.png")
loadSound("score", "sounds/score.mp3")
// add a character to screen

//should we add scrolling background
//i got to go in ten mins


//where

//add coin to game
const player = add([
	// list of components
	sprite("bean"),
	pos(80, 40),
	area(size),
    scale(size),
    health(100),
    "player"
 ])
    


onUpdate(function() {
var randw = rand(0, canvasWidth)
var randh = rand(0, canvasHeight)
let tCoin = 0

if (player.health <= 0) {
    const score = add([
    text("Score:"+tCoin),
    pos(24, 24),
    { value: 0 },
    
])
}    
loop(999999999,() => {
 //put the stuff do draw coins in to game so stuff
    wait(6) ;
        const coin = add([
      sprite("coin"),
      pos(randw,randh),
      area(0.5),
     scale(0.5),
      "coin"
     ]);
    player.onUpdate(() => {
    camPos(player.pos)
})
    

    

    player.onCollide("coin", (coin) => {
    var pSize = player.scale = size + 0.00001
    size = pSize
    player.scale = size
    play("score")
    coin.destroy()
        //fixed bug
   
        we also should add healing gass that is like the trees in swordbattle kinda but not hides you full
    tCoin = tCoin + 1
        //hit run for broken ears
    
        //i have this on now a branch of git hub so we can use herocap to 
     });//gtg bye

})



 
  // but now we need to add getting biger and when you eat the coin a new one spawns

 //yh
 // go left
	keyDown("a", () => {
		player.move(-MOVE_SPEED, 0);
	});

  //go right
	keyDown("d", () => {
		player.move(MOVE_SPEED, 0); 
	});
     //zaroom up and down what the date 29/09/2022
	keyDown("w", () => {
       player.move(0, -MOVE_SPEED);
    });
	keyDown("s", () => {
        player.move(0, MOVE_SPEED);
    });
	keyDown("a", () => {
		player.move(-MOVE_SPEED, 0);
	});
    keyDown("left", () => {
		player.move(-MOVE_SPEED, 0);
	});
    
  
	keyDown("right", () => {
		player.move(MOVE_SPEED, 0); 
	});
    
	keyDown("up", () => {
       player.move(0, -MOVE_SPEED);
    });
	onKeyDown("down", () => {
        player.move(0, MOVE_SPEED);
    });
})