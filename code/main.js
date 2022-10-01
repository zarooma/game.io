
import kaboom from "kaboom"


// initialize context
kaboom()
    
    const canvasWidth = 1900               
    const canvasHeight = 1100
    const Pspeed = 5;
    var size = 0.2

// load assets 
loadSprite("rocky", "sprites/rocky.png")
loadSprite("bean", "sprites/bean.png")
loadSprite("coin", "sprites/coin.png")
loadSound("score", "sounds/score.mp3")
// add a character to screen

//should we add scrolling background
//i got to go in ten mins





//add coin to game
const player = add([
	// list of components
	sprite("bean"),
	pos(80, 40),
	area(size),
    scale(size),
    health(100),
    "player",
    {
       speed: Pspeed, 
    }
 ])


    
//slopy stuff put togather by zarooma

onUpdate(function() {
var randw = rand(0, canvasWidth)
var randh = rand(0, canvasHeight)
let tCoin = 0


loop(999,() => {
 //put the stuff do draw coins in to game so stuff
    wait(6) ;
    wait(6) ;
    wait(6) ;
    console.log(`coins in game ${Tcoin}`)
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
    

    //colsion done by zarooma

    player.onCollide("coin", (coin) => {
    var pSize = player.scale = size + 0.00001
    size = pSize
    player.scale = size
    play("score")
    coin.destroy()
        //fixed bug
    tCoin = tCoin + 1
        
     
     });

})
// ateempt to make a 5 second dash by zarooma
 
keyDown("shift",() => {
    var dash = Pspeed * 2
    player.Pspeed =  dash
    wait(5)
    player.Pspeed =  Pspeed
});
    

 
 

 // go left
	keyDown("a", () => {
		player.move(-pSpeed, 0);
	});

  //go right
	keyDown("d", () => {
		player.move(Pspeed, 0); 
	});
     //zaroom up and down what the date 29/09/2022
	keyDown("w", () => {
       player.move(0, -Pspeed);
    });
	keyDown("s", () => {
        player.move(0, Pspeed);
    });
	keyDown("a", () => {
		player.move(-Pspeed, 0);
	});
    keyDown("left", () => {
		player.move(-Pspeed, 0);
	});
    
  
	keyDown("right", () => {
		player.move(Pspeed, 0); 
	});
    
	keyDown("up", () => {
       player.move(0, -Pspeed);
    });
	onKeyDown("down", () => {
        player.move(0, Pspeed);
    });
})

