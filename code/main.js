import kaboom from "kaboom"

var size = 0.2
// initialize context
kaboom()

    const canvasWidth = 1200
    const canvasHeight = 700
    const MOVE_SPEED = 490;
    const Math = 

// load assets 
loadSprite("bean", "sprites/bean.png")
loadSprite("coin", "sprites/coin.png")
// add a character to screen
	const player = add([
	// list of components
	sprite("bean"),
	pos(80, 40),
	area(size),
  scale(size),
    "player"
])
//should we add scrolling background
//i got to go in ten mins


//where
var randw = rand(0, canvasWidth)
var randh = rand(0, canvasHeight)
//add coin to game
const coin = add([
  sprite("coin"),
  pos(randw,randh),
  area(0.4),
 scale(0.4),
    "coin"

])
// but now we need to add getting biger and when you eat the coin a new one spawns

//yh
// go left
	keyDown("left", () => {
		player.move(-MOVE_SPEED, 0);
	});

  //go right
	keyDown("right", () => {
		player.move(MOVE_SPEED, 0); 
	});
     //zaroom up and down what the date 29/09/2022
	keyDown("up", () => {
       player.move(0, -MOVE_SPEED);
    });
	keyDown("down", () => {
        player.move(0, MOVE_SPEED);
    });

//


// add a kaboom on mouse click
onClick(() => {
	addKaboom(mousePos())
})
player.onCollide("coin", () => {
    add
    
});
  //bye  

//next we need to add lots of coins so when we add server theres not just one coin and when we eat the coin it disapers ok im going now bye can you make shure no one deletes the code thnx