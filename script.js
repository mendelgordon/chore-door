const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const startButton = document.getElementById('start');
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
const botDoorPath =
	'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath =
	'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath =
	'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath =
	'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
const isBot = door => (door.src === botDoorPath ? true : false);
const isClicked = door => (door.src === closedDoorPath ? false : true);
const playDoor = door => {
	numClosedDoors--;
	if (numClosedDoors == 0) {
		gameOver('win');
	} else if (isBot(door)) {
		gameOver();
	}
};
doorImage1.onclick = () => {
	if (!isClicked(doorImage1) && currentlyPlaying) {
		doorImage1.src = openDoor1;
		playDoor(doorImage1);
	}
};
doorImage2.onclick = () => {
	if (!isClicked(doorImage2) && currentlyPlaying) {
		doorImage2.src = openDoor2;
		playDoor(doorImage2);
	}
};
doorImage3.onclick = () => {
	if (!isClicked(doorImage3) && currentlyPlaying) {
		doorImage3.src = openDoor3;
		playDoor(doorImage3);
	}
};
startButton.onclick = () => (!currentlyPlaying ? startRound() : false);
const startRound = () => {
	doorImage1.src = closedDoorPath;
	doorImage2.src = closedDoorPath;
	doorImage3.src = closedDoorPath;
	numClosedDoors = 3;
	startButton.innerHTML = 'Good luck!';
	currentlyPlaying = true;
	randomChoreDoorGenerator();
};
const gameOver = status => {
	if (status === 'win') {
		startButton.innerHTML = 'You win! Play again?';
	} else {
		startButton.innerHTML = 'Game over! Play again?';
	}
	currentlyPlaying = false;
};
const randomChoreDoorGenerator = () => {
	const choreDoor = Math.floor(Math.random() * numClosedDoors);
	if (choreDoor == 0) {
		openDoor1 = botDoorPath;
		openDoor2 = beachDoorPath;
		openDoor3 = spaceDoorPath;
	} else if (choreDoor == 1) {
		openDoor2 = botDoorPath;
		openDoor1 = beachDoorPath;
		openDoor3 = spaceDoorPath;
	} else {
		openDoor3 = botDoorPath;
		openDoor1 = beachDoorPath;
		openDoor2 = spaceDoorPath;
	}
};
startRound();
