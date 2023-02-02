canvas = document.getElementById("myc");
pen = canvas.getContext("2d");

car_width = 75;
car_height = 100;
car_x = 440;
car_y = 190;

background_image = "parkingLot.jpg";
car_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	car_imageTag = new Image();
	car_imageTag.onload = uploadcar;
	car_imageTag.src = car_image;
}

function uploadBackground() {
	pen.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);

}

function uploadcar() {
	pen.drawImage(car_imageTag, car_x, car_y, car_width, car_height);


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	if (car_y >= 10) {
		car_y -= 10;
		uploadBackground();
		uploadcar();
	}



}

function down() {
	if (car_y <= 500) {
		car_y += 10;
		uploadBackground();

		uploadcar();
	}


}

function left() {
	if (car_x >= 10) {
		car_x -= 10;
		uploadBackground();
		uploadcar();
	}
}

function right() {
	if (car_x <=725 ) {
		car_x +=10;
		uploadBackground();
		uploadcar();

	}
}