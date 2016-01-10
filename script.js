var x = document.getElementById("map");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		x.innerHTML = "<p>Latitude: " + latitude + "<br>Longitude: " + longitude + "</p>";
		var img = new Image();
		img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
		x.appendChild(img);
}
