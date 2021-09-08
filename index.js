

changeBgColor();


function changeBgColor() {
	let time = new Date();
	let hours = time.getHours();
	let colornum = 
	(hours > 0 && hours <= 4)   ? 1 : 
	(hours > 4 && hours <= 8)   ? 2 :
	(hours > 8 && hours <= 12)  ? 3 :
	(hours > 12 && hours <= 16) ? 4 :
	(hours > 16 && hours <= 20) ? 5 : 6;

	document.querySelector('.background').classList.add('bgcolor'+ colornum)

	console.log(time);
	console.log(colornum);
}