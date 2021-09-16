"use strict";

import "../main.scss";

// -------- paragraph --------
let container = document.createElement("div");
document.body.appendChild(container).className = "container";

// -------- header --------
let header = document.createElement("h1");
header.textContent = "Simple Webpack Boilerplate";

// -------- paragraph --------
let paragraph = document.createElement("p");
paragraph.textContent = "This is a simple webpack boilerplate to kickstart TypeScript/JavaScript projects.";

// -------- live clock --------
let span = document.createElement("span");
function liveClock() {
	var display = new Date().toLocaleTimeString();
	span.textContent = display;
}
setInterval(liveClock, 1000);

// -------- append child --------
container.appendChild(header);
container.appendChild(paragraph);
container.appendChild(span);
