
var canvas = document.getElementById('myCanvas')

ballx = 50
bally = 50
holey = 400
holex = 800

block_image_width = 5;
block_image_height = 5;

function load_img()
{
	fabric.Image.fromURL('golf-h.png'), function(img) {
		hole_obj = Img
		hole_obj.scaleToWidth(50)
		hole_obj.scaleToHeight(50)
		hole_obj.set ({
			top: holey - 20,
			left: holex - 20
		})
		canvas.add(hole_obj)
	}
	new_image();
}

function new_image()
{
	fabric.Image.fromURL('ball.png'), function(img) {
		ball_obj = Img
		ball_obj.scaleToWidth(50)
		ball_obj.scaleToHeight(50)
		ball_obj.set ({
			top: bally + 20,
			left: ballx + 20
		})
		canvas.add(ball_obj)
	}
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	
	if(ballx==holex && bally==holey)
	{
		canvas.remove('ball_obj')
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		bally = bally - 25
	}

	function down()
	{
		bally = bally + 25
	}

	function left()
	{
		if(ballx >5)
		{
			ballx = ballx - 25
		}
	}

	function right()
	{
		if(ballx <=1050)
		{
			ballx = ballx + 25
		}
	}
	
}

