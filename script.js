// Open Google Maps
function openMap(place){
  const url = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(place);
  window.open(url, "_blank");
}

// WhatsApp booking
function sendToWhatsApp(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let place = document.getElementById("place").value;
  let date = document.getElementById("date").value;

  let msg = `Name: ${name}%0ADestination: ${place}%0ADate: ${date}`;

  window.open(`https://wa.me/919773751838?text=${msg}`);
}
