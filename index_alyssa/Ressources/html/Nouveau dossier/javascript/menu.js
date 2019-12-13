//Petit menu en haut a gauche version mobile 
document.getElementById('nav').querySelector('ul').insertAdjacentHTML("beforebegin", " <span id='menutoggle' > <script src='https://kit.fontawesome.com/701037d095.js' crossorigin='anonymous'></script> <i class='fas fa-bars'></i><span> </span></span>  ");
var menutoggle = document.getElementById("menutoggle");
var activeClass = "is-active"

//affichage du menu 
menutoggle.onclick = function (event) {
	menutoggle.classList.toggle(activeClass);
	var el = document.querySelectorAll("#nav span.submenu  , #nav ul.submenu ");
	var i;
	for (i = 0; i < el.length; i++) {
		el[i].classList.remove(activeClass);
	}
	event.preventDefault();
};

var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};
forEach(document.querySelectorAll("#nav span.submenu "), function (index, value) {
	value.addEventListener('click', function () {
		if (menutoggle.offsetWidth > 0 && menutoggle.offsetHeight > 0) {
			value.classList.toggle(activeClass);
		}
	})
});
//hide du menu
function hideMenu() {
	var el = document.querySelectorAll("#menutoggle , #menutoggle + ul , #nav span.submenu, #nav ul.submenu ");
	var i;
	for (i = 0; i < el.length; i++) {
		el[i].classList.remove(activeClass);
	}
}


document.addEventListener('click', function (e) {
	if (menutoggle.offsetWidth > 0 && menutoggle.offsetHeight > 0) {
		var e = e ? e : window.event;
		var event_element = e.target ? e.target : e.srcElement;
		if (!event_element.closest("#nav")) {
			if (menutoggle.classList.contains(activeClass)) {
				hideMenu();
			}
		}
	}
}, false);

var resizeTimer;
window.addEventListener("resize", function () {
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function () {
		if (menutoggle.offsetWidth <= 0 && menutoggle.offsetHeight <= 0) {
			hideMenu();
		}
	}, 250);
}, false);