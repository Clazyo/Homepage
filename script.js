/* -- Convert degrees to radians -- */
function deg2rad(d) { return (2 * d / 360) * Math.PI; }

/* -- progress clocks hand every once in a while -- */
setInterval(() => {
	let minute = document.getElementById("minute");
	let hour = document.getElementById("hour");
	let second = document.getElementById("second");

	/* -- no angle in 3 a clock -- */
	let s = new Date().getSeconds() * 6 - 90;
	let m = new Date().getMinutes() * 6 - 90;
	let h = new Date().getHours() * 30 - 90;

	second.style.transform = 'rotate(' + s + 'deg)';
	minute.style.transform = 'rotate(' + m + 'deg)';
	hour.style.transform = 'rotate(' + h + 'deg)';

}, 10);

/* -- update clock fast -- */
/* -- hand angle calculation. -- */
function vec2ang(x,y) {
	angleInRadians = Math.atan2(y, x);
	angleInDegrees = (angleInRadians / Math.PI) * 180.0;
	return angleInDegrees;
}

/* -- calculate angle on notches and positions. -- */
let nc = document.getElementById("notch-container");
let angle = 0;
let rotate_x = 120;
let rotate_y = 0;

/* -- calculate minute notches -- */
for (let i = 0; i < 60; i++) {
	let thin = document.createElement("div");
	let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
	let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
	let r = vec2ang(x, y);
	thin.className = "thin";
	thin.style.left = 122 + x + "px";
	thin.style.top = 127 + y + "px";
	thin.style.transform = "rotate(" + r + "deg)";
	nc.appendChild(thin);
	angle += (Math.PI / 300) * 10;

}
// reset angle parameters
angle = 0; rotate_x = 120; rotate_y = 0;

/* -- thicc notches -- */
for (let i = 0; i < 12; i++) {
	let notch = document.createElement("div");
	let x = rotate_x * Math.cos(angle) - rotate_y * Math.cos(angle);
	let y = rotate_y * Math.cos(angle) + rotate_x * Math.sin(angle);
	let r = vec2ang(x, y);
	notch.className = "notch";
	notch.style.left = 122 + x + "px";
	notch.style.top = 127 + y + "px";
	notch.style.transform = "rotate(" + r + "deg)";
	nc.appendChild(notch);
	angle += (Math.PI / 60) * 10;

}
