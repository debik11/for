let header = document.getElementsByClassName("div-header");
for(let i = 0; i < header.length; i++){
	header[i].style.left = i  * 800 + "px";
}
let buttons = document.getElementsByClassName("button");
for(let m = 0; m < 4; m++){
	buttons[m].addEventListener("click", function(){
		for(let i = 0; i < header.length; i++){
			header[i].style.left = (i - m)  * 800 + "px";
		}
	});
}