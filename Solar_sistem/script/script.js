var	modal1 = document.getElementById('modW1'),
	modal2 = document.getElementById('modW2')
	img = document.getElementById('img');

function modalFun1() {
	modal1.style.display = 'flex';
}

function modalFun2() {
	modal2.style.display = 'flex';
}

function cross() {
	modal1.style.display = 'none';
	modal2.style.display = 'none';
}

window.addEventListener('click', function(e) {
	if (e.target == modal1) {
		modal1.style.display = 'none';
	}
})

window.addEventListener('click', function(e) {
	if (e.target == modal2) {
		modal2.style.display = 'none';
	}
})

function imgBrandFun() {
	img.src = 'img/planet(1).svg';
}

function unimgBrandFun() {
	img.src = 'img/planet.svg';
}
