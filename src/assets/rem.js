function calSize () {
	var clientWidth = window.innerWidth || document.documentElement.clientWidth;

	document.documentElement.style.fontSize = clientWidth/6.4 + 'px';
}

calSize();


window.addEventListener('resize',calSize);