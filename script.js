function controlNav() {
	"use strict";
	var under = document.getElementById("nav-u");
	if (under.className === "nav-under") {
		under.className = "nav-under nav-under-collapse";
	}
	else {
		under.className = "nav-under";
	}
}

function openGoogleMaps() {
	"use strict";
	var maps = document.getElementById("googleMaps");
	var list = document.getElementById("googleMapsList");
	if (maps.className === "maps-closed") {
		maps.className = "maps-open";
	} else {
		maps.className = "maps-closed";
	}

}
var firstEnter = true;
function maps() {

	var frame = document.getElementById("fraampie");
	if (frame.style.height == "0px" || frame.style.height == "0" || firstEnter == true) {
		frame.style.height = "400px";
		firstEnter = false;
	} else {
		frame.style.height = "0px";
	}

}

var map = L.map('map');

// Add OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const listElements = document.querySelectorAll('#googleMapsList a');

listElements.forEach((li) => {
    // console.log(li.textContent.trim());
    var marker = L.marker([li.dataset.x, li.dataset.y]).addTo(map);
    marker.bindPopup("<p style='font-size:12px; margin:0px;'>" + li.innerHTML + "</p> <a style='font-size:12px;' href='" + li.href + "'> link </a>").openPopup();
    li.addEventListener('mouseover', () => {
        map.flyTo([li.dataset.x, li.dataset.y], li.dataset.z);
    });
});

map.setView([52.0925875796154, 5.118516600442327], 8);
